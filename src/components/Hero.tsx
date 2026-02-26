import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-soft-blue opacity-80"></div>
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"
        ></motion.div>
        
        {/* Floating Orbs */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn delay={0.1}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide mb-6">
            Wealthcraft Trading Zone
          </span>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-slate-900 leading-tight mb-6">
            Master The Stock Market <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              With Confidence
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Practical trading education designed to build real skills and disciplined traders. 
            Start your journey towards financial independence today.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#demo"
            className="w-full sm:w-auto bg-gradient-gold text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-yellow-500/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Join Demo Class</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#programs"
            className="w-full sm:w-auto bg-white text-blue-600 border border-blue-200 px-8 py-4 rounded-full font-semibold text-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
          >
            Explore Programs
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
};
