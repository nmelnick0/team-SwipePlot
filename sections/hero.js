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
    #hero .card { width: 200px; padding: 48px 16px; border-radius: 20px; background: #fff; color: #111; font-weight: 700; box-shadow: 0 12px 30px #0003; transform: rotate(-4deg); }
    #hero .card small { display: block; margin-top: 8px; font-weight: 400; opacity: 0.6; }
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
    <div class="card">🎳 Bowling tonight<small>3 people nearby swiped yes</small></div>
    <span class="yes">♥</span>
  </div>
  <a href="#signup">Get early access</a>
`);
