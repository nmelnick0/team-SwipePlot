// Person B: build the Features section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #features so your CSS only affects your section.
section("features", () => `
  <style>
    #features { padding: 56px 24px; text-align: center; }
    #features h2 { margin: 0 0 8px; font-size: 2rem; }
    #features .sub { margin: 0 0 32px; opacity: 0.7; }
    #features .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      max-width: 900px;
      margin: 0 auto;
    }
    #features .card {
      padding: 24px 20px;
      border: 2px solid ${SITE.color};
      border-radius: 16px;
      text-align: left;
    }
    #features .icon { font-size: 2rem; margin-bottom: 8px; }
    #features .card h3 { margin: 0 0 6px; color: ${SITE.color}; }
    #features .card p { margin: 0; line-height: 1.5; }
  </style>
  <h2>How ${SITE.name} works</h2>
  <p class="sub">Swipe, match, show up.</p>
  <div class="grid">
    <div class="card">
      <div class="icon">👆</div>
      <h3>Swipe on activities</h3>
      <p>Swipe right on hikes, game nights, pickup soccer and more near you. Swipe left to skip.</p>
    </div>
    <div class="card">
      <div class="icon">🤝</div>
      <h3>Get matched</h3>
      <p>We put you with people who also swiped yes. If nobody has yet, our activity finder starts looking and connects you as they join.</p>
    </div>
    <div class="card">
      <div class="icon">📍</div>
      <h3>Map and sign up</h3>
      <p>See every activity in your area on one map and sign up in a tap.</p>
    </div>
  </div>
`);
