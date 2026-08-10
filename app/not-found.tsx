import Link from 'next/link';
import SiteShell from './components/SiteShell';

export default function NotFound() {
  return (
    <SiteShell>
      <main className="wrap" style={{ padding: '100px 0 120px' }}>
        <section style={{ textAlign: 'center' }}>
          <div className="eyebrow">Page not found</div>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 68px)', marginTop: '18px' }}>Oops — we can’t find that page.</h1>
          <p style={{ marginTop: '18px', maxWidth: '620px', marginInline: 'auto', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            The page you are looking for may have moved, or the link is broken. Use the button below to return to the home page and continue exploring support for your family.
          </p>
          <Link href="/" className="btn btn-primary" style={{ marginTop: '28px' }}>
            Return home
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
