import React from 'react'
import { Menu, X } from 'lucide-react';

interface NavbarProps {

  onNavigate: (sectionId: any) => void;

}


const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', text: 'Home' },
    { href: '#services', text: 'Spark Features' },
    { href: '#contact', text: 'Sign up' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home">
            {isScrolled && (<img src="images/sparkbraille.png" alt="Spark Logo" className="h-12" />)}
          </a>
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`lg:flex ${isMenuOpen ? 'block absolute top-full left-0 w-full bg-white' : 'hidden'}`}>
            <ul className="flex flex-col lg:flex-row gap-6 p-4 lg:p-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            <div className="lg:hidden flex gap-4 p-4 border-t border-gray-200">
              <a href="https://www.facebook.com/profile.php?id=100048414672800"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Visit our Facebook page"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;