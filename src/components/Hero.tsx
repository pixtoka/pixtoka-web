
import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div ref={domRef} className={`relative overflow-hidden pt-32 pb-24 lg:pt-32 lg:pb-40 transition-all duration-1000 ease-out transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

      {/* Background Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-lg shadow-blue-600/10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          <span className="text-sm font-bold tracking-wide text-white">Pixtoka is still under development</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-8xl font-[950] tracking-tight text-white mb-8 leading-[1.05]">
          Unify your server <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            with Pixtoka.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
          Next-generation moderation made simple. Fast, reliable, and built to handle the essentials your Discord community needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30">
            Add to Discord
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-slate-900/50 backdrop-blur border border-slate-800 hover:bg-slate-800 text-white rounded-2xl font-black text-lg transition-all border-slate-700">
            Read the Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
