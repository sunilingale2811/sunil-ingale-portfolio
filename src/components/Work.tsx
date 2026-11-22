import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { experience } from '../data/profile';
import { fmtDuration, fmtMonth, monthsBetween } from '../lib';

export default function Work() {
  const [open, setOpen] = useState(0);
  return (
    <section id="work" className="space-y-6">
      <SectionTitle kicker="Experience" title="Where I've worked." />
      <div className="tile p-2 sm:p-3">
        {experience.map((r, i) => {
          const isOpen = open === i;
          return (
            <div key={r.company} className={`rounded-[22px] transition-colors ${isOpen ? 'bg-[var(--tile-2)]' : ''}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 rounded-[22px] px-4 py-5 text-left focus-visible:outline focus-visible:outline-2 sm:px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto_auto]"
                style={{ outlineColor: 'var(--blue)' }}
              >
                <span>
                  <span className="block font-display text-[22px] font-bold tracking-tight">{r.company}</span>
                  <span className="block text-[15px] muted md:hidden">{r.title}</span>
                </span>
                <span className="hidden text-[16px] md:block">{r.title}</span>
                <span className="col-start-1 whitespace-nowrap text-[14px] muted md:col-start-auto md:text-right">
                  {fmtMonth(r.start)} – {fmtMonth(r.end)} · {fmtDuration(monthsBetween(r.start, r.end))}
                </span>
                <span className="col-start-2 row-start-1 grid h-9 w-9 place-items-center rounded-full md:col-start-4" style={{ background: 'var(--tile)' }}>
                  <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden />
                </span>
              </button>
              {isOpen && (
                <div className="grid gap-6 px-4 pb-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                  <ul className="space-y-3 text-[16px] leading-relaxed">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-[0.65em] h-1.5 w-1.5 flex-none rounded-full" style={{ background: 'var(--blue)' }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="self-start rounded-[20px] p-5" style={{ background: 'var(--tile)' }}>
                    <div className="eyebrow mb-3">{r.location} · {r.type}</div>
                    <div className="flex flex-wrap gap-2">{r.stack.map((s) => <span key={s} className="pill">{s}</span>)}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function SectionTitle({ kicker, title, aside }: { kicker: string; title: string; aside?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 px-1">
      <div>
        <div className="eyebrow" style={{ color: 'var(--blue)' }}>{kicker}</div>
        <h2 className="h-display mt-1 text-[clamp(34px,4.4vw,52px)]">{title}</h2>
      </div>
      {aside}
    </div>
  );
}
