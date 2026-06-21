import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                    <div className="max-w-sm">
                        <a href="/" className="flex items-center gap-3 mb-6 group cursor-pointer inline-flex">
                            <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center overflow-hidden border border-white/5 shadow-lg shadow-blue-600/10 group-hover:scale-110 transition-transform">
                                <img src="/Pixtoka_Logo_Cropped_SkyBlue.svg" alt="Logo" className="w-7 h-7 object-contain" />
                            </div>
                            <span className="text-xl font-black tracking-tight text-white">Pixtoka</span>
                        </a>
                        <p className="text-slate-500 text-base leading-relaxed">
                        Next-generation moderation made simple. Fast, reliable, and built to handle the essentials your Discord community needs.
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
                            <a href="https://pixtoka.xyz/about" className="text-slate-500 hover:text-blue-400 transition-colors">About Us</a>
                            <a href="https://pixtoka.xyz/privacy" className="text-slate-500 hover:text-blue-400 transition-colors">Privacy</a>
                            <a href="https://pixtoka.xyz/terms" className="text-slate-500 hover:text-blue-400 transition-colors">Terms</a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-600">
                    <p>© 2026 Pixtoka by <a href="https://hexoraw.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Hexoraw</a>. All rights reserved.</p>
                    <div className="flex gap-8">
                        <p>Built with ❤️ for Discord communities</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;