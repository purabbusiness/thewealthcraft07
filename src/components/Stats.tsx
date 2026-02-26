import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCurrent(Math.floor(progress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{current}{suffix}</span>;
};

export const Stats = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-heading font-bold text-blue-600 mb-2">
              <Counter from={0} to={1000} suffix="+" />
            </div>
            <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">Students Trained</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-heading font-bold text-blue-600 mb-2">
              <Counter from={0} to={8} suffix="+" />
            </div>
            <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">Years Experience</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-heading font-bold text-blue-600 mb-2">
              <Counter from={0} to={100} suffix="%" />
            </div>
            <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">Practical Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};
