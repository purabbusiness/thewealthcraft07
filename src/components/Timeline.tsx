import { FadeIn } from './FadeIn';

const steps = [
  {
    number: "01",
    title: "Market Foundation",
    description: "Understanding the core mechanics of the stock market, technical analysis, and price action."
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Mastering proven trading setups with defined entry, exit, and stop-loss rules."
  },
  {
    number: "03",
    title: "Live Market Execution",
    description: "Applying learned strategies in live market conditions under expert supervision."
  },
  {
    number: "04",
    title: "Confidence & Consistency",
    description: "Building the psychology and discipline required to be a profitable trader long-term."
  }
];

export const Timeline = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-slate-900 mb-4">
              Training Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our structured approach ensures you don't just learn, but master the art of trading.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative h-full hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-blue-600/30 mx-auto md:mx-0">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3 text-center md:text-left">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-center md:text-left">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
