import { GraduationCap, Users } from 'lucide-react';
import { projects } from '../data/profile';
import { SectionTitle } from './Work';

/** Mini "app window" drawing for the platform project. */
function PlatformArt() {
  return (
    <div className="relative h-full min-h-[220px] w-full overflow-hidden rounded-[20px] p-4" style={{ background: 'linear-gradient(135deg,#e8f2fd,#efeaff)' }}>
      <div className="absolute inset-x-6 top-6 bottom-0 overflow-hidden rounded-t-2xl bg-white shadow-[0_20px_40px_-20px_rgba(0,40,120,.35)]">
        <div className="flex items-center gap-1.5 border-b border-[#eef] px-3 py-2">
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => <i key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />)}
        </div>
        <div className="grid h-full grid-cols-[22%_1fr] gap-3 p-3">
          <div className="space-y-2 rounded-lg bg-[#0071e3] p-2">
            {[70, 55, 80, 60, 50].map((w, i) => <i key={i} className="block h-2 rounded-full bg-white/60" style={{ width: `${w}%` }} />)}
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {['#0071e3', '#5e5ce6', '#30d158'].map((c) => (
                <div key={c} className="rounded-lg border border-[#eef] p-2">
                  <i className="block h-1.5 w-1/2 rounded-full bg-[#dde]" />
                  <i className="mt-2 block h-3 w-3/4 rounded" style={{ background: c }} />
                </div>
              ))}
            </div>
            <div className="flex h-20 items-end gap-1.5 rounded-lg border border-[#eef] p-2">
              {[40, 62, 48, 75, 58, 88, 70, 95].map((h, i) => <i key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 7 ? '#0071e3' : '#c9ddf7' }} />)}
            </div>
            <div className="space-y-1.5">{[90, 75, 82].map((w, i) => <i key={i} className="block h-2 rounded-full bg-[#eef]" style={{ width: `${w}%` }} />)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mini node-graph drawing for the workflow builder. */
function FlowArt() {
  const nodes = [
    { x: 8, y: 22, c: '#0071e3', t: 'Trigger' },
    { x: 38, y: 58, c: '#5e5ce6', t: 'Transform' },
    { x: 68, y: 22, c: '#30d158', t: 'Load' },
  ];
  return (
    <div className="relative h-[200px] overflow-hidden rounded-[20px]" style={{ background: 'linear-gradient(135deg,#eafaf0,#e8f2fd)' }}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <path d="M24 30 C 34 30, 34 66, 40 66" stroke="#9db8d9" strokeWidth="0.8" fill="none" strokeDasharray="2 1.5" vectorEffect="non-scaling-stroke" />
        <path d="M56 66 C 64 66, 62 30, 70 30" stroke="#9db8d9" strokeWidth="0.8" fill="none" strokeDasharray="2 1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      {nodes.map((n) => (
        <div key={n.t} className="absolute flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[13px] font-semibold text-[#1d1d1f] shadow-[0_10px_24px_-12px_rgba(0,40,120,.35)]" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          <i className="h-2.5 w-2.5 rounded-full" style={{ background: n.c }} />{n.t}
        </div>
      ))}
    </div>
  );
}

function IconArt({ icon: Icon, from, to }: { icon: typeof Users; from: string; to: string }) {
  return (
    <div className="grid h-[120px] place-items-center rounded-[20px]" style={{ background: `linear-gradient(135deg,${from},${to})` }}>
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-[0_12px_28px_-14px_rgba(0,0,0,.35)]">
        <Icon size={30} className="text-[#1d1d1f]" />
      </span>
    </div>
  );
}

export default function Projects() {
  const [platform, flow, lms, college] = projects;
  return (
    <section id="projects" className="space-y-6">
      <SectionTitle kicker="Projects" title="Things I've built." />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card p={platform} className="lg:col-span-2" art={<PlatformArt />} big />
        <Card p={flow} art={<FlowArt />} />
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-2">
          <Card p={lms} art={<IconArt icon={GraduationCap} from="#fff4e5" to="#ffe8ef" />} compact />
          <Card p={college} art={<IconArt icon={Users} from="#efeaff" to="#e8f2fd" />} compact />
        </div>
      </div>
    </section>
  );
}

function Card({ p, art, big, compact, className = '' }: { p: (typeof projects)[number]; art: React.ReactNode; big?: boolean; compact?: boolean; className?: string }) {
  return (
    <article className={`tile tile-hover flex flex-col gap-6 p-4 sm:p-5 ${className}`}>
      <div className={big ? 'flex-1' : ''}>{art}</div>
      <div className="px-2 pb-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="pill" style={p.status === 'Production' ? { color: 'var(--green)' } : undefined}>
            {p.status === 'Production' && <i className="mr-1.5 h-1.5 w-1.5 rounded-full" style={{ background: 'var(--green)' }} />}
            {p.status}
          </span>
          <span className="text-[13px] muted">{p.period}</span>
        </div>
        <h3 className={`mt-3 font-display font-bold tracking-tight ${big ? 'text-[clamp(26px,3vw,34px)] leading-tight' : 'text-[22px] leading-snug'}`}>{p.name}</h3>
        <p className="mt-2 text-[16px] muted">{p.summary}</p>
        {!compact && (
          <ul className="mt-4 space-y-2 text-[15px]">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-3"><span className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full" style={{ background: 'var(--blue)' }} />{pt}</li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {(big ? p.stack : p.stack.slice(0, 6)).map((s) => <span key={s} className="pill">{s}</span>)}
        </div>
      </div>
    </article>
  );
}
