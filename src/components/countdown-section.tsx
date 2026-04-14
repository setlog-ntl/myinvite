'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatedReveal } from './AnimatedReveal';

interface Props { config: { eventDate: string; eventTime: string; eventDateLabel: string; eventDateLabelEn?: string; showCountdown: boolean; countdownStyle: 'flip' | 'simple'; } }

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function FlipCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-20 md:w-20 md:h-24 rounded-xl overflow-hidden shadow-md" style={{ background: 'var(--inv-card-bg)', border: '1px solid var(--inv-card-border)' }}>
        <div className="flex items-center justify-center h-full text-2xl md:text-3xl font-bold tabular-nums" style={{ color: 'var(--inv-accent)' }}>
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <span className="text-[10px] uppercase tracking-wider font-medium" style={{ color: 'var(--inv-text-secondary)' }}>{label}</span>
    </div>
  );
}

function SimpleCounter({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center px-3">
      <div className="text-3xl md:text-4xl font-bold tabular-nums" style={{ color: 'var(--inv-accent)' }}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-[10px] uppercase tracking-wider mt-1" style={{ color: 'var(--inv-text-secondary)' }}>{label}</div>
    </div>
  );
}

export function CountdownSection({ config }: Props) {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  const targetMs = useMemo(
    () => new Date(\`\${config.eventDate}T\${config.eventTime || '00:00'}:00\`).getTime(),
    [config.eventDate, config.eventTime],
  );

  useEffect(() => {
    const target = new Date(targetMs);
    setTimeLeft(getTimeLeft(target));
    const timer = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(timer);
  }, [targetMs]);

  const CounterCard = config.countdownStyle === 'simple' ? SimpleCounter : FlipCard;

  return (
    <AnimatedReveal>
      <section className="py-14 px-6 text-center" style={{ background: 'var(--inv-bg-alt)' }}>
        {config.showCountdown && timeLeft && !timeLeft.expired && (
          <div className="flex justify-center gap-3 md:gap-5 mb-8">
            <CounterCard value={timeLeft.days} label="DAYS" />
            <div className="flex items-center text-xl font-light pt-[-8px]" style={{ color: 'var(--inv-text-secondary)' }}>:</div>
            <CounterCard value={timeLeft.hours} label="HOURS" />
            <div className="flex items-center text-xl font-light" style={{ color: 'var(--inv-text-secondary)' }}>:</div>
            <CounterCard value={timeLeft.minutes} label="MIN" />
            <div className="flex items-center text-xl font-light" style={{ color: 'var(--inv-text-secondary)' }}>:</div>
            <CounterCard value={timeLeft.seconds} label="SEC" />
          </div>
        )}
        {timeLeft?.expired && (
          <p className="text-lg font-semibold mb-4" style={{ color: 'var(--inv-accent)' }}>
            행사가 시작되었습니다!
          </p>
        )}
        <p className="text-base font-medium" style={{ color: 'var(--inv-text-primary)' }}>
          {config.eventDateLabel}
        </p>
      </section>
    </AnimatedReveal>
  );
}
