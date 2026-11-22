import { useState } from 'react';
import { ArrowUpRight, Award, Check, Copy, GraduationCap, Languages, Mail } from 'lucide-react';
import { achievements, education, languages, profile } from '../data/profile';
import { SectionTitle } from './Work';

export function About() {
  return (
    <section id="about" className="space-y-6">
      <SectionTitle kicker="About" title="A bit more about me." />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="tile tile-hover">
          <Icon><GraduationCap size={22} /></Icon>
          <div className="eyebrow mt-5">Education</div>
          <div className="mt-1 font-display text-[20px] font-bold leading-snug tracking-tight">{education.degree}</div>
          <p className="mt-1 text-[15px] muted">{education.school}</p>
          <p className="mt-3 text-[14px] muted">{education.period}</p>
        </div>
        <div className="tile tile-hover">
          <Icon><Award size={22} /></Icon>
          <div className="eyebrow mt-5">Recognition</div>
          <ul className="mt-2 space-y-3 text-[16px]">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
        </div>
        <div className="tile tile-hover">
          <Icon><Languages size={22} /></Icon>
          <div className="eyebrow mt-5">Languages</div>
          <ul className="mt-2 divide-y" style={{ borderColor: 'var(--line)' }}>
            {languages.map((l) => (
              <li key={l.name} className="flex justify-between py-2.5 text-[16px]" style={{ borderColor: 'var(--line)' }}>
                <span className="font-medium">{l.name}</span><span className="muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: 'var(--blue-soft)', color: 'var(--blue)' }}>{children}</span>;
}

export function Contact() {
  const [state, setState] = useState<'idle' | 'ok' | 'fail'>('idle');
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setState('ok'); } catch { setState('fail'); }
    setTimeout(() => setState('idle'), 2200);
  };
  return (
    <section id="contact" className="relative overflow-hidden rounded-[32px] px-6 py-14 text-center text-white sm:px-10 sm:py-20" style={{ background: 'linear-gradient(135deg,#0071e3 0%,#5e5ce6 55%,#bf5af2 100%)' }}>
      <h2 className="h-display mx-auto max-w-[16ch] text-[clamp(38px,5.6vw,68px)] [text-wrap:balance]">Let's build something great.</h2>
      <p className="mx-auto mt-5 max-w-[52ch] text-[clamp(17px,1.6vw,19px)] text-white/85">
        Open to conversations about frontend, micro-frontend and AI-tooling work. Email is the fastest way to reach me.
      </p>
      <p className="mt-6 break-all font-display text-[clamp(18px,2vw,22px)] font-semibold">{profile.email}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={copy} className="btn bg-white text-[#1d1d1f] hover:bg-white/90">
          {state === 'ok' ? <Check size={17} /> : <Copy size={17} />}
          {state === 'ok' ? 'Copied' : state === 'fail' ? 'Select the address above' : 'Copy email'}
        </button>
        <a href={`mailto:${profile.email}`} className="btn bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25"><Mail size={17} /> Send email</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25">LinkedIn <ArrowUpRight size={17} /></a>
      </div>
    </section>
  );
}
