import React from 'react';

interface TermsProps {
    onNavigate: (page: string) => void;
}

const Terms: React.FC<TermsProps> = ({ onNavigate }) => {
    return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
            onClick={() => onNavigate('home')}
            className="text-blue-400 hover:text-blue-300 font-medium mb-8 inline-flex items-center gap-2 transition-colors"
            >
            ← Back to Home
            </button>

            <h1 className="text-4xl font-black mb-6 bg-gradient-to-r from-white via-slate-200 to-blue-500 bg-clip-text text-transparent">
            Terms of Service
            </h1>
            <p className="text-slate-400 mb-8">Last updated: June 2026</p>

            <div className="space-y-8 text-slate-300 leading-relaxed">
            {/* Section 1: Acceptance */}
            <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
                <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                By inviting Pixtoka to your Discord server or using its services, you agree to be legally bound by these Terms of Service provided by <strong>Hexoraw Inc.</strong> If you do not agree to these terms, you must immediately remove the bot from your server and cease all use of our services.
                </p>
            </section>

            {/* Section 2: Description of Service */}
            <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
                <h2 className="text-xl font-bold text-white mb-4">2. Description of Service</h2>
                <p>
                Pixtoka is a Discord orchestration platform designed to provide server management, automation, moderation features, and auxiliary utility tools. Hexoraw Inc. grants you a non-exclusive, non-transferable, revocable license to use the service in accordance with these terms.
                </p>
            </section>

            {/* Section 3: Acceptable Use */}
            <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
                <h2 className="text-xl font-bold text-white mb-4">3. Acceptable Use and Restrictions</h2>
                <p className="mb-3">You agree not to exploit or abuse Pixtoka's features. Specifically, you shall not:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400 pl-2">
                <li>Attempt to reverse-engineer, decompile, or bypass any rate-limiting mechanisms of the bot.</li>
                <li>Use the service to spam, harass, or violate the Discord Terms of Service or Community Guidelines.</li>
                <li>Exploit bugs, glitches, or unintended vulnerabilities to disrupt servers or degrade bot performance.</li>
                </ul>
            </section>

            {/* Section 4: Availability and Data */}
            <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
                <h2 className="text-xl font-bold text-white mb-4">4. Service Availability & Data</h2>
                <p>
                While Hexoraw Inc. strives for optimal performance and uptime, Pixtoka is provided on an "as-is" and "as-available" basis. We reserve the right to modify, suspend, or discontinue any feature or service at any time without notice. Any data collected through bot operations is handled strictly under our Privacy Policy.
                </p>
            </section>

            {/* Section 5: Limitation of Liability */}
            <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
                <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                <p>
                In no event shall <strong>Hexoraw Inc.</strong>, its developers, or its affiliates be held liable for any damages, data losses, server disruptions, or unexpected behavioral actions resulting from the installation, use, or inability to use Pixtoka.
                </p>
            </section>

            {/* Section 6: Contact */}
            <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
                <h2 className="text-xl font-bold text-white mb-4">6. Amendments and Contact</h2>
                <p>
                Hexoraw Inc. reserves the right to amend these terms at any time. Continued use of the service after modifications implies full acceptance. For any legal inquiries regarding these terms, please contact us at <a href="mailto:legal@hexoraw.com" className="text-blue-400 hover:underline">legal@hexoraw.com</a>.
                </p>
            </section>
            </div>

        </div>
    </div>
    );
};

export default Terms;