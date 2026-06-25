import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    useEffect(() => {
        document.title = "Not Found | Pixtoka";
    }, []);

    return (
        <div className="bg-slate-950 text-white min-h-[70vh] flex items-center justify-center selection:bg-blue-500/30 px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-2xl w-full flex flex-col justify-center">
                <Link to="/" className="text-blue-400 hover:text-blue-300 font-medium mb-6 inline-flex items-center gap-2 transition-colors w-fit self-center md:self-start">
                    ← Back to Home
                </Link>

                <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-2xl relative overflow-hidden group backdrop-blur-sm transition-all duration-300 hover:border-slate-700/50">
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/15 transition-colors" />
                    <div className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                        <div className="flex-1 text-center space-y-1">
                            <h2 className="text-7xl sm:text-8xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                                404
                            </h2>
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-tight">
                                Page Not Found
                            </h3>
                            <p className="text-sm text-slate-400 pt-1">
                                Seems this page doesn't exist or has been moved.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;