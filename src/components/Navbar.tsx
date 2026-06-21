import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg shadow-black/20'
        : 'bg-transparent border-b border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
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

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="https://pixtoka.xyz" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="https://docs.pixtoka.xyz" target="_blank"  rel="noopener noreferrer" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Documentation</a>
              <a href="#commands" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Commands</a>
              <a href="#support" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* <button className="text-slate-300 hover:text-white text-sm font-medium transition-colors px-4 py-2">
              Login
            </button> */}
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
