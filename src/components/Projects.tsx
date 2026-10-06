import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Globe, PlusCircle, Check, Terminal, ExternalLink } from 'lucide-react';

interface ProjectData {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  projectUrl: string;
  image: string;
  type: 'frigate' | 'wordpress-portfolio';
}

const REDESIGNED_PROJECTS: ProjectData[] = [
  {
    number: '01',
    title: 'Frigate Manufacturing',
    category: 'WordPress / UI/UX / Frontend',
    description:
      'Responsive WordPress development and UX-focused digital experiences for a manufacturing brand.',
    tags: ['WordPress', 'UI/UX', 'Responsive Design'],
    projectUrl: 'https://frigate.ai',
    image: '/images/frigate-manufacturing.svg',
    type: 'frigate',
  },
  {
    number: '02',
    title: 'Personal Portfolio in WordPress',
    category: 'WordPress / Elementor / Responsive Design',
    description:
      'Fully responsive personal portfolio website built on WordPress using Elementor, featuring clean UI/UX design, custom layouts and interactive showcases.',
    tags: ['WordPress', 'Elementor', 'Responsive Design', 'Custom CSS'],
    projectUrl: 'https://sarathy.hstn.me/',
    image: '/images/sarathy-portfolio.svg',
    type: 'wordpress-portfolio',
  },
];

function ProjectRow({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for isolated parallax and scale
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  const isEven = index % 2 === 1;

  return (
    <div
      ref={rowRef}
      className="min-h-[80vh] flex items-center py-16 sm:py-24 border-b border-white/[0.05] last:border-b-0"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT / DETAILS COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`lg:col-span-5 flex flex-col justify-center ${
            isEven ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'
          }`}
        >
          {/* Project Number (Large Editorial) */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-indigo-400/80">
              {project.number}
            </span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {project.title}
          </h3>

          {/* Concise Description */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal mb-8 max-w-lg">
            {project.description}
          </p>

          {/* Staggered Technology Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-9">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + tagIndex * 0.08,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -2 }}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-900/90 text-zinc-200 border border-white/10 hover:border-indigo-400/40 hover:text-white transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action CTA Button */}
          <div>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span>View Live Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-white" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT / VISUAL MOCKUP COLUMN */}
        <div
          className={`lg:col-span-7 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <motion.div
            style={{ y: imageParallax, scale: imageScale }}
            className="relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 via-blue-500/10 to-violet-600/10 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            {/* Premium Browser-Window Mockup */}
            <div className="relative rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 hover:border-indigo-500/30">
              
              {/* Browser Window Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f17] border-b border-white/[0.08]">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
                </div>

                {/* Domain bar */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#07080d] border border-white/[0.06] text-xs font-mono text-zinc-300 max-w-[280px] w-full truncate">
                  <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">{project.projectUrl.replace('https://', '')}</span>
                </div>

                {/* Window indicator */}
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors p-1"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Window Canvas Presentation */}
              <div className="relative bg-[#07080e] overflow-hidden group/canvas">
                
                {/* Real Project Screenshot with Hover Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={`${project.title} live interface preview`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/canvas:scale-105"
                  />

                  {/* Subtle gradient vignette at bottom to blend with border */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/90 via-[#08090d]/20 to-transparent pointer-events-none" />

                  {/* Floating Live Badge inside mockup */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-white/10 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-zinc-200 font-semibold">
                      {project.type === 'frigate' ? 'Enterprise WordPress' : 'WordPress · Elementor'}
                    </span>
                  </div>

                  {/* Live URL Pill bottom left */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between p-2.5 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-white/10 shadow-lg">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 truncate">
                      <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="truncate">{project.projectUrl.replace('https://', '')}</span>
                    </div>

                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 font-mono shrink-0 pl-2"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/[0.04] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold font-mono">
              Selected Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Editorial Projects Showcase
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A curated presentation of enterprise WordPress deployments and live web platforms.
          </p>
        </motion.div>

        {/* Project Viewport Rows */}
        <div className="space-y-4">
          {REDESIGNED_PROJECTS.map((project, index) => (
            <ProjectRow key={project.number} project={project} index={index} />
          ))}
        </div>

        {/* Future Projects Placeholder Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl border border-dashed border-white/15 p-8 text-center bg-zinc-900/20 backdrop-blur-sm"
        >
          <div className="max-w-md mx-auto space-y-2">
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-indigo-400">
              <PlusCircle className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-zinc-200">
              Upcoming Case Studies &amp; Client Projects
            </h4>
            <p className="text-xs text-zinc-400">
              Actively engineering new WordPress interfaces. Live deployments will be showcased here upon public release.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
