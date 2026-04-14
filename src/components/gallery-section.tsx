'use client';

import { AnimatedReveal } from './AnimatedReveal';

interface Props { config: { galleryImages: string[]; galleryColumns: number; } }

export function GallerySection({ config }: Props) {
  if (!config.galleryImages?.length) return null;

  return (
    <AnimatedReveal>
      <section className="py-12 px-6">
        <h2 className="text-xl font-semibold text-center mb-6" style={{ color: 'var(--inv-text-primary)' }}>
          갤러리
        </h2>
        <div className="max-w-lg mx-auto grid gap-2" style={{ gridTemplateColumns: \`repeat(\${config.galleryColumns}, 1fr)\` }}>
          {config.galleryImages.map((url, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg">
              <img src={url} alt={\`Photo \${i + 1}\`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </AnimatedReveal>
  );
}
