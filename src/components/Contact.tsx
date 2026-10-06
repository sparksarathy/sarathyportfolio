import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  MessageSquare,
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form states
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [messageSubject, setMessageSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client with pre-filled content
    const subject = encodeURIComponent(messageSubject || `Inquiry from ${senderName || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${messageBody}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-indigo-600/[0.05] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Have a project, opportunity, or idea in mind? Let&apos;s connect and create a better digital experience.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-zinc-300 font-mono font-medium">Email Address</span>
                    <h3 className="text-base font-bold text-white break-all">{PERSONAL_INFO.email}</h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-white/[0.05]">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 text-center py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  Email Me
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-white/10 flex items-center gap-1.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-zinc-300 font-mono font-medium">Direct Phone</span>
                    <h3 className="text-base font-bold text-white">{PERSONAL_INFO.formattedPhone}</h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-white/[0.05]">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex-1 text-center py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  Call Now
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-white/10 flex items-center gap-1.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-300 font-mono font-medium">Location</span>
                  <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
                  <div className="text-xs text-zinc-400">Available for remote &amp; on-site opportunities</div>
                </div>
              </div>
            </div>

            {/* Social Buttons: LinkedIn & GitHub */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-200 hover:text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-200 hover:text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct In-Browser Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-9 rounded-2xl bg-zinc-900/50 border border-white/[0.09] shadow-2xl">
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-zinc-300 font-mono mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-zinc-300 font-mono mb-2 font-medium">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-zinc-300 font-mono mb-2 font-medium">
                    Subject / Project Scope
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={messageSubject}
                    onChange={(e) => setMessageSubject(e.target.value)}
                    placeholder="WordPress Development / Frontend Role Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-zinc-300 font-mono mb-2 font-medium">
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    placeholder="Hello Sarathy, I'd like to discuss an opportunity or project requirement..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>

                {formSubmitted && (
                  <p className="text-xs text-emerald-400 text-center font-medium mt-2">
                    Thank you! Your default mail client has opened. If it didn&apos;t open, email directly at {PERSONAL_INFO.email}.
                  </p>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
