import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';

export const CTA = () => {
  return (
    <section id="demo" className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 opacity-90"></div>
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready To Start Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Trading Journey?
            </span>
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join our next batch and take the first step towards financial freedom.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: ["0 0 0 rgba(250, 204, 21, 0)", "0 0 20px rgba(250, 204, 21, 0.5)", "0 0 0 rgba(250, 204, 21, 0)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
            href="#demo"
            className="inline-block bg-gradient-gold text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg"
          >
            Join Demo Class
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
};
