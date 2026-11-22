import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { About, Contact } from './components/About';
import { profile } from './data/profile';

export default function App() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1200px] space-y-24 px-4 pb-10 pt-8 sm:px-6 sm:pt-10 lg:space-y-32">
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <footer className="flex flex-wrap justify-between gap-2 px-1 text-[13px] muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React, TypeScript, Vite and Tailwind CSS</span>
        </footer>
      </main>
    </>
  );
}
