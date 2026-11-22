import { ArrowRight, Briefcase, MapPin, Sparkles } from 'lucide-react';
import { experience, profile, projects, skills } from '../data/profile';
import { fmtDuration, fmtMonth, monthsBetween } from '../lib';

const totalMonths = experience.reduce((s, r) => s + monthsBetween(r.start, r.end), 0);
const techCount = skills.reduce((s, g) => s + g.items.length, 0);
const strip = ['React 19', 'TypeScript', 'Next.js', 'Nx', 'Module Federation', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'Redux Toolkit', 'Zustand', 'Zod', 'React Flow', 'Node.js', 'NestJS', 'ASP.NET Core', 'Azure AKS', 'Azure OpenAI', 'MCP', 'Docker', 'Helm', 'Jest', 'Playwright'];

function Stat({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <div className="tile tile-hover rise flex flex-col justify-between gap-4 p-5 sm:gap-6 sm:p-8" style={{ animationDelay: `${delay}ms` }}>
      <span className="eyebrow">{label}</span>
      <span className="h-display text-[clamp(36px,5vw,56px)]">{value}</span>
    </div>
  );
}

export default function Hero() {
  const current = experience[0];
  return (
    <section id="top" className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {/* headline tile */}
      <div className="tile rise col-span-2 flex flex-col justify-between gap-10 lg:col-span-3 lg:row-span-2 lg:p-12">
        <div>
          <span className="pill gap-2" style={{ color: 'var(--blue)' }}>
            <Sparkles size={14} aria-hidden /> {profile.title}
          </span>
          <h1 className="h-display mt-6 text-[clamp(40px,6.4vw,80px)] [text-wrap:balance]">
            I build <span className="grad-text">enterprise frontends</span> that teams use every day.
          </h1>
          <p className="mt-6 max-w-[60ch] text-[clamp(17px,1.6vw,20px)] leading-relaxed muted">{profile.summary}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn btn-blue">See my work <ArrowRight size={17} /></a>
          <a href="#contact" className="btn btn-soft">Get in touch</a>
        </div>
      </div>

      {/* profile tile */}
      <div className="tile rise col-span-2 flex flex-col items-start gap-5 md:col-span-1" style={{ animationDelay: '80ms' }}>
        <div className="relative">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[#0071e3] via-[#5e5ce6] to-[#bf5af2] font-display text-[26px] font-extrabold text-white">SI</div>
          <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full ring-4 ring-[var(--tile)]" style={{ background: 'var(--green)' }} aria-hidden />
        </div>
        <div>
          <div className="font-display text-[22px] font-bold tracking-tight">{profile.name}</div>
          <div className="mt-2 space-y-1.5 text-[14px] muted">
            <div className="flex items-center gap-2"><Briefcase size={15} aria-hidden /> {current.title}</div>
            <div className="flex items-center gap-2"><MapPin size={15} aria-hidden /> {profile.location}</div>
          </div>
        </div>
      </div>

      {/* current role tile */}
      <a href="#work" className="tile tile-hover rise col-span-2 flex flex-col md:col-span-1 justify-between gap-4" style={{ animationDelay: '140ms' }}>
        <span className="eyebrow">Currently at</span>
        <div>
          <div className="font-display text-[26px] font-bold leading-tight tracking-tight">{current.company}</div>
          <div className="mt-1 text-[14px] muted">Since {fmtMonth(current.start)} · {fmtDuration(monthsBetween(current.start, null))}</div>
        </div>
      </a>

      <Stat value={`${(totalMonths / 12).toFixed(1)}`} label="Years building for the web" delay={200} />
      <Stat value={`${techCount}`} label="Technologies in my stack" delay={240} />
      <Stat value={`${projects.length}`} label="Products shipped" delay={280} />
      <Stat value="10+" label="Micro-frontend modules migrated" delay={320} />

      {/* stack strip */}
      <div className="tile rise overflow-hidden px-0 py-5 sm:px-0 sm:py-6 col-span-2 lg:col-span-4" style={{ animationDelay: '360ms' }}>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee gap-3 pr-3">
            {[...strip, ...strip].map((s, i) => (
              <span key={i} className="pill whitespace-nowrap px-4 py-2 text-[15px]" aria-hidden={i >= strip.length}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
