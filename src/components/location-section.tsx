'use client';

import { AnimatedReveal } from './AnimatedReveal';

interface Props { config: { venueName: string; venueAddress: string; kakaoMapUrl: string; naverMapUrl: string; parkingInfo: string; transitInfo: string; } }

export function LocationSection({ config }: Props) {
  if (!config.venueName && !config.venueAddress) return null;

  return (
    <AnimatedReveal>
      <section className="py-12 px-6">
        <h2 className="text-xl font-semibold text-center mb-6" style={{ color: 'var(--inv-text-primary)' }}>
          장소 안내
        </h2>
        <div className="max-w-md mx-auto rounded-xl p-6 shadow-sm" style={{ background: 'var(--inv-card-bg)', border: '1px solid var(--inv-card-border)' }}>
          {config.venueName && <p className="font-semibold text-lg" style={{ color: 'var(--inv-text-primary)' }}>{config.venueName}</p>}
          {config.venueAddress && <p className="mt-1 text-sm" style={{ color: 'var(--inv-text-secondary)' }}>{config.venueAddress}</p>}

          <div className="flex gap-3 mt-4">
            {config.kakaoMapUrl && (
              <a href={config.kakaoMapUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-lg text-sm font-medium text-white"
                style={{ background: '#FEE500', color: '#191919' }}>
                카카오맵
              </a>
            )}
            {config.naverMapUrl && (
              <a href={config.naverMapUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-lg text-sm font-medium text-white"
                style={{ background: '#03C75A' }}>
                네이버맵
              </a>
            )}
          </div>

          {(config.parkingInfo || config.transitInfo) && (
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--inv-card-border)' }}>
              {config.parkingInfo && <p className="text-sm" style={{ color: 'var(--inv-text-secondary)' }}>{config.parkingInfo}</p>}
              {config.transitInfo && <p className="text-sm mt-1" style={{ color: 'var(--inv-text-secondary)' }}>{config.transitInfo}</p>}
            </div>
          )}
        </div>
      </section>
    </AnimatedReveal>
  );
}
