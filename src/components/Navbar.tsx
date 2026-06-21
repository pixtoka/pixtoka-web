import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (sectionId?: string) => {
    onNavigate('home');
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${sectionId}`);
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg shadow-black/20'
        : 'bg-transparent border-b border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo - Cliquable pour revenir en haut de l'accueil */}
          <div
            onClick={() => handleHomeClick()}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center overflow-hidden border border-white/5 shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-xl font-[950] tracking-tighter text-transparent bg-clip-text select-none leading-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0%, #ffffff 20%, #bae6fd 20%, #bae6fd 40%)',
                  WebkitBackgroundClip: 'text',
                }}>
                Pk
              </span>
            </div>
            <span className="text-xl font-black tracking-tight text-white">Pixtoka</span>
          </div>

          {/* Liens de Navigation au centre */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {/* Bouton Accueil */}
              <button
                onClick={() => handleHomeClick()}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                Home
              </button>

              {/* Liens vers les sections de l'accueil */}
              <button
                onClick={() => handleHomeClick('commands')}
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Commands
              </button>

              <button
                onClick={() => handleHomeClick('support')}
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                FAQ
              </button>

              {/* <button
                onClick={() => {
                  onNavigate('terms');
                  // Nettoie l'URL pour enlever les vieilles ancres (#commands) de la barre d'adresse
                  window.history.pushState(null, '', window.location.pathname);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'terms' ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                Terms
              </button> */}

              <button
                onClick={() => {
                  onNavigate('privacy');
                  // Nettoie l'URL pour enlever les vieilles ancres (#commands) de la barre d'adresse
                  window.history.pushState(null, '', window.location.pathname);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'privacy' ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                Privacy
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

          {/* Bouton d'action à droite */}
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