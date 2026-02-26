import { FadeIn } from './FadeIn';
import { CheckCircle2, Layers, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: "Practical Live Market Learning",
    description: "We don't just teach theory. We trade live in the market to show you how it works in real-time."
  },
  {
    icon: CheckCircle2,
    title: "Structured Step-by-Step Training",
    description: "A proven curriculum that takes you from a complete beginner to a confident trader."
  },
  {
    icon: Users,
    title: "1000+ Successful Students",
    description: "Join a growing community of profitable traders who have transformed their financial lives."
  },
  {
    icon: Award,
    title: "8+ Years Experience",
    description: "Learn from mentors who have weathered multiple market cycles and crashes."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-slate-900 mb-4">
              Why Choose Wealthcraft?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We focus on building disciplined traders, not just teaching strategies.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-transparent hover:border-blue-100 h-full">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
