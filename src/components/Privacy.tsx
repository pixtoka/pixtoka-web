import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-blue-400 hover:text-blue-300 font-medium mb-8 inline-flex items-center gap-2 transition-colors">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-black mb-6 bg-gradient-to-r from-white via-slate-200 to-blue-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-slate-400 mb-8">Last updated: June 2026</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          {/* Section 1: Data Collection */}
          <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4">1. Data We Collect</h2>
            <p className="mb-3">
              To operate efficiently and provide moderation, metrics, and automation features, Pixtoka collects minimal and specific data provided by the Discord API:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 pl-2">
              <li><strong>Server Identifiers:</strong> Server IDs, channel IDs, and role IDs to execute configurations correctly.</li>
              <li><strong>User Identification:</strong> Discord User IDs and usernames strictly for moderation logging and permission verification.</li>
              <li><strong>System Logs:</strong> Automated command usage logs and interaction metrics to improve performance and troubleshoot issues.</li>
            </ul>
          </section>

          {/* Section 2: How We Use Data */}
          <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">
              The data collected by <strong>Hexoraw Inc.</strong> through Pixtoka is exclusively used to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 pl-2">
              <li>Maintain, secure, and update the functionalities of the bot.</li>
              <li>Provide analytical metrics and structural reports inside your server dashboards.</li>
              <li>Enforce server-specific moderation actions requested by authorized administrators.</li>
            </ul>
            <p className="mt-3">We do not sell, trade, or rent any user or server data to third parties.</p>
          </section>

          {/* Section 3: Data Retention */}
          <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4">3. Data Retention and Deletion</h2>
            <p>
              We only retain data for as long as necessary to provide active orchestration services. Automated moderation logs and performance metrics are subject to periodic clearance. If you remove (kick/ban) Pixtoka from your server, your stored configuration data is automatically scheduled for complete deletion from our databases.
            </p>
          </section>

          {/* Section 4: Security */}
          <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4">4. Security of Data</h2>
            <p>
              Hexoraw Inc. implements industry-standard technical measures to safeguard your configurations and identifiers against unauthorized access, loss, or alteration. However, please remember that no transmission over the internet or cloud storage infrastructure is completely secure.
            </p>
          </section>

          {/* Section 5: Third-Party Services */}
          <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4">5. Third-Party Services</h2>
            <p>
              Pixtoka operates on top of the Discord ecosystem. By using this service, you also acknowledge adherence to the <strong>Discord Terms of Service</strong> and <strong>Discord Privacy Policy</strong>.
            </p>
          </section>

          {/* Section 6: Contact */}
          <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4">6. Policy Updates & Contact</h2>
            <p>
              We reserve the right to update this Privacy Policy to reflect technical or legal changes. Server owners will be notified of major updates. For any data removal requests or privacy-related questions, please reach out to us at <a href="mailto:privacy@hexoraw.com" className="text-blue-400 hover:underline">privacy@hexoraw.com</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Privacy;