import { useState } from 'react';
import { Search } from 'lucide-react';
import { skills } from '../data/profile';
import { SectionTitle } from './Work';

// Bento sizing: bigger groups get wider tiles.
const span = (n: number) => (n >= 9 ? 'lg:col-span-2' : '');

export default function Skills() {
  const [q, setQ] = useState('');
  const query = q.trim().toLowerCase();
  const groups = skills
    .map((g) => ({ ...g, shown: query ? g.items.filter((i) => i.toLowerCase().includes(query)) : g.items }))
    .filter((g) => g.shown.length || g.group.toLowerCase().includes(query));
  const total = skills.reduce((s, g) => s + g.items.length, 0);

  return (
    <section id="skills" className="space-y-6">
      <SectionTitle
        kicker="Skills"
        title="My toolkit."
        aside={
          <label className="relative flex w-full items-center sm:w-[300px]">
            <span className="sr-only">Search skills</span>
            <Search size={17} className="pointer-events-none absolute left-4 muted" aria-hidden />
            <input
              id="skill-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={`Search ${total} skills`}
              className="h-12 w-full rounded-full pl-11 pr-4 outline-none focus-visible:ring-2"
              style={{ background: 'var(--tile)', color: 'var(--ink)', border: '1px solid var(--line)', ['--tw-ring-color' as string]: 'var(--blue)' }}
            />
          </label>
        }
      />
      {groups.length === 0 && <div className="tile text-center muted">No skills match “{q}”.</div>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.group} className={`tile tile-hover flex flex-col gap-4 ${span(g.items.length)}`}>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-[20px] font-bold tracking-tight">{g.group}</h3>
              <span className="whitespace-nowrap text-[13px] font-semibold" style={{ color: g.level === 'Expert' ? 'var(--blue)' : 'var(--muted)' }}>{g.level}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(g.shown.length ? g.shown : g.items).map((s) => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
