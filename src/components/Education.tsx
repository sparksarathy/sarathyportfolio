import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const college = EDUCATION[0];
  const hsc = EDUCATION[1];
  const sslc = EDUCATION[2];

  return (
    <section id="education" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold">
              Academics
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Education
          </h2>
          <p className="text-base text-zinc-400">
            Academic qualifications and foundational engineering degree.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Degree Card (B.E. CSE) */}
          <div className="lg:col-span-7 rounded-2xl p-7 sm:p-8 bg-zinc-900/60 border border-white/[0.09] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-indigo-400">
                    Bachelor of Engineering
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{college.duration}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                {college.degree}
              </h3>

              <div className="flex items-center gap-2 text-sm text-zinc-300 mb-5 font-medium">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>{college.institution}</span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {college.details}
              </p>
            </div>

            {/* Score Highlight */}
            <div className="pt-6 border-t border-white/[0.07] flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold">
                Cumulative Grade Point Average
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold font-mono text-white group-hover:text-indigo-400 transition-colors">
                  {college.scoreValue}
                </span>
                <span className="text-xs text-zinc-300 font-mono">/ 10</span>
              </div>
            </div>
          </div>

          {/* Schooling Cards (HSC & SSLC) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* HSC Card */}
            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                    Higher Secondary (12th)
                  </span>
                  <div className="flex items-baseline gap-1 font-mono text-sm font-bold text-emerald-400">
                    <span>{hsc.scoreValue}</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-white tracking-tight mb-1">
                  {hsc.degree}
                </h4>
                <p className="text-xs text-zinc-400 mb-2">
                  {hsc.institution}
                </p>
              </div>
              <div className="text-[11px] text-zinc-300 font-mono pt-3 border-t border-white/[0.04]">
                Focus: Mathematics, Science &amp; Computer Applications
              </div>
            </div>

            {/* SSLC Card */}
            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                    Secondary School (10th)
                  </span>
                  <div className="flex items-baseline gap-1 font-mono text-sm font-bold text-indigo-400">
                    <span>{sslc.scoreValue}</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-white tracking-tight mb-1">
                  {sslc.degree}
                </h4>
                <p className="text-xs text-zinc-400 mb-2">
                  {sslc.institution}
                </p>
              </div>
              <div className="text-[11px] text-zinc-300 font-mono pt-3 border-t border-white/[0.04]">
                Core Academic Foundations &amp; Science Curriculum
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
