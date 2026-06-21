
import React, { useState } from 'react';

const Support: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  return (
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
                className={`group transition-all duration-500 rounded-3xl border ${
                  isOpen
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
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'
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
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
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
  );
};

export default Support;
