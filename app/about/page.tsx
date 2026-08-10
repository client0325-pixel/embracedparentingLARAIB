import SiteShell from '../components/SiteShell';

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <section className="section-head reveal" style={{ paddingTop: '60px', paddingBottom: '24px' }}>
          <div className="wrap">
            <div className="eyebrow">About</div>
            <h2>A parent coach with lived experience, professional care, and a calm, thoughtful approach</h2>
            <p style={{ marginTop: '16px' }}>Laraib is a Certified Parent Coach, mother of two, and former chemical engineer who brings a thoughtful blend of structure, empathy, and lived experience to her work. Her path into coaching grew out of her own experience with postpartum overwhelm, which shaped her approach to helping other parents feel supported rather than alone.</p>
          </div>
        </section>

        <section className="about-grid">
          <div className="about-photo reveal"><img src="/images/laraib-shaikh.jpg" alt="Laraib Shaikh, parent coach" /></div>
          <div className="reveal">
            <p>She has training in trauma-informed care and foster parenting, and she brings a culturally sensitive, faith-aware lens to her work. Her goal is to help parents build more connected homes, understand their children more deeply, and feel more confident in the way they show up.</p>
            <div className="about-blockquote">“Parenting is not about perfection. It is about presence, connection, and learning how to meet your family with more calm and care.”</div>
            <div className="about-list">
              <div><i className="dot"></i><span>Certified Parent Coach through The Jai Institute for Parenting.</span></div>
              <div><i className="dot"></i><span>Additional training in trauma-informed care and foster parenting.</span></div>
              <div><i className="dot"></i><span>Experienced in supporting families with attachment, emotional regulation, and stress.</span></div>
              <div><i className="dot"></i><span>Mother of two with lived parenting experience and compassionate coaching guidance.</span></div>
            </div>
          </div>
        </section>

        <section className="insta" style={{ paddingTop: '40px' }}>
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Follow Along</div>
                <h2>Be a part of the journey, on Instagram</h2>
              </div>
              <a href="https://www.instagram.com/laraib_shaikh10/" target="_blank" rel="noreferrer" className="btn btn-ghost">@laraib_shaikh10 ↗</a>
            </div>
            <div className="insta-grid reveal">
              <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DYv9KIsDmRM/" data-instgrm-version="14"></blockquote>
              <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/Da_8D1NkxFO/" data-instgrm-version="14"></blockquote>
              <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DaBh0-4OvTj/" data-instgrm-version="14"></blockquote>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
