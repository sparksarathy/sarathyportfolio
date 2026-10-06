import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { GraduationCap, Award, Briefcase, MapPin, Sparkles, ChevronRight } from 'lucide-react';

interface MilestoneData {
  year: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  active?: boolean;
}

const MILESTONES: MilestoneData[] = [
  {
    year: '2021',
    badge: 'Foundation',
    title: 'B.E. Computer Science & Engineering',
    highlight: 'K. Ramakrishnan College of Technology',
    description:
      'Commenced formal engineering degree, building core disciplines in computing theory, software logic, and web foundations.',
  },
  {
    year: '2025',
    badge: 'Conferred',
    title: 'Graduated',
    highlight: 'CGPA 7.82 / 10',
    description:
      'Completed Bachelor of Engineering with strong academic standing, specializing in modern frontend workflows, Python, and UI/UX.',
  },
  {
    year: '2025 – Present',
    badge: 'Active Role',
    title: 'WordPress Developer',
    highlight: 'Frigate Manufacturing',
    description:
      'Engineering production WordPress platforms, custom theme layouts, and responsive interfaces for enterprise business needs.',
    active: true,
  },
];

export default function CareerJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Scroll tracking for horizontal path drawing
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 50%'],
  });

  const pathLengthProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const verticalHeightProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="career-journey"
      ref={sectionRef}
      className="py-28 relative border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-indigo-600/[0.03] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold font-mono">
              Career Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Interactive Journey Map
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A chronological progression through academic grounding to active industry engineering.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* DESKTOP: HORIZONTAL JOURNEY MAP WITH ANIMATED SVG PATH   */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative pb-8">
          
          {/* Animated Connecting SVG Path */}
          <div className="absolute top-[38px] left-[6%] right-[6%] h-[40px] pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 40"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Static Background Path */}
              <path
                d="M 50,20 L 950,20"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Dynamic Animated Path (Left to Right) */}
              <motion.path
                d="M 50,20 L 950,20"
                stroke="url(#journey-gradient)"
                strokeWidth="2.5"
                style={{ pathLength: pathLengthProgress }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />

              <defs>
                <linearGradient id="journey-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 3 Milestone Columns Along Horizontal Path */}
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {MILESTONES.map((milestone, index) => {
              const isLast = milestone.active;

              return (
                <div key={milestone.year} className="flex flex-col">
                  
                  {/* Milestone Node Pin */}
                  <div className="flex items-center justify-center mb-10">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`relative w-12 h-12 rounded-2xl flex items-center justify-center bg-[#08090d] border-2 shadow-xl transition-all duration-300 ${
                        isLast
                          ? 'border-emerald-400 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)]'
                          : 'border-indigo-400/70 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.25)]'
                      }`}
                    >
                      {isLast ? (
                        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute" />
                      ) : null}
                      <span className="font-mono text-xs font-bold">
                        0{index + 1}
                      </span>
                    </motion.div>
                  </div>

                  {/* Floating Glass Milestone Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.25 + index * 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl p-7 flex-1 flex flex-col justify-between backdrop-blur-md border transition-all duration-300 shadow-2xl ${
                      isLast
                        ? 'bg-zinc-900/80 border-emerald-500/30 hover:border-emerald-400/50 shadow-emerald-950/20'
                        : 'bg-zinc-900/50 border-white/[0.08] hover:border-indigo-500/40 hover:bg-zinc-900/70'
                    }`}
                  >
                    <div>
                      {/* Card Header: Year & Badge */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                        <span className="font-mono text-base font-bold text-white tracking-wider">
                          {milestone.year}
                        </span>
                        <span
                          className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold border ${
                            isLast
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                              : 'bg-zinc-800 text-indigo-300 border-white/10'
                          }`}
                        >
                          {milestone.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white tracking-tight mb-1.5">
                        {milestone.title}
                      </h3>

                      {/* Highlight */}
                      <div className="text-xs font-semibold text-indigo-300 mb-4 font-mono">
                        {milestone.highlight}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-400 font-mono">
                      <span>Phase 0{index + 1}</span>
                      <span className="flex items-center gap-1 text-zinc-300">
                        {isLast ? 'Current Chapter' : 'Completed'}
                        <ChevronRight className="w-3 h-3 text-indigo-400" />
                      </span>
                    </div>

                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET: CLEAN VERTICAL INTERACTIVE TIMELINE     */}
        {/* ======================================================== */}
        <div className="lg:hidden relative pl-8 sm:pl-12">
          
          {/* Vertical Track Line */}
          <div className="absolute left-3.5 sm:left-5 top-4 bottom-4 w-[2px] bg-white/[0.08]" />

          {/* Dynamic Scroll-Drawn Vertical Path */}
          <motion.div
            style={{ height: verticalHeightProgress }}
            className="absolute left-3.5 sm:left-5 top-4 w-[2px] bg-gradient-to-b from-indigo-500 via-blue-500 to-emerald-400 origin-top shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />

          <div className="space-y-8">
            {MILESTONES.map((milestone, index) => {
              const isLast = milestone.active;

              return (
                <div key={milestone.year} className="relative">
                  
                  {/* Vertical Node */}
                  <div className="absolute -left-8 sm:-left-12 top-4 -translate-x-1/2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center bg-[#08090d] border-2 ${
                        isLast
                          ? 'border-emerald-400 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                          : 'border-indigo-400 text-indigo-300'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-current" />
                    </div>
                  </div>

                  {/* Mobile Glass Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`rounded-2xl p-6 backdrop-blur-md border shadow-xl ${
                      isLast
                        ? 'bg-zinc-900/80 border-emerald-500/30'
                        : 'bg-zinc-900/50 border-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/[0.06]">
                      <span className="font-mono text-sm font-bold text-white">
                        {milestone.year}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isLast
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-zinc-800 text-indigo-300'
                        }`}
                      >
                        {milestone.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                      {milestone.title}
                    </h3>
                    <div className="text-xs font-semibold text-indigo-300 mb-3 font-mono">
                      {milestone.highlight}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
