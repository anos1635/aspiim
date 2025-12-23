import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const yellowColor = '#FFD232';

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: yellowColor }}>
                <Briefcase className="w-5 h-5" style={{ color: '#000' }} />
              </div>
              <div>
                <span className="text-lg font-bold">Catalogue</span>
                <span className="text-lg font-bold" style={{ color: yellowColor }}> Production</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional catalogue design and production services for modern businesses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="transition-colors" style={{ color: yellowColor }}>Home</a>
              </li>
              <li>
                <a href="#services" className="transition-colors" style={{ color: yellowColor }}>Services</a>
              </li>
              <li>
                <a href="#portfolio" className="transition-colors" style={{ color: yellowColor }}>Portfolio</a>
              </li>
              <li>
                <a href="#team" className="transition-colors" style={{ color: yellowColor }}>Team</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Catalogue Design</li>
              <li>Product Photography</li>
              <li>Brand Strategy</li>
              <li>Print & Digital</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" style={{ color: yellowColor }} />
                <span className="text-sm">Douira, Alger</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" style={{ color: yellowColor }} />
                <span className="text-sm">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" style={{ color: yellowColor }} />
                <span className="text-sm">ASPIMPRODUCTION@catalogueprod.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Catalogue Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
