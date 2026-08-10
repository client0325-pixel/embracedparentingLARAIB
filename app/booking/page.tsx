import SiteShell from '../components/SiteShell';

export default function BookingPage() {
  return (
    <SiteShell>
      <main className="wrap" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <section className="section-head reveal">
          <div className="eyebrow">Booking Page</div>
          <h2>Book a session with EmbracedParenting</h2>
          <p style={{ marginTop: '16px' }}>Choose a 30-minute consultation to talk through what’s going on at home and explore whether coaching feels like the right fit for you and your family.</p>
        </section>

        <section className="what-to-expect reveal">
          <div className="section-head">
            <div className="eyebrow">What to Expect</div>
            <h2>Support that feels clear, calm, and practical</h2>
            <p style={{ marginTop: '16px' }}>Each session is designed to help you feel seen, heard, and equipped with next steps you can use right away with your child and family.</p>
          </div>

          <div className="expectation-grid">
            <article className="expectation-card">
              <div className="eyebrow">30-Minute Session</div>
              <h3>Focused support for your most pressing challenge.</h3>
              <p>We’ll explore what’s happening now, what matters most to you, and where you want to feel more ease in your parenting.</p>
            </article>
            <article className="expectation-card">
              <div className="eyebrow">Virtual Meeting</div>
              <h3>Connect from home on a secure video call.</h3>
              <p>Meet in a calm, confidential space that fits your schedule so you can speak honestly and receive grounded guidance.</p>
            </article>
            <article className="expectation-card">
              <div className="eyebrow">Personalized Approach</div>
              <h3>Guidance shaped around your family’s needs.</h3>
              <p>Advice is tailored to your rhythms, values, and nervous-system needs so it feels believable and easy to use.</p>
            </article>
            <article className="expectation-card">
              <div className="eyebrow">Action Plan</div>
              <h3>Leave with clear next steps and supportive tools.</h3>
              <p>You’ll receive a simple, practical plan to help you try something new, stay grounded, and feel more confident between sessions.</p>
            </article>
          </div>
        </section>

        <section className="booking-card reveal" style={{ marginTop: '32px' }}>
          <div>
            <div className="eyebrow">Take the next step</div>
            <h3>Ready to feel more supported in your parenting journey?</h3>
            <p>Book a 30-minute session to talk through what’s going on at home and explore whether coaching feels like the right fit for you and your family.</p>
          </div>
          <a href="https://calendly.com/laraibsshaikh10/30min?utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="btn btn-alt">Book Your 30-Minute Session</a>
        </section>
      </main>
    </SiteShell>
  );
}
