// Person A: build the Hero section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #hero so your CSS only affects your section.
section("hero", () => `
  <style>
    #hero { padding: 96px 24px; text-align: center; background: linear-gradient(160deg, ${SITE.color}33, transparent 70%); }
    #hero h1 { font-size: clamp(2.5rem, 8vw, 4.5rem); margin: 0 0 16px; letter-spacing: -0.02em; }
    #hero p { font-size: 1.25rem; max-width: 36ch; margin: 0 auto 16px; opacity: 0.8; }
    #hero .pitch { font-size: 1rem; opacity: 0.65; }
    #hero .cards { display: flex; align-items: center; justify-content: center; gap: 20px; margin: 32px 0; }
    #hero .card { position: relative; width: 220px; overflow: hidden; border-radius: 20px; background: #fff; color: #111; font-weight: 700; box-shadow: 0 12px 30px #0003; transform: rotate(-4deg); }
    #hero .card svg { display: block; width: 100%; height: auto; }
    #hero .card .when { position: absolute; top: 132px; left: 10px; padding: 2px 10px; border-radius: 999px; background: #fffe; font-size: 0.75rem; }
    #hero .card .info { padding: 14px 16px 18px; }
    #hero .card small { display: block; margin-top: 4px; font-weight: 400; opacity: 0.6; }
    #hero .nope, #hero .yes { width: 48px; height: 48px; line-height: 48px; border-radius: 50%; font-size: 1.4rem; background: #fff; box-shadow: 0 4px 12px #0002; }
    #hero .nope { color: #e5484d; }
    #hero .yes { color: ${SITE.color}; }
    #hero a { display: inline-block; padding: 14px 32px; border-radius: 999px; background: ${SITE.color}; color: #111; font-weight: 700; text-decoration: none; }
    #hero a:hover, #hero a:focus-visible { filter: brightness(1.1); outline: 2px solid ${SITE.color}; outline-offset: 3px; }
  </style>
  <h1>${SITE.name}</h1>
  <p>${SITE.tagline}</p>
  <p class="pitch">Swipe right on things to do. Match with people who'd do them too. Go hang out.</p>
  <div class="cards" aria-hidden="true">
    <span class="nope">✕</span>
    <div class="card">
      <svg viewBox="0 0 200 150">
        <defs>
          <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b1640"/><stop offset="1" stop-color="#3a2a6b"/></linearGradient>
          <linearGradient id="hero-lane" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c98b4a"/><stop offset="1" stop-color="#f1c58a"/></linearGradient>
          <radialGradient id="hero-shine" cx="0.35" cy="0.3" r="0.6"><stop offset="0" stop-color="#fff" stop-opacity="0.7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
          <symbol id="hero-pin" viewBox="0 0 8 20"><circle cx="4" cy="4" r="2.4" fill="#fff"/><rect x="2.4" y="5" width="3.2" height="4" fill="#fff"/><ellipse cx="4" cy="14" rx="3.6" ry="5.6" fill="#fff"/><rect x="2" y="6.6" width="4" height="1.2" fill="#e5484d"/></symbol>
        </defs>
        <rect width="200" height="150" fill="url(#hero-sky)"/>
        <text x="100" y="26" text-anchor="middle" font-size="18" font-weight="800" letter-spacing="4" fill="${SITE.color}">BOWL</text>
        <rect x="70" y="36" width="60" height="22" fill="#0d0b1f"/>
        <polygon points="0,150 200,150 122,58 78,58" fill="#14112b"/>
        <polygon points="24,150 176,150 116,58 84,58" fill="url(#hero-lane)"/>
        <g stroke="#b07a3e" stroke-opacity="0.5"><line x1="62" y1="150" x2="92" y2="58"/><line x1="100" y1="150" x2="100" y2="58"/><line x1="138" y1="150" x2="108" y2="58"/></g>
        <g fill="#8a5a2b"><polygon points="86,112 90,104 94,112"/><polygon points="98,112 102,104 106,112"/><polygon points="110,112 114,104 118,112"/></g>
        <use href="#hero-pin" x="88" y="40" width="6" height="15"/><use href="#hero-pin" x="94" y="40" width="6" height="15"/><use href="#hero-pin" x="100" y="40" width="6" height="15"/><use href="#hero-pin" x="106" y="40" width="6" height="15"/>
        <use href="#hero-pin" x="91" y="43" width="6" height="15"/><use href="#hero-pin" x="97" y="43" width="6" height="15"/><use href="#hero-pin" x="103" y="43" width="6" height="15"/>
        <use href="#hero-pin" x="94" y="46" width="6" height="15"/><use href="#hero-pin" x="100" y="46" width="6" height="15"/>
        <use href="#hero-pin" x="97" y="49" width="6" height="15"/>
        <path d="M128 146 Q122 134 116 126" stroke="#fff" stroke-opacity="0.5" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="110" cy="118" r="14" fill="${SITE.color}"/>
        <circle cx="110" cy="118" r="14" fill="url(#hero-shine)"/>
        <g fill="#0007"><circle cx="106" cy="113" r="1.8"/><circle cx="112" cy="112" r="1.8"/><circle cx="109" cy="119" r="2.2"/></g>
      </svg>
      <span class="when">Tonight · 0.8 mi</span>
      <div class="info">🎳 Bowling tonight<small>3 people nearby swiped yes</small></div>
    </div>
    <span class="yes">♥</span>
  </div>
  <a href="#signup">Get early access</a>
`);
