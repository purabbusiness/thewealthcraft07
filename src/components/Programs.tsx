import { FadeIn } from './FadeIn';
import { TrendingUp, BarChart2, Globe, Award, ArrowRight, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

const courses = [
  {
    title: "Basics To Advance Stock Market",
    duration: "8 Weeks",
    students: "1200+ Students",
    icon: TrendingUp,
    description: "A comprehensive foundation for beginners to master stock market concepts."
  },
  {
    title: "Future & Options Trading",
    duration: "8 Weeks",
    students: "800+ Students",
    icon: BarChart2,
    description: "Advanced strategies for derivatives trading and risk management."
  },
  {
    title: "Crypto & Forex Trading",
    duration: "8 Weeks",
    students: "700+ Students",
    icon: Globe,
    description: "Navigate global markets with currency and cryptocurrency trading skills."
  },
  {
    title: "Complete Trading Mastery",
    duration: "3 Months",
    students: "500+ Students",
    icon: Award,
    description: "The ultimate mentorship program covering all aspects of professional trading."
  }
];

export const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-slate-900 mb-4">
              Our Programs
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose the path that fits your goals. From basics to professional mastery, we have a structured curriculum for you.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full flex flex-col hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <course.icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{course.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-semibold w-20">Duration:</span> {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-semibold w-20">Enrolled:</span> {course.students}
                  </div>
                </div>

                <a href="#contact" className="w-full py-3 rounded-lg border border-blue-100 text-blue-600 font-medium text-center hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
                  Explore Class
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Mentorship Card */}
        <FadeIn delay={0.4}>
          <div className="relative overflow-hidden bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-yellow-100 max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-bold uppercase tracking-wider mb-4 border border-yellow-100">
                  <UserCheck size={14} /> Premium
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-slate-900 mb-3">
                  1:1 Personal Mentorship
                </h3>
                <p className="text-slate-600 max-w-md">
                  Direct expert guidance for traders seeking personalized growth. Get tailored strategies and real-time feedback.
                </p>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#apply-mentorship"
                className="bg-gradient-gold text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-yellow-500/20 whitespace-nowrap"
              >
                Apply for Mentorship
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
