'use client';

import { AnimatedReveal } from './AnimatedReveal';

interface Props { config: { title: string; titleEn?: string; subtitle: string; subtitleEn?: string; heroImageUrl: string; gradientFrom: string; gradientTo: string; eventType: string; } }

const EVENT_EMOJI: Record<string, string> = {
  gathering: '\u{1F389}',
  birthday: '\u{1F382}',
  wedding: '\u{1F48D}',
  baby: '\u{1F476}',
  celebration: '\u{1F389}',
  corporate: '\u{1F3E2}',
  custom: '\u{2728}',
};

export function HeroSection({ config }: Props) {
  const emoji = EVENT_EMOJI[config.eventType] || EVENT_EMOJI.custom;
  const bgStyle = config.heroImageUrl
    ? { backgroundImage: \`url(\${config.heroImageUrl})\`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: \`linear-gradient(160deg, \${config.gradientFrom}, \${config.gradientTo})\` };

  return (
    <section className="relative min-h-[65vh] flex flex-col items-center justify-center text-center px-6 py-24" style={bgStyle}>
      {config.heroImageUrl && <div className="absolute inset-0 bg-black/30" />}
      <AnimatedReveal>
        <div className="relative z-10 max-w-md mx-auto">
          <div className="text-4xl mb-6 animate-bounce" style={{ animationDuration: '2s' }}>{emoji}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug whitespace-pre-line drop-shadow-sm">
            {config.title}
          </h1>
          {config.subtitle && (
            <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed">{config.subtitle}</p>
          )}
          <div className="mt-8 w-12 h-px mx-auto bg-white/40" />
        </div>
      </AnimatedReveal>
    </section>
  );
}
