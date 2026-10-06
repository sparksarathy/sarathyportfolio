import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-indigo-500/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold">
              Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Certifications
          </h2>
          <p className="text-base text-zinc-400">
            Professional skill validations in WordPress engineering, Python programming, and search engine optimization.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title + cert.issuer}
              className="rounded-2xl p-6 sm:p-7 bg-zinc-900/50 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Card Top: Icon & Status */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-1.5 group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4 font-mono">
                  {cert.issuer}
                </p>

                {/* Focus / Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {cert.focus}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-300 font-mono">
                <span>Certification</span>
                <span className="text-indigo-400 group-hover:underline">Credentialed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
