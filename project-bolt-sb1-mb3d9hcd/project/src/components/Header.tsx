import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const LOGO_URL =
  'https://ik.imagekit.io/wvlb7dccz/photo_2025-12-18_20-01-43.jpg';

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src={LOGO_URL}
              alt="ASPIM Industrie Logo"
              className="h-12 w-12 rounded-full object-cover border-2 border-[#FFD232]"
            />

            <div className="leading-tight">
              <span className="text-xl font-bold">ASPIM</span>
              <span className="block text-sm font-bold text-[#FFD232]">
                INDUSTRIE
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[#FFD232] ${
                  activeSection === item.id ? 'text-[#FFD232]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}

            <button className="border-2 border-[#FFD232] text-[#FFD232] px-6 py-2 rounded-lg hover:bg-[#FFD232] hover:text-black transition-colors font-medium">
              Get Started
            </button>
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-[#FFD232] ${
                  activeSection === item.id ? 'text-[#FFD232]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}

            <button className="w-full border-2 border-[#FFD232] text-[#FFD232] px-6 py-2 rounded-lg hover:bg-[#FFD232] hover:text-black transition-colors font-medium">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
