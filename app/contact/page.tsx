import SiteShell from '../components/SiteShell';

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="wrap" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <section className="section-head reveal">
          <div className="eyebrow">Contact</div>
          <h2>Get in touch</h2>
          <p style={{ marginTop: '16px' }}>Reach out by phone, email, or book a consultation. Support is available in English, Urdu, and Hindi.</p>
        </section>
        <section className="contact-card reveal" style={{ marginTop: '32px' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Get In Touch</div>
            <h2>Ready to parent with more peace and connection?</h2>
            <p>Book a 30-minute session, send a message, or reach out directly by phone or email. Support is available in English, Urdu, or Hindi.</p>
            <a href="https://calendly.com/laraibsshaikh10/30min?utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="btn btn-primary">Book a 30-Minute Session</a>
            <div className="contact-list">
              <div className="contact-item"><span>📧</span><a href="mailto:laraibsshaikh10@gmail.com">laraibsshaikh10@gmail.com</a></div>
              <div className="contact-item"><span>📞</span><a href="tel:2894426874">289-442-6874</a></div>
              <div className="contact-item"><span>📍</span><span>Mississauga, Ontario, Canada</span></div>
              <div className="contact-item"><span>📷</span><a href="https://www.instagram.com/laraib_shaikh10/" target="_blank" rel="noreferrer">Follow me on Instagram</a></div>
            </div>
          </div>
          <form>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Email address" required />
            <textarea name="message" placeholder="What would you like support with? Tell me a bit about your family." required></textarea>
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', border: 'none', width: '100%', fontFamily: 'inherit' }}>Send Message</button>
          </form>
        </section>
      </main>
    </SiteShell>
  );
}
