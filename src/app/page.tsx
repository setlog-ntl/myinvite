import { siteConfig } from '@/lib/config';
import { HeroSection } from '@/components/hero-section';
import { CountdownSection } from '@/components/countdown-section';
import { HostsSection } from '@/components/hosts-section';
import { LocationSection } from '@/components/location-section';
import { GallerySection } from '@/components/gallery-section';
import { AccountSection } from '@/components/account-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <>
      <main className="min-h-screen" style={{ background: 'var(--inv-bg)' }}>
        <HeroSection config={siteConfig} />
        <CountdownSection config={siteConfig} />
        <HostsSection config={siteConfig} />
        <LocationSection config={siteConfig} />
        <GallerySection config={siteConfig} />
        <AccountSection config={siteConfig} />
        <ContactSection config={siteConfig} />
      </main>
      <footer className="py-6 text-center text-xs" style={{ color: 'var(--inv-text-secondary)', background: 'var(--inv-bg-alt)' }}>
        <a href="https://linkmap.pages.dev" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
          Powered by Linkmap
        </a>
      </footer>
    </>
  );
}
