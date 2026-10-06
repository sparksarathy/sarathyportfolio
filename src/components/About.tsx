import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';

export default function About() {
  const statIcons = [Briefcase, GraduationCap, Sparkles, Award];

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06]">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/[0.03] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold">
              Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Professional Bio */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed font-normal">
              {PERSONAL_INFO.aboutBio}
            </p>
            
            <p className="text-base text-zinc-400 leading-relaxed">
              Based in Tamil Nadu, India, I specialize in architecting modern WordPress solutions
              that bridge high aesthetic fidelity with technical robustness. From customizing themes 
              and crafting bespoke page templates to optimizing speed and mobile interactions, 
              my work emphasizes clean code, structured layouts, and intentional user flows.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 hover:text-indigo-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
              >
                <span>Explore Professional Experience</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-zinc-600">·</span>
              <a
                href="#education"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-400 hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
              >
                <span>Academic Background</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats Cards (Zero-Pill Discipline: Clean architectural cards with unboxed typography) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {PERSONAL_INFO.stats.map((stat, index) => {
              const Icon = statIcons[index % statIcons.length];
              return (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl bg-zinc-900/50 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                    <span className="text-[11px] font-mono text-zinc-300">0{index + 1}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
