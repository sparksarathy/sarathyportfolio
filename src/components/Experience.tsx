import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const isNodeInView = useInView(nodeRef, { once: false, margin: '-80px' });
  const [showAllDetails, setShowAllDetails] = useState(false);

  // Scroll progress for vertical timeline line drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 55%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const compactHighlights = [
    'Responsive WordPress Development',
    'UI/UX & Layout Design',
    'Theme & Plugin Customization',
  ];

  const techTags = [
    'WordPress',
    'Theme Customization',
    'Plugin Engineering',
    'UI/UX Layouts',
    'Responsive Design',
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-28 relative border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-indigo-600/[0.04] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold font-mono">
              Professional Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Experience Timeline
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Professional track record delivering enterprise WordPress solutions and interface design.
          </p>
        </motion.div>

        {/* Central Vertical Timeline */}
        <div className="relative">
          
          {/* Static Track Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/[0.07]" />

          {/* Dynamic Scroll-Drawn Timeline Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-indigo-400 to-emerald-400 origin-top shadow-[0_0_12px_rgba(99,102,241,0.5)] z-0"
          />

          {/* Timeline Node & Card Container */}
          <div className="relative z-10 pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-start">
            
            {/* Left Column (Desktop Date Label / Anchor) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:flex flex-col items-end pr-8 pt-6 text-right"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900/90 border border-white/10 font-mono text-xs font-semibold text-indigo-300 mb-2">
                <span>OCT 2025 — PRESENT</span>
              </div>
              <span className="text-xs text-zinc-400 font-mono">Tamil Nadu, India</span>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Role</span>
              </div>
            </motion.div>

            {/* Central Timeline Node */}
            <div
              ref={nodeRef}
              className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-20"
            >
              <motion.div
                animate={{
                  scale: isNodeInView ? 1.15 : 1,
                  boxShadow: isNodeInView
                    ? '0 0 24px rgba(99,102,241,0.5), 0 0 6px rgba(16,185,129,0.5)'
                    : '0 0 0px rgba(0,0,0,0)',
                }}
                transition={{ duration: 0.4 }}
                className={`w-9 h-9 rounded-full bg-[#08090d] border-2 flex items-center justify-center transition-colors duration-300 ${
                  isNodeInView ? 'border-indigo-400 text-indigo-300' : 'border-white/20 text-zinc-300'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
              </motion.div>
            </div>

            {/* Right Column: Premium Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="rounded-2xl p-7 sm:p-9 bg-zinc-900/70 backdrop-blur-md border border-white/[0.09] hover:border-indigo-500/40 transition-all duration-300 shadow-2xl group">
                
                {/* Mobile Date Header */}
                <div className="flex md:hidden items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-xs font-semibold text-indigo-300 bg-zinc-950 px-2.5 py-1 rounded border border-white/10">
                    OCT 2025 — PRESENT
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Currently Working
                  </span>
                </div>

                {/* Card Header: Role & Company */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1.5 group-hover:text-indigo-200 transition-colors">
                      {EXPERIENCE.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-indigo-400" />
                      <span className="text-base font-semibold text-zinc-200">
                        {EXPERIENCE.company}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Currently Working Badge */}
                  <div className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Currently Working
                  </div>
                </div>

                {/* Short Executive Description */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-6 italic border-l-2 border-indigo-500/50 pl-3.5 py-0.5">
                  &ldquo;Building responsive WordPress experiences with a strong focus on UI/UX, performance and business requirements.&rdquo;
                </p>

                {/* 3 Compact Highlights */}
                <div className="mb-7">
                  <div className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-3 font-mono">
                    Core Highlights
                  </div>
                  <ul className="space-y-2.5">
                    {compactHighlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-3 text-sm text-zinc-200 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Tags */}
                <div className="mb-6 pt-5 border-t border-white/[0.06]">
                  <div className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2.5 font-mono">
                    Technologies &amp; Scope
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {techTags.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-zinc-950/80 text-zinc-300 border border-white/[0.06] hover:border-indigo-500/30 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Full Responsibilities (Optional Drawer) */}
                {showAllDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 pt-4 border-t border-white/[0.06] space-y-2"
                  >
                    <div className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2 font-mono">
                      All Daily Responsibilities:
                    </div>
                    {EXPERIENCE.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                        <span className="text-indigo-400 mt-0.5">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Card Footer: Action Links */}
                <div className="pt-5 border-t border-white/[0.07] flex items-center justify-between gap-4">
                  <a
                    href="https://frigate.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-indigo-300 transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
                  >
                    <span>Visit Frigate Manufacturing</span>
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-400 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>

                  <button
                    onClick={() => setShowAllDetails(!showAllDetails)}
                    className="inline-flex items-center gap-1 text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{showAllDetails ? 'Less Details' : 'Full Scope'}</span>
                    {showAllDetails ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
