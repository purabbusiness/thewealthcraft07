import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Rahul Sharma",
    review: "The mentorship completely changed my trading style. I moved from random trades to a structured system.",
    rating: 5
  },
  {
    name: "Priya Verma",
    review: "Best place to learn stock market basics. The live market sessions are incredibly helpful for beginners.",
    rating: 5
  },
  {
    name: "Amit Singh",
    review: "Mr. Javed's focus on psychology is what sets this apart. I finally stopped overtrading.",
    rating: 5
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-slate-900 mb-4">
              Student Reviews
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 flex-grow italic">"{testimonial.review}"</p>
                <div className="font-heading font-semibold text-slate-900">
                  {testimonial.name}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
