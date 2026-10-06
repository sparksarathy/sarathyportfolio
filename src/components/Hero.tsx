import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Camera, RefreshCw, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Default professional portrait of Sarathy P. (Media (1).jpg)
const DEFAULT_PORTRAIT_URL = '/images/media-1.jpg';

export default function Hero() {
  const [profileImage, setProfileImage] = useState<string>(DEFAULT_PORTRAIT_URL);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if custom portrait was saved in localStorage
    const saved = localStorage.getItem('sarathy_profile_photo');
    // If the saved image was an old external placeholder, update to Sarathy's real photo
    if (saved && !saved.includes('unsplash.com')) {
      setProfileImage(saved);
    } else {
      setProfileImage(DEFAULT_PORTRAIT_URL);
      localStorage.setItem('sarathy_profile_photo', DEFAULT_PORTRAIT_URL);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setProfileImage(result);
          localStorage.setItem('sarathy_profile_photo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setProfileImage(DEFAULT_PORTRAIT_URL);
    localStorage.removeItem('sarathy_profile_photo');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Soft ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/[0.07] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/[0.04] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Label Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-zinc-300 bg-zinc-900/90 border border-white/10 font-mono shadow-sm">
                ASSOCIATE WORDPRESS DEVELOPER
              </span>
            </div>

            {/* Main Headline */}
            <div className="mb-6">
              <span className="text-lg sm:text-xl font-medium text-indigo-400 block mb-2">
                Hello, I&apos;m
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                Sarathy P.
              </h1>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-200 block mt-1">
                I build digital experiences.
              </span>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-9 font-normal">
              WordPress Developer focused on building responsive websites, clean interfaces and user-friendly digital experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-9">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 opacity-80" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-white/10 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            </div>

            {/* Sub-footer Role and Location Meta (from Screenshot 2) */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.08] mb-6">
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">Based in</span>
                <span className="text-sm font-semibold text-white">Tamil Nadu, India</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">Current Role</span>
                <span className="text-sm font-semibold text-indigo-300">Associate WordPress Developer</span>
              </div>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-5 pt-3">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">Connect:</span>
              
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
                aria-label="Copy Email Address"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Email'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Premium Portrait Composition with Floating Badges (matching Screenshot 2) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[380px] my-6">
              
              {/* Soft blue/violet ambient glow behind portrait */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-blue-500/15 to-violet-600/20 rounded-3xl blur-3xl opacity-70 pointer-events-none" />

              {/* Central Portrait Card */}
              <div className="relative rounded-3xl bg-zinc-900/70 p-2 sm:p-2.5 backdrop-blur-md border border-white/10 shadow-2xl overflow-visible group">
                
                {/* Rounded rectangular portrait image */}
                <div className="relative aspect-[3.7/4.8] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/5">
                  <img
                    src={profileImage}
                    alt="Sarathy P. – Associate WordPress Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Subtle vignette gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/95 via-[#08090d]/30 to-transparent pointer-events-none" />
                  
                  {/* Top "Developer Profile" pill & Online Dot */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[11px] font-medium text-zinc-300">
                      Developer Profile
                    </span>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-zinc-950" />
                    </span>
                  </div>

                  {/* Photo Customizer button (hidden by default, shows on hover) */}
                  <div className="absolute top-12 right-3.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 backdrop-blur-md p-1 rounded-lg border border-white/10 z-20">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="p-1.5 text-zinc-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                      title="Upload custom portrait photo"
                      aria-label="Upload custom portrait photo"
                    >
                      <Camera className="w-3.5 h-3.5" />
                    </button>
                    {profileImage !== DEFAULT_PORTRAIT_URL && (
                      <button
                        onClick={handleResetImage}
                        className="p-1.5 text-zinc-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                        title="Reset to default portrait"
                        aria-label="Reset to default portrait"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  {/* Card Bottom: "CURRENT ROLE: Associate WordPress Developer" Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-white/10 shadow-lg">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-0.5">
                      CURRENT ROLE
                    </span>
                    <div className="text-sm font-bold text-white tracking-tight">
                      Associate WordPress Developer
                    </div>
                    <div className="text-[11px] text-zinc-400 font-medium">
                      Frontend • WordPress
                    </div>
                  </div>
                </div>

              </div>

              {/* ======================================================== */}
              {/* FLOATING BADGES (MATCHING SCREENSHOT 2)                  */}
              {/* ======================================================== */}

              {/* 1. Top-Left Badge: CMS WordPress */}
              <div className="absolute -top-3 -left-4 sm:-left-8 px-4 py-2.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">CMS</span>
                <span className="text-xs sm:text-sm font-bold text-white">WordPress</span>
              </div>

              {/* 2. Top-Right Badge: Frontend HTML + CSS */}
              <div className="absolute top-16 -right-4 sm:-right-8 px-4 py-2.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Frontend</span>
                <span className="text-xs sm:text-sm font-bold text-white">HTML + CSS</span>
              </div>

              {/* 3. Bottom-Left Badge: Interaction JavaScript */}
              <div className="absolute bottom-16 -left-4 sm:-left-8 px-4 py-2.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Interaction</span>
                <span className="text-xs sm:text-sm font-bold text-white">JavaScript</span>
              </div>

              {/* 4. Bottom-Right Badge: Design UI / UX */}
              <div className="absolute -bottom-3 -right-3 sm:-right-6 px-4 py-2.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Design</span>
                <span className="text-xs sm:text-sm font-bold text-white">UI / UX</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
