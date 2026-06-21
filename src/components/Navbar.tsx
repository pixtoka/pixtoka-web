import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gère le scroll vers une section spécifique de l'accueil
  const handleSectionScroll = (sectionId: string) => {
    // Redirige vers la racine du HashRouter ('/')
    navigate('/');

    // Un petit délai laisse le temps au DOM de recharger l'accueil si on arrivait d'une autre page
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg shadow-black/20'
        : 'bg-transparent border-b border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center overflow-hidden border border-white/5 shadow-lg group-hover:scale-110 transition-transform">
              <img src="/Pixtoka_Logo_Cropped_SkyBlue.svg" alt="Logo" className="w-7 h-7" />
            </div>
            <span className="text-xl font-black tracking-tight text-white">Pixtoka</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'home' || currentPage === '' ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                Home
              </Link>

              <button
                onClick={() => handleSectionScroll('commands')}
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Commands
              </button>

              <button
                onClick={() => handleSectionScroll('support')}
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                FAQ
              </button>

              <a
                href="https://docs.pixtoka.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
              Add to Discord
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;