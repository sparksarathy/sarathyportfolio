import { STRENGTHS } from '../data/portfolioData';
import { Layout, Smartphone, Wrench, Lightbulb, Compass, ArrowUpRight } from 'lucide-react';

export default function Strengths() {
  const icons = [Layout, Smartphone, Wrench, Lightbulb];

  return (
    <section id="strengths" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold">
              Value Proposition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Why Work With Me
          </h2>
          <p className="text-base text-zinc-400">
            Professional principles and work standards applied to every digital project.
          </p>
        </div>

        {/* Strengths Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRENGTHS.map((strength, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={strength.title}
                className="rounded-2xl p-6 sm:p-7 bg-zinc-900/50 border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600/10 transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-indigo-300 transition-colors">
                    {strength.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {strength.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-300">
                  <span>Standard 0{index + 1}</span>
                  <span className="text-zinc-300 group-hover:text-indigo-400 transition-colors">
                    {strength.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
