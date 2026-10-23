import Image from "next/image";
import type { ReactNode } from "react";
import portrait from "./assets/portrait.jpg";
import { about, credentials, earlier, experience, facts, impact, person, resumes, skills, type Role } from "./content";
import { Logo } from "./components/Logo";
import { CountUp, MaskLines, Reveal, Rule, Unveil } from "./components/anim";
import { Nav } from "./components/Nav";

/* Ledger row: label column on the left, content on the right. */
const row = "grid gap-6 md:grid-cols-[200px_1fr] md:gap-10";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`}>
      <Rule />
      <div className={`${row} py-14 md:py-20`}>
        <Reveal>
          <h2 id={`${id}-h`} className="font-serif text-[22px] italic leading-tight text-muted">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>{children}</Reveal>
      </div>
    </section>
  );
}

function RoleRow({ r }: { r: Role }) {
  return (
    <li className="group grid gap-1 border-b border-line py-5 first:pt-0 last:border-0 sm:grid-cols-[110px_1fr] sm:gap-6">
      <span className="nums pt-0.5 text-[13px] text-muted transition-colors duration-300 group-hover:text-fg">{r.dates}</span>
      <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
        <h3 className="font-medium">{r.title}</h3>
        <p className="text-[15px] text-muted">{r.org}</p>
        {r.summary && <p className="mt-2 text-[15px] leading-relaxed">{r.summary}</p>}
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />

      <main id="main" className="mx-auto max-w-[960px] px-6">
        {/* Hero */}
        <section id="top" className={`${row} items-end pb-16 pt-32 md:pb-24 md:pt-44`}>
          <Unveil className="w-28 md:w-full">
            <Image
              src={portrait}
              alt={`Portrait of ${person.name}`}
              placeholder="blur"
              priority
              sizes="(min-width: 768px) 200px, 112px"
              className="aspect-[4/5] w-full object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
            />
          </Unveil>
          <div>
            <h1 className="font-serif text-[clamp(2.75rem,1.6rem+4.4vw,4.75rem)] font-light leading-[1.02] tracking-[-0.025em]">
              <span className="sr-only">{person.name}</span>
              <span aria-hidden="true">
                <MaskLines lines={["Anna Lurene", "Sendaydiego"]} delay={0.3} />
              </span>
            </h1>
            <Reveal delay={0.6}>
              <p className="mt-5 max-w-[34rem] text-[17px] leading-relaxed text-muted">
                {person.role}, {person.postNominals}. About 20 years in controllership, audit and governance across the
                Philippines, Japan and Kenya.
              </p>
            </Reveal>
            <Reveal delay={0.75}>
              <p className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-[15px]">
                <a href={`mailto:${person.email}`} className="u-link">
                  Email
                </a>
                <a href={resumes[0].href} download className="u-link">
                  Download résumé
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="max-w-[38rem] space-y-4 text-[17px] leading-relaxed">
            {about.map((p, n) => (
              <p key={n}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 max-w-[38rem]">
            {facts.map((f) => (
              <div key={f.label} className="grid gap-1 border-t border-line py-3 sm:grid-cols-[110px_1fr] sm:gap-6">
                <dt className="text-[13px] text-muted sm:pt-0.5">{f.label}</dt>
                <dd className="text-[15px]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="impact" title="Impact">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {impact.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="nums font-serif text-[2.75rem] font-light leading-none tracking-[-0.02em]">
                  <CountUp value={m.value} />
                </dd>
                <dd aria-hidden="true" className="mt-3 text-[14px] leading-snug text-muted">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-[12px] text-subtle">RareJob Philippines, 2020 – 2026</p>
        </Section>

        <Section id="experience" title="Experience">
          <ol>
            {experience.map((r) => (
              <RoleRow key={r.title} r={r} />
            ))}
          </ol>
          <h3 className="mt-12 mb-5 text-[13px] text-muted">Earlier</h3>
          <ol>
            {earlier.map((r) => (
              <RoleRow key={r.title} r={r} />
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <p className="max-w-[38rem] text-[17px] leading-loose">{skills.join(", ")}.</p>
        </Section>

        <Section id="credentials" title="Credentials">
          <ul>
            {credentials.map((c) => (
              <li key={c.title} className="flex items-baseline justify-between gap-6 border-b border-line py-4 first:pt-0 last:border-0">
                <div>
                  <p className="font-medium">{c.title}</p>
                  <p className="text-[15px] text-muted">{c.issuer}</p>
                </div>
                <span className="nums text-[13px] text-muted">{c.year}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <a
            href={`mailto:${person.email}`}
            className="u-link font-serif text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] font-light break-all"
          >
            {person.email}
          </a>
          <ul className="mt-8 space-y-2 text-[15px]">
            {resumes.map((r) => (
              <li key={r.href} className="flex gap-3">
                <a href={r.href} download className="u-link">
                  {r.label}
                </a>
                <span className="text-subtle">{r.meta}</span>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="mx-auto flex max-w-[960px] items-center justify-between border-t border-line px-6 py-8 text-[13px] text-muted">
        <span className="flex items-baseline gap-3">
          <Logo className="text-[18px] text-fg" />© 2026
        </span>
        <a href="#top" className="hover:text-fg">
          Top ↑
        </a>
      </footer>
    </>
  );
}
