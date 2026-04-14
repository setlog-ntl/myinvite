'use client';

import { AnimatedReveal } from './AnimatedReveal';

interface ContactItem { name: string; phone: string; role?: string; }
interface Props { config: { contacts: ContactItem[]; } }

export function ContactSection({ config }: Props) {
  if (!config.contacts?.length) return null;

  return (
    <AnimatedReveal>
      <section className="py-12 px-6">
        <h2 className="text-xl font-semibold text-center mb-6" style={{ color: 'var(--inv-text-primary)' }}>
          연락처
        </h2>
        <div className="max-w-md mx-auto space-y-2">
          {config.contacts.map((c, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl px-5 py-3.5" style={{ background: 'var(--inv-card-bg)', border: '1px solid var(--inv-card-border)' }}>
              <div>
                {c.role && <span className="text-xs" style={{ color: 'var(--inv-text-secondary)' }}>{c.role} </span>}
                <span className="font-medium" style={{ color: 'var(--inv-text-primary)' }}>{c.name}</span>
              </div>
              <a href={\`tel:\${c.phone}\`} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--inv-accent)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                전화
              </a>
            </div>
          ))}
        </div>
      </section>
    </AnimatedReveal>
  );
}
