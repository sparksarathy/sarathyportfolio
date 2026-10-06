import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code2,
  Globe2,
  Palette,
  Terminal,
  UploadCloud,
  Search,
  Sparkles,
  Layers,
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Category Icon Mapper
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'WordPress':
        return Globe2;
      case 'Programming':
        return Terminal;
      case 'Frontend':
        return Code2;
      case 'Design':
        return Palette;
      case 'Deployment':
        return UploadCloud;
      case 'Additional':
        return Search;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-indigo-500/[0.03] blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold">
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Tools &amp; Technologies
          </h2>
          <p className="text-base text-zinc-400">
            A focused technical toolkit grounded in web development, interface design, and deployment workflows.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((categoryGroup) => {
            const Icon = getCategoryIcon(categoryGroup.category);
            const isHovered = activeCategory === categoryGroup.category;

            return (
              <div
                key={categoryGroup.category}
                onMouseEnter={() => setActiveCategory(categoryGroup.category)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`relative rounded-2xl p-6 sm:p-7 bg-zinc-900/50 border transition-all duration-300 group ${
                  isHovered
                    ? 'border-indigo-500/40 bg-zinc-900/80 -translate-y-1 shadow-xl shadow-indigo-950/30'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Subtle ambient light on hover */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600/10 transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {categoryGroup.category}
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        {categoryGroup.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills inside Category */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-3">
                  {categoryGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950/40 hover:bg-zinc-800/40 border border-white/[0.03] hover:border-white/[0.08] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80" />
                        <span className="text-sm font-medium text-zinc-200">
                          {skill.name}
                        </span>
                      </div>
                      {skill.level && (
                        <span className="text-[11px] font-mono text-zinc-300">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Technology Philosophy note */}
        <div className="mt-12 p-6 rounded-xl bg-zinc-900/30 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-zinc-300">
            <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>
              Engineered with clean standards, semantic HTML5, modern CSS layouts, and performance optimization for WordPress and web platforms.
            </span>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
          >
            See in Action &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
