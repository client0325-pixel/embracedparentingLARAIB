'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/booking', label: 'Booking' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header>
      <nav className="wrap">
        <Link href="/" className="logo" aria-label="EmbracedParenting home">
          <span className="logo-mark" aria-hidden="true">
            <Image src="/images/logonew.png" alt="" width={130} height={52} />
          </span>
          <span className="sr-only">EmbracedParenting</span>
        </Link>

        <div className="navlinks" aria-label="Primary navigation">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link href={link.href} key={link.href} className={isActive ? 'active' : ''}>
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="navcta">
          <a href="https://calendly.com/laraibsshaikh10/30min?utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '11px 20px', fontSize: '14px' }}>
            Book a Session
          </a>
        </div>

        <button className="menu-btn" type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </button>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`} id="mobile-menu">
        {links.map((link) => (
          <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a href="https://calendly.com/laraibsshaikh10/30min?utm_source=chatgpt.com" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          Book a Session
        </a>
      </div>
    </header>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <footer>
        <div className="wrap footer-grid">
          <div>
            <Link href="/" className="logo" style={{ fontSize: '18px' }} aria-label="EmbracedParenting home">
              <span className="logo-mark" aria-hidden="true">
                <Image src="/images/logonew.png" alt="" width={130} height={52} />
              </span>
              <span className="sr-only">EmbracedParenting</span>
            </Link>
            <p style={{ marginTop: '10px', maxWidth: '360px' }}>Compassionate parent coaching rooted in connection, nervous-system awareness, and culturally sensitive support.</p>
          </div>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/booking">Booking Page</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: '22px', fontSize: '13px', color: 'var(--ink-soft)' }}>© 2026 Laraib Shaikh · Mississauga, Ontario, Canada</div>
      </footer>
    </>
  );
}
