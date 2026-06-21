import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Commands from './components/Commands';
import Support from './components/Support';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

const NavigationWithRouter = () => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  return <Navbar currentPage={currentPage} />;
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
    <main>
    <Hero />

    {/* Stats Section */}
    {/* This section is currently hidden. Reserved for future use. */}
    {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-32 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-[2rem] shadow-2xl">
      <div className="text-center p-4 border-r border-slate-800 last:border-0">
      <div className="text-4xl font-black text-white">50K+</div>
      <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mt-2">Servers</div>
      </div>
      <div className="text-center p-4 border-r border-slate-800 last:border-0">
      <div className="text-4xl font-black text-white">1.2M+</div>
      <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mt-2">Users</div>
      </div>
      <div className="text-center p-4 border-r border-slate-800 last:border-0">
      <div className="text-4xl font-black text-white">99.9%</div>
      <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mt-2">Uptime</div>
      </div>
      <div className="text-center p-4 border-r border-slate-800 last:border-0">
      <div className="text-4xl font-black text-white">250+</div>
      <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mt-2">Commands</div>
      </div>
      </div>
      </section> */}

      <Features />

      <Commands />

      <Support />

      {/* CTA Bottom Section */}
      {/* This section is currently hidden. Reserved for future use. */}
      {/* <section className="py-40 border-t border-slate-900 bg-gradient-to-b from-transparent to-blue-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-black text-white mb-8">Ready to transform your server?</h2>
        <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
        Join thousands of thriving communities that trust Pixtoka for their moderation, economy, and growth needs.
        </p>
        <div className="flex justify-center gap-6">
        <button className="px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-600/30 hover:-translate-y-1 active:translate-y-0 active:scale-95">
        Invite Pixtoka Now
        </button>
        </div>
        </div>
        </section> */}
        </main>

        <footer className="bg-slate-950 border-t border-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-sm">
        <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center overflow-hidden border border-white/5 shadow-lg shadow-blue-600/10">
        <span className="text-2xl font-[950] tracking-tighter text-transparent bg-clip-text select-none leading-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0%, #ffffff 20%, #bae6fd 20%, #bae6fd 40%)',
          WebkitBackgroundClip: 'text',
        }}>
        Pk
        </span>
        </div>
        <span className="font-black text-2xl text-white tracking-tight">Pixtoka</span>
        </div>
        <p className="text-slate-500 text-base leading-relaxed">
        Empowering community builders with the world's most versatile Discord orchestration platform.
        </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 text-sm">
        <div className="flex flex-col gap-5">
        <h5 className="text-white font-bold uppercase tracking-widest text-[11px]">Product</h5>
        <a href="#features" className="text-slate-500 hover:text-blue-400 transition-colors">Features</a>
        <a href="#commands" className="text-slate-500 hover:text-blue-400 transition-colors">Commands</a>
        <a href="https://dashboard.pixtoka.xyz" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">Dashboard</a>
        </div>
        <div className="flex flex-col gap-5">
        <h5 className="text-white font-bold uppercase tracking-widest text-[11px]">Resources</h5>
        <a href="https://docs.pixtoka.xyz" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">Documentation</a>
        <a href="https://api.pixtoka.xyz" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">API Reference</a>
        <a href="https://status.pixtoka.xyz" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">Status</a>
        </div>
        <div className="flex flex-col gap-5">
        <h5 className="text-white font-bold uppercase tracking-widest text-[11px]">Company</h5>
        <a href="https://pixtoka.xyz/about" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">About Us</a>
        <a href="https://pixtoka.xyz/privacy" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">Privacy</a>
        <a href="https://pixtoka.xyz/terms" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">Terms</a>
        </div>
        </div>
        </div>
        <div className="mt-20 pt-10 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-600">
        <p>© 2026 Pixtoka by <a href="https://hexoraw.com" target="_blank" rel="noopener noreferrer">Hexoraw</a>. All rights reserved.</p>
        <div className="flex gap-8">
        <p>Built with ❤️ for Discord communities</p>
        </div>
        </div>
        </div>
        </footer>
        </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen font-sans selection:bg-blue-500/30">
        <NavigationWithRouter />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
