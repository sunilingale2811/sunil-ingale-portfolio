import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
];

export default function Nav() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['top', ...LINKS.map((l) => l.id), 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-3 z-40 px-3 sm:top-4">
      <nav aria-label="Main" className="glass mx-auto flex max-w-[760px] items-center gap-1 rounded-full py-1.5 pl-2 pr-1.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,.18)]">
        <a href="#top" className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 focus-visible:outline focus-visible:outline-2" aria-label="Back to top">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] text-[12px] font-bold text-white">SI</span>
          <span className="hidden font-display text-[15px] font-bold tracking-tight sm:inline">Sunil Ingale</span>
        </a>
        <ul className="ml-auto flex items-center overflow-x-auto">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="block whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-medium transition-colors hover:bg-[var(--tile-2)] focus-visible:outline focus-visible:outline-2"
                style={active === l.id ? { color: 'var(--ink)', background: 'var(--tile-2)' } : { color: 'var(--muted)' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-blue ml-1 min-h-[38px] px-4 text-[14px]">Contact</a>
      </nav>
    </header>
  );
}
