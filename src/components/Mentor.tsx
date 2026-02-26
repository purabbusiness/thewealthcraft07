import { FadeIn } from './FadeIn';
import { Quote } from 'lucide-react';

export const Mentor = () => {
  return (
    <section id="mentor" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="bg-gradient-soft-blue rounded-3xl p-10 md:p-16 border border-blue-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            
            <Quote className="text-blue-200 w-20 h-20 absolute top-8 left-8 -z-0 opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Meet Your Mentor</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                Mr. Javed
              </h3>
              <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8 rounded-full"></div>
              
              <p className="text-xl md:text-2xl text-slate-700 font-light italic mb-8 leading-relaxed">
                "Trading is 20% strategy and 80% psychology. My goal is to help you master both."
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="font-semibold">8+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="font-semibold">Stock Market Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="font-semibold">Discipline Focused</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
