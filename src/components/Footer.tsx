import { Instagram, Linkedin, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-white mb-6">
              Wealthcraft<span className="text-blue-500">Trading</span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering individuals with the knowledge and discipline to master the stock market.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.instagram.com/wealthcrafttradingzone/" icon={Instagram} />
              <SocialIcon href="https://www.linkedin.com/company/wealthcraft-trading-zone/" icon={Linkedin} />
              <SocialIcon href="https://www.facebook.com/profile.php?id=61564073631815" icon={Facebook} />
              <SocialIcon href="https://www.youtube.com/@WealthCraftTradingZone" icon={Youtube} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#programs" className="hover:text-blue-400 transition-colors">Programs</a></li>
              <li><a href="#mentor" className="hover:text-blue-400 transition-colors">Mentorship</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                <span>Wazirabad, Sangam Vihar, Near Jharoda Metro Station, Burari, Delhi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 flex-shrink-0" size={18} />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 flex-shrink-0" size={18} />
                <a href="mailto:info@wealthcraft.in" className="hover:text-white transition-colors">info@wealthcraft.in</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="text-blue-500 flex-shrink-0" size={18} />
                <span>Mon – Fri: 9:00 AM – 9:00 PM</span>
              </li>
              <li className="text-slate-500 pl-8">Sat - Sun: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Wealthcraft Trading Zone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
  >
    <Icon size={20} />
  </a>
);
