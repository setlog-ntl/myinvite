'use client';

import { AnimatedReveal } from './AnimatedReveal';

interface HostItem { name: string; nameEn?: string; role: string; roleEn?: string; phone?: string; avatarUrl?: string; }
interface Props { config: { hostsTitle: string; hostsTitleEn?: string; hosts: HostItem[]; } }

export function HostsSection({ config }: Props) {
  if (!config.hosts?.length) return null;

  return (
    <AnimatedReveal>
      <section className="py-12 px-6">
        <h2 className="text-xl font-semibold text-center mb-8" style={{ color: 'var(--inv-text-primary)' }}>
          {config.hostsTitle}
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-lg mx-auto">
          {config.hosts.map((host, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {host.avatarUrl ? (
                <img src={host.avatarUrl} alt={host.name} className="w-20 h-20 rounded-full object-cover mb-3 shadow-sm" />
              ) : (
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl mb-3" style={{ background: 'var(--inv-accent-glow)', color: 'var(--inv-accent)' }}>
                  {host.name.charAt(0)}
                </div>
              )}
              <p className="text-sm" style={{ color: 'var(--inv-text-secondary)' }}>{host.role}</p>
              <p className="font-semibold" style={{ color: 'var(--inv-text-primary)' }}>{host.name}</p>
              {host.phone && (
                <a href={\`tel:\${host.phone}\`} className="mt-1 text-sm underline" style={{ color: 'var(--inv-accent)' }}>
                  {host.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </AnimatedReveal>
  );
}
