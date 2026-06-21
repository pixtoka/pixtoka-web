import React, { useEffect, useRef, useState } from 'react';

const Home: React.FC = () => {
    useEffect(() => {
        document.title = "Pixtoka | The Discord Bot";
    }, []);

    const detailedFeatures = [
        {
            title: "Core Auto-Mod",
            description: "Keep your server safe round-the-clock. Powerful, high-performance filters to prevent spam, bulk-deletes, and unwanted behavior instantly.",
            icon: "🛡️"
        },
        {
            title: "Interactive Polls",
            description: "Engage your community right away with easy-to-use, reaction-based interactive polls designed for instant feedback.",
            icon: "📊"
        },
        {
            title: "Server Utilities",
            description: "Essential commands at your disposal. Check connection latency, view server status, and monitor runtime metrics instantly.",
            icon: "⚙️"
        },
        {
            title: "Leveling & Activity",
            description: "Track member progress dynamically. Check current experience levels and ranking progress as users interact in your channels.",
            icon: "🏆"
        },
        {
            title: "Server Economy",
            description: "Bring life to your chat with a fully functioning currency system. Let users work, save up, and browse the local server shop.",
            icon: "💎"
        },
        {
            title: "Community Fun",
            description: "Lighthearted tools like quick profile avatar lookups and engaging commands to keep your text channels active and entertaining.",
            icon: "🎮"
        }
    ];

    const commands = [
        { name: 'help', desc: 'Display all available commands and bot information.', cat: 'General' },
        { name: 'ban', desc: 'Permanently remove a user from the server.', cat: 'Moderation' },
        { name: 'timeout', desc: 'Mute a user for a specified duration.', cat: 'Moderation' },
        { name: 'clear', desc: 'Bulk delete messages from the current channel.', cat: 'Moderation' },
        { name: 'ping', desc: 'Check connection latency and server status.', cat: 'Utility' },
        { name: 'stats', desc: 'Get detailed statistics about the server.', cat: 'Utility' },
    ];

    const faqs = [
        {
            q: "How do I invite Pixtoka to my server?",
            a: "Simply click the 'Add to Discord' button at the top of this page. Once invited, you can use /help to get started immediately."
        },
        {
            q: "Is Pixtoka free to use?",
            a: "Yes! Pixtoka's core features are completely free. We are planning to introduce a subscription tier in the future with additional customization and features, but the free version will always be fully free for core features."
        },
        {
            q: "Does Pixtoka store user data?",
            a: "We only store necessary data for moderation logging. We never sell user data. All sensitive data is encrypted, and you can request data deletion at any time. Visit this page for more details: https://pixtoka.xyz/delete-my-data"
        },
        {
            q: "Can I customize the bot's prefix?",
            a: "Pixtoka primarily uses Discord's modern Slash Commands (/) for a cleaner experience, but you can configure a custom prefix for legacy text commands through the web dashboard or using the /settings command."
        }
    ];

    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        }, { threshold: 0.1 });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const [activeCategory, setActiveCategory] = useState('All');
    const sectionRef = useRef<HTMLElement>(null);

    const categories = ['All', 'General', 'Moderation', 'Utility'];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        const currentSectionRef = sectionRef.current;
        if (currentSectionRef) observer.observe(currentSectionRef);
        return () => {
            if (currentSectionRef) observer.unobserve(currentSectionRef);
        };
    }, []);

    const filteredCommands = activeCategory === 'All'
        ? commands : commands.filter(c => c.cat === activeCategory);

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen selection:bg-blue-500/30">
            <main>
                {/* Hero Section */}
                <section>
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
                                <a className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30"
                                    href="https://pixtoka.com/invite"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Add to Discord
                                </a>
                                <a className="w-full sm:w-auto px-10 py-5 bg-slate-900/50 backdrop-blur border border-slate-800 hover:bg-slate-800 text-white rounded-2xl font-black text-lg transition-all border-slate-700"
                                    href="https://docs.pixtoka.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read the Documentation
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className=" relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                                Everything you need to run your server.
                            </h3>
                            <p className="max-w-2xl mx-auto text-slate-400 text-lg">
                                Pixtoka delivers rock-solid moderation and essential community tools, built on high-performance architecture for your digital home.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {detailedFeatures.map((feature, idx) => (
                                <div key={idx} className="relative group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br bg-blue-800/20 flex items-center justify-center text-3xl mb-6 shadow-lg shadow-slate-700/10`}>
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
                                    <p className="text-slate-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                    <div className="mt-6 flex items-center text-blue-400 font-semibold text-sm cursor-pointer group-hover:text-blue-300">
                                        Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Commands Section */}
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
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border relative overflow-hidden group/btn ${activeCategory === cat
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

                    <style dangerouslySetInnerHTML={{
                        __html: `
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

                {/* FAQ & Support Section */}
                <section id="support" className="py-10 bg-slate-950 relative overflow-hidden">
                    {/* Decorative background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h3>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                Everything you need to know about setting up and managing Pixtoka in your community.
                            </p>
                        </div>

                        <div className="space-y-6 mb-12">
                            {faqs.map((faq, idx) => {
                                const isOpen = openIndex === idx;
                                return (
                                    <div
                                        key={idx}
                                        className={`group transition-all duration-500 rounded-3xl border ${isOpen
                                                ? 'bg-slate-900/60 border-blue-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]'
                                                : 'bg-slate-900/30 border-slate-800/50 hover:border-slate-700 hover:bg-slate-900/40'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : idx)}
                                            className="w-full px-8 py-7 text-left flex justify-between items-center outline-none"
                                        >
                                            <span className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                                {faq.q}
                                            </span>
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'
                                                }`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </button>

                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="px-8 pb-8 text-slate-400 text-lg leading-relaxed border-t border-slate-800/50 pt-6">
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="relative group overflow-hidden p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 via-blue-900/10 to-slate-900 border border-blue-500/20 text-center shadow-2xl">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                </svg>
                            </div>

                            <h3 className="text-3xl font-black text-white mb-4 relative z-10">Still have questions?</h3>
                            <p className="text-slate-400 text-lg relative z-10 max-w-xl mx-auto">
                                Join our support team via email at <a href="mailto:support@hexoraw.com" className="text-blue-400 hover:underline">support@hexoraw.com</a>. <br />
                                It will be our pleasure to assist you with any issues you may have.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;