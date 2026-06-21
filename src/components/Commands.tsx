
import React, { useState, useEffect, useRef } from 'react';

const Commands: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ['All', 'General', 'Moderation', 'Utility'];

  const commands = [
    { name: 'help', desc: 'Display all available commands and bot information.', cat: 'General' },
    { name: 'ban', desc: 'Permanently remove a user from the server.', cat: 'Moderation' },
    { name: 'timeout', desc: 'Mute a user for a specified duration.', cat: 'Moderation' },
    { name: 'clear', desc: 'Bulk delete messages from the current channel.', cat: 'Moderation' },
    { name: 'ping', desc: 'Check connection latency and server status.', cat: 'Utility' },
    { name: 'stats', desc: 'Get detailed statistics about the server.', cat: 'Utility' },

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredCommands = activeCategory === 'All'
    ? commands
    : commands.filter(c => c.cat === activeCategory);

  return (
    <section
      id="commands"
      ref={sectionRef}
      className="py-32 bg-slate-950/50 relative overflow-hidden"
    >
      {/* Subtle animated background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-slow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full animate-slow-pulse delay-700"></div>
      </div>

      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Powerful Slash Commands</h2>
          <p className="text-slate-400 text-lg">A sneak peek of our most popular commands. Filter by category to explore.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border relative overflow-hidden group/btn ${
                activeCategory === cat
                  ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer-fast"></span>
              )}
            </button>
          ))}
        </div>

        {/* Grid with consistent height and fixed min-height to prevent layout jump */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px] content-start">
          {filteredCommands.map((cmd, idx) => (
            <a
              key={`${activeCategory}-${cmd.name}`}
              href={`https://docs.pixtoka.xyz/commands/${cmd.cat}/${cmd.name}/`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-500 group animate-in fade-in slide-in-from-bottom-4 relative h-full`}
              style={{
                animationDelay: `${idx * 60}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-black group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-blue-500/5">
                  <span className="text-xl">/</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-black text-slate-500 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50">
                  {cmd.cat}
                </span>
              </div>

              <div className="flex-1">
                <h5 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  {cmd.name}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h5>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {cmd.desc}
                </p>
              </div>

              {/* Action indicator at bottom */}
              <div className="mt-6 flex items-center text-blue-500/60 font-bold text-[10px] uppercase tracking-tighter group-hover:text-blue-400">
                View Documentation <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.8rem] pointer-events-none"></div>
            </a>
          ))}
        </div>
        <div className="mt-16 text-center flex flex-col items-center justify-center">
          <p className="text-slate-500 text-md font-semibold mb-4 max-w-md py-2">
            Looking for something specific? We have dozens of other commands ready to help you manage your server.
          </p>
          <a
            href="https://docs.pixtoka.xyz/commands/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] hover:scale-105 group shimmer-btn shimmer-btn-hover"
          >
            Explore All Commands
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-fast {
          animation: shimmer-fast 2s infinite;
        }
        @keyframes slow-pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-slow-pulse {
          animation: slow-pulse 8s ease-in-out infinite;
        }
        .fade-in { animation: fadeIn 0.5s ease-out; }
        .slide-in-from-bottom-4 { animation: slideInFromBottom 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInFromBottom { from { transform: translateY(1rem); } to { transform: translateY(0); } }
      `}} />
    </section>
  );
};

export default Commands;
