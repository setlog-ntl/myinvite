'use client';

import { useState } from 'react';
import { AnimatedReveal } from './AnimatedReveal';

interface AccountItem { label: string; bankName: string; accountNumber: string; holder: string; }
interface Props { config: { accountTitle: string; accounts: AccountItem[]; kakaoPayUrl: string; } }

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* fallback */ }
  };
  return (
    <button onClick={handleCopy} className="text-xs px-3 py-1.5 rounded-md font-medium transition-colors"
      style={{ background: copied ? 'var(--inv-accent)' : 'var(--inv-accent-glow)', color: copied ? '#fff' : 'var(--inv-accent)' }}>
      {copied ? '복사됨!' : '복사'}
    </button>
  );
}

export function AccountSection({ config }: Props) {
  if (!config.accounts?.length && !config.kakaoPayUrl) return null;

  return (
    <AnimatedReveal>
      <section className="py-12 px-6" style={{ background: 'var(--inv-bg-alt)' }}>
        <h2 className="text-xl font-semibold text-center mb-6" style={{ color: 'var(--inv-text-primary)' }}>
          {config.accountTitle}
        </h2>
        <div className="max-w-md mx-auto space-y-3">
          {config.accounts.map((acc, i) => (
            <div key={i} className="rounded-xl p-4 shadow-sm" style={{ background: 'var(--inv-card-bg)', border: '1px solid var(--inv-card-border)' }}>
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--inv-text-secondary)' }}>{acc.label}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm" style={{ color: 'var(--inv-text-primary)' }}>{acc.bankName} {acc.accountNumber}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--inv-text-secondary)' }}>{acc.holder}</p>
                </div>
                <CopyButton text={acc.accountNumber} />
              </div>
            </div>
          ))}
          {config.kakaoPayUrl && (
            <a href={config.kakaoPayUrl} target="_blank" rel="noopener noreferrer"
              className="block text-center py-3 rounded-xl font-medium text-sm"
              style={{ background: '#FEE500', color: '#191919' }}>
              카카오페이로 송금하기
            </a>
          )}
        </div>
      </section>
    </AnimatedReveal>
  );
}
