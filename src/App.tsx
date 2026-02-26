import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Programs } from './components/Programs';
import { Features } from './components/Features';
import { Timeline } from './components/Timeline';
import { Mentor } from './components/Mentor';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Features />
        <Timeline />
        <Mentor />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
