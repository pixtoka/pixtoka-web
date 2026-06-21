
import React from 'react';

const Features: React.FC = () => {
  const detailedFeatures = [
{
      title: "Core Auto-Mod",
      description: "Keep your server safe round-the-clock. Powerful, high-performance filters to prevent spam, bulk-deletes, and unwanted behavior instantly.",
      icon: "🛡️",
      accent: "from-blue-500 to-indigo-600"
    },
    {
      title: "Interactive Polls",
      description: "Engage your community right away with easy-to-use, reaction-based interactive polls designed for instant feedback.",
      icon: "📊",
      accent: "from-indigo-500 to-purple-600"
    },
    {
      title: "Server Utilities",
      description: "Essential commands at your disposal. Check connection latency, view server status, and monitor runtime metrics instantly.",
      icon: "⚙️",
      accent: "from-blue-500 to-indigo-400"
    },
    {
      title: "Leveling & Activity",
      description: "Track member progress dynamically. Check current experience levels and ranking progress as users interact in your channels.",
      icon: "🏆",
      accent: "from-blue-400 to-cyan-500"
    },
    {
      title: "Server Economy",
      description: "Bring life to your chat with a fully functioning currency system. Let users work, save up, and browse the local server shop.",
      icon: "💎",
      accent: "from-cyan-600 to-blue-500"
    },
    {
      title: "Community Fun",
      description: "Lighthearted tools like quick profile avatar lookups and engaging commands to keep your text channels active and entertaining.",
      icon: "🎮",
      accent: "from-blue-600 to-blue-400"
    }
  ];

  return (
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
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.accent} flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-500/10`}>
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
  );
};

export default Features;
