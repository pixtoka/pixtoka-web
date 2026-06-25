import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    useEffect(() => {
        document.title = "About | Pixtoka";
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20 selection:bg-blue-500/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="text-blue-400 hover:text-blue-300 font-medium mb-8 inline-flex items-center gap-2 transition-colors">
                    ← Back to Home
                </Link>

                <div className="relative rounded-3xl overflow-hidden bg-slate-900/20 backdrop-blur-sm mb-12 shadow-2xl shadow-black/40">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-900/50 to-slate-950/50">
                        <img src="/Pixtoka_Banner.png" alt="Pixtoka Banner" className="w-full h-full object-contain"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed text-lg">
                        <h1 className="text-4xl font-black bg-gradient-to-r from-white via-slate-200 to-blue-500 bg-clip-text text-transparent tracking-tight">About Pixtoka</h1>
                        <p>Pixtoka is the ultimate Discord orchestration platform designed to empower community managers, developers, and creators. We build robust tools that eliminate technical friction, allowing you to focus completely on cultivating vibrant, safe, and automated digital spaces.</p>
                        <p>From complex automation workflows to advanced modular components, Pixtoka brings server management tools together under one cohesive, high-performance ecosystem.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 flex flex-col justify-center gap-6">
                        <div>
                            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Platform</div>
                            <div className="text-lg font-bold text-white flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 127.14 96.36" fill="currentColor">
                                    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.71-11,68.6,68.6,0,0,1-10.64-5.12c.91-.66,1.8-1.34,2.65-2a75.58,75.58,0,0,0,92.63,0c.85.69,1.74,1.37,2.65,2a68.44,68.44,0,0,1-10.64,5.12,74.74,74.74,0,0,0,6.71,11,105.73,105.73,0,0,0,31-18.83C129,50.7,122.64,27.78,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
                                </svg>
                                Discord
                            </div>
                        </div>

                        <div>
                            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Since</div>
                            <div className="text-lg font-bold text-white">Jan 2026</div>
                        </div>

                        <div>
                            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Status</div>
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 shadow-lg shadow-orange-500/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                <span className="text-xs font-bold tracking-wide text-white">Under development</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-16" />

                <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/30 backdrop-blur-sm border border-slate-900 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/15 transition-colors duration-500" />
                    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/5 shadow-2xl flex-shrink-0 bg-[#141414]">
                            <img src="/HexoNerfa_Blue.jpg" alt="Hexoraw Logo" className="w-full h-full object-cover"/>
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-4">
                            <div className="space-y-1">
                                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Parent Company</div>
                                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Hexoraw Inc.</h2>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-base max-w-2xl">
                                Pixtoka is engineered and maintained by Hexoraw, a specialized tech syndicate building high-performance software systems, advanced web interfaces, and automated cloud infrastructures for digital platforms.
                            </p>
                            <div className="pt-2">
                                <a href="https://hexoraw.com" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 group">
                                    Visit hexoraw.com
                                    <span className="text-slate-500 group-hover:text-blue-400 transition-colors">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;