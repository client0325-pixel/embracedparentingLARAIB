import SiteShell from '../components/SiteShell';

export default function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <section className="section-head reveal" style={{ paddingTop: '60px', paddingBottom: '24px' }}>
          <div className="wrap">
            <div className="eyebrow">Services</div>
            <h2>Our Coaching Services</h2>
            <p style={{ marginTop: '16px' }}>Support that fits the season your family is in, with compassionate coaching rooted in nervous-system awareness, attachment, and practical guidance.</p>
          </div>
        </section>

        <section className="shift">
          <div className="wrap reveal">
            <div className="eyebrow">The Shift</div>
            <h2>You are not failing. Your nervous system is asking for support.</h2>
            <p>Laraib’s own path into this work began with postpartum overwhelm and the feeling of trying to hold everything together while quietly losing herself. That lived experience shapes the way she coaches — beginning with the body, the nervous system, and the emotional reality beneath the behavior.</p>
          </div>
        </section>

        <section className="services" id="services">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="eyebrow">How We Can Work Together</div>
              <h2>Support that fits the season your family is in</h2>
              <p>Whether you need a private space to unpack what’s happening at home, or a more guided group experience, each option is designed to be practical, warm, and deeply supportive.</p>
            </div>
            <div className="service-grid">
              <div className="service-card reveal">
                <div className="eyebrow">One-on-One Coaching</div>
                <h3>Personalized support for your family</h3>
                <p>Personalized coaching sessions designed around each family’s unique needs. These sessions create a compassionate space to explore family dynamics, uncover deeper patterns, and gain insight into what may be driving reactions during challenging moments. With a strong focus on nervous system regulation and emotional awareness, the work supports a shift from reacting to responding.</p>
              </div>
              <div className="service-card reveal">
                <div className="eyebrow">Group Coaching</div>
                <h3>A 12-week guided experience</h3>
                <p>A 12-week guided group experience where parents come together in a supportive and welcoming space to learn, reflect, and grow. These sessions focus on building self-awareness, understanding the nervous system, and strengthening emotional regulation to support more calm and intentional parenting.</p>
                <div className="service-note">Currently accepting parents for the waitlist.</div>
              </div>
              <div className="service-card reveal">
                <div className="eyebrow">Monthly Parenting Workshops</div>
                <h3>Warm, practical learning for parents</h3>
                <p>Interactive monthly workshops that offer a warm and engaging space for parents to learn and grow together. Topics include emotional regulation, nervous system awareness, intergenerational trauma, attachment styles, and the impact of early experiences on present-day parenting.</p>
                <div className="service-note">Currently accepting parents for the waitlist.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="who" id="who">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="eyebrow">Who She Helps</div>
              <h2>Coaching for every stage of family life</h2>
            </div>
            <div className="chip-row reveal">
              {['Young Children (0–4)','School-Age (5–12)','Teenagers (13–18+)','Grandparents & Parents of Adult Children','Foster / Adoptive Families','Step-Parenting'].map((item) => (
                <div key={item} className="chip"><i className="dot"></i>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="booking-cta">
          <div className="wrap">
            <div className="booking-card reveal">
              <div>
                <div className="eyebrow">Take the next step</div>
                <h3>Ready to feel more supported in your parenting journey?</h3>
                <p>Book a 30-minute session to talk through what’s going on at home and explore whether coaching feels like the right fit for you and your family.</p>
              </div>
              <a href="/booking" className="btn btn-alt">Book Your 30-Minute Session</a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
