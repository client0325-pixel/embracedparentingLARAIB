import SiteShell from './components/SiteShell';
import InstagramSection from './components/InstagramSection';

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">Jai Certified Parent Coach · Mississauga, ON</div>
              <h1>Parenting is hard.<br />You don’t have to hold it <em>alone</em>.</h1>
              <p className="sub">Support for parents who want more calm, stronger connection, and calmer responses at home — with a grounded, compassionate approach that respects your family’s story.</p>
              <div className="hero-ctas">
                <a href="https://calendly.com/laraibsshaikh10/30min?utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="btn btn-primary">Book a Session</a>
                <a href="/services" className="btn btn-ghost">Learn More</a>
              </div>
              <div className="trustline">
                <span><i className="dot"></i>English · Urdu · Hindi</span>
                <span><i className="dot"></i>Trauma-informed &amp; foster-care trained</span>
                <span><i className="dot"></i>Culturally &amp; faith-sensitive</span>
              </div>
            </div>
            <div className="hero-side reveal">
              <div className="hero-visual">
                <div className="portrait">
                  <img src="/images/laraib-shaikh.jpg" alt="Laraib Shaikh, Jai Certified Parent Coach" />
                </div>
                <div className="hero-card">
                  <div className="badge">A supportive space for real parenting challenges</div>
                  <h3>Helping parents move from overwhelm to connection.</h3>
                  <p>Through nervous-system awareness, attachment-based care, and practical guidance, coaching helps families feel more grounded and connected.</p>
                  <ul>
                    <li>Support for parents navigating stress, emotion, and big feelings</li>
                    <li>Gentle tools for everyday moments that feel hard</li>
                    <li>Guidance rooted in compassion, not shame</li>
                  </ul>
                  <a href="/about" className="hero-link">Discover the approach →</a>
                </div>
              </div>
            </div>
          </div>
          <div className="wave-band">
            <svg viewBox="0 0 1200 90" preserveAspectRatio="none">
              <path d="M0,45 L20,20 L40,70 L60,10 L80,60 L100,25 L120,55 L140,15 L160,65 L180,30 L200,50 L220,18 L240,62 L260,28 L280,58 L300,22 L320,48 L340,14 L360,66 L380,32 L400,52 L420,20 L440,60 L460,26 L480,54 L500,30 L520,46 L540,22 L560,58 L580,34 L600,45 L620,30 L640,50 L660,32 L680,46 L700,34 L720,44 L740,36 L760,42 L780,38 L800,42 L820,38 L840,42 L860,38 L880,41 L900,39 L920,41 L940,39 L960,41 L980,40 L1000,41 L1020,40 L1200,40" fill="none" stroke="var(--clay)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="wave-caption">Overwhelmed → Regulated — the work, in one line</div>
        </section>

        <section className="pillars" id="framework">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="eyebrow">The EMBRACED Framework</div>
              <h2>A grounded, compassionate approach to parenting support</h2>
              <p>This framework highlights the heart of the coaching: connection, calm, and confidence. It is designed to help families feel safer and more attuned in the everyday.</p>
            </div>
            <div className="framework-grid">
              {[
                {label: 'Empathy', title: 'Seeing the child clearly', description: 'We begin by understanding the emotions beneath the behavior, so responses feel less reactive and more attuned.'},
                {label: 'Mindful Presence', title: 'Calm in the moment', description: 'Parents learn how regulation supports better communication, less escalation, and more steadiness across the day.'},
                {label: 'Bonding & Belonging', title: 'Connection before correction', description: 'Support is designed to strengthen security, trust, and belonging — especially when parenting has felt strained or overwhelming.'},
                {label: 'Respect', title: 'Honoring each family story', description: 'Every family is met with care, curiosity, and respect — including cultural, faith, and lived-experience differences.'},
                {label: 'Attunement', title: 'Listening beneath the surface', description: 'We slow down and identify what a child may be communicating through their behavior, so responses become more intentional.'},
                {label: 'Compassion', title: 'Gentle, nonjudgmental support', description: 'The process is grounded in compassion for both the child and the parent, especially in moments of stress and doubt.'},
                {label: 'Empowerment', title: 'Confidence that grows', description: 'Parents leave with more clarity, stronger boundaries, and tools that feel practical rather than performative.'},
                {label: 'Development', title: 'Growth over perfection', description: 'The work supports long-term family growth through insight, consistency, and habits that can actually be lived.'}
              ].map((item) => (
                <div key={item.label} className="framework-card reveal">
                  <div className="framework-card-intro">
                    <div className="framework-card-mark">{item.label.slice(0, 1)}</div>
                    <div>
                      <h3>{item.label}</h3>
                      <div className="framework-card-subtitle">{item.title}</div>
                    </div>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InstagramSection />

        <section className="testi" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">In Their Words</div>
                <h2>Parents describe the work as calm, compassionate, and transformative</h2>
              </div>
            </div>
            <div className="testi-grid">
              <div className="testi-card reveal">
                <div className="testi-quote">"Doing one-on-one coaching with Laraib was truly the best thing that happened for my family this year. It encouraged me to deeply understand what true connection and secure attachment mean with my children, and how to embody compassionate parenting without compromising my values.</div>
                <div className="testi-quote">Through this journey, I learned how to love my child unconditionally by gaining insight into child development, developing the skills to regulate and ground myself during challenging emotions, and learning how to be a safe harbour for my children.</div>
                <div className="testi-quote">Laraib herself was incredibly non-judgmental, understanding, and compassionate—always offering an empathetic ear and practical guidance tailored to each specific situation I faced.</div>
                <div className="testi-quote">I highly recommend one-on-one parent coaching with Laraib to anyone wanting to transform their approach to parenting and become a loving yet assertive parent who can confidently handle whatever challenges arise. It’s a powerful mindset shift that helps you make small but meaningful changes—improving your family dynamic in lasting ways, free of guilt or shame."</div>
                <div className="testi-who">— Eden, Mom of 2</div>
              </div>
              <div className="testi-card reveal">
                <div className="testi-quote">"Laraib has a calm presence that inspires trust and confidence, and she cares so deeply - it shows up in every conversation we’ve shared. She is gentle but shows up with honesty, unafraid to say what you need to hear and a role-model for self-possession. I thank Allah everyday for sending Laraib in my life."</div>
                <div className="testi-who">— Nusrat, Mom of 4</div>
              </div>
              <div className="testi-card reveal">
                <div className="testi-quote">"Laraib is a truly gifted parent coach. I deeply appreciate her calm, connected presence and the confident, yet curious, leadership she brings to each session. Her empathy and understanding make her a joy to work with, and her wealth of knowledge is evident in every interaction. I am incredibly grateful for the opportunity to receive coaching from her."</div>
                <div className="testi-who">— Naomi, Mom of 4</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
