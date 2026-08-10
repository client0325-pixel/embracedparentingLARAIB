'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

const INSTAGRAM_SCRIPT_SRC = 'https://www.instagram.com/embed.js';

function loadInstagramScript(onLoad: () => void) {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${INSTAGRAM_SCRIPT_SRC}"]`);
  if (existing) {
    if (window.instgrm?.Embeds?.process) {
      onLoad();
    } else {
      existing.addEventListener('load', onLoad, { once: true });
    }
    return () => {
      existing.removeEventListener('load', onLoad);
    };
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = INSTAGRAM_SCRIPT_SRC;
  script.onload = onLoad;
  document.body.appendChild(script);

  return () => {
    script.onload = null;
    if (script.parentNode) script.parentNode.removeChild(script);
  };
}

export default function InstagramSection() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const processEmbeds = () => {
      if (window.instgrm?.Embeds?.process) {
        try {
          window.instgrm.Embeds.process();
          setLoaded(true);
        } catch {
          setFailed(true);
        }
      } else {
        setFailed(true);
      }
    };

    const cleanup = loadInstagramScript(processEmbeds);

    const timer = window.setTimeout(() => {
      if (!loaded) {
        processEmbeds();
      }
    }, 3000);

    return () => {
      if (cleanup) cleanup();
      window.clearTimeout(timer);
    };
  }, [loaded]);

  return (
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

        {failed && (
          <div className="insta-fallback" style={{ marginTop: '24px' }}>
            <p style={{ color: 'var(--ink-soft)', fontSize: '15px' }}>
              Instagram posts couldn’t load in this environment. Click the handle above to view the latest content on Instagram.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
