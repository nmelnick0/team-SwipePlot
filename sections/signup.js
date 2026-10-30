// Person D: build the Sign up section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #signup so your CSS only affects your section.
section("signup", () => `
  <style>
    #signup { --signup-accent: ${SITE.color}; }
    #signup .signup-card { position: relative; overflow: hidden; padding: clamp(24px, 6vw, 56px); border: 1px solid #31465a; border-radius: 28px; background: radial-gradient(ellipse at top right, #203d44, transparent 65%), #111e2b; }
    #signup .signup-layout { display: grid; grid-template-columns: 1.1fr 1fr; gap: 40px; align-items: center; }
    #signup .signup-eyebrow { margin: 0 0 16px; color: var(--signup-accent); font-size: .75rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
    #signup h2 { max-width: 12ch; margin: 0 0 18px; font-size: clamp(2rem, 5vw, 3.4rem); line-height: 1.08; letter-spacing: -.045em; }
    #signup .signup-intro { max-width: 38ch; margin: 0; color: #c1cedb; }
    #signup .signup-activities { display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 24px 0 0; list-style: none; }
    #signup .signup-activities li { padding: 6px 12px; border: 1px solid #415766; border-radius: 99px; font-size: .8rem; color: #d8e5ed; }
    #signup .signup-form-panel { min-width: 0; padding: 24px; background: #0b1520; border: 1px solid #344957; border-radius: 20px; }
    #signup h3 { margin: 0 0 8px; font-size: 1.2rem; }
    #signup .signup-description { margin: 0 0 20px; color: #b5c5d4; font-size: .9rem; }
    #signup label { display: block; margin-bottom: 8px; font-size: .85rem; font-weight: 650; }
    #signup input { box-sizing: border-box; width: 100%; min-height: 48px; padding: 12px 14px; border: 1px solid #526779; border-radius: 10px; background: #142230; color: #fff; font: inherit; }
    #signup input::placeholder { color: #a6b6c5; }
    #signup button { width: 100%; min-height: 48px; margin-top: 12px; padding: 12px 18px; border: 0; border-radius: 10px; background: var(--signup-accent); color: #0b1220; font: inherit; font-weight: 800; cursor: pointer; }
    #signup button:hover { filter: brightness(1.08); }
    #signup input:focus-visible, #signup button:focus-visible { outline: 3px solid var(--signup-accent); outline-offset: 4px; }
    #signup .signup-note { margin: 12px 0 0; color: #a6b6c5; font-size: .75rem; }
    #signup .signup-status { margin: 12px 0 0; color: #eef3fa; font-size: .9rem; }
    #signup .signup-status:empty { display: none; }
    #signup .signup-tagline { margin: 28px 0 0; padding-top: 18px; border-top: 1px solid #344957; color: #a6b6c5; font-size: .8rem; }
    @media (max-width: 680px) {
      #signup .signup-layout { grid-template-columns: 1fr; gap: 28px; }
      #signup h2 { max-width: 16ch; }
      #signup .signup-form-panel { padding: 20px; }
    }
  </style>
  <div class="signup-card">
    <div class="signup-layout">
      <div>
        <p class="signup-eyebrow">Find your next &ldquo;let's go&rdquo;</p>
        <h2 id="signup-title">Less scrolling.<br>More showing up.</h2>
        <p class="signup-intro">Swipe on something you want to do. Meet people nearby who are up for it, too. Your next good plan starts with ${SITE.name}.</p>
        <ul class="signup-activities" aria-label="Activities to discover">
          <li>Soccer at the park</li>
          <li>A night of bowling</li>
          <li>A coffee &amp; a walk</li>
        </ul>
      </div>
      <div class="signup-form-panel">
        <h3>Make room for a new plan.</h3>
        <p class="signup-description">Want in on ${SITE.name}? Try our early-access signup preview.</p>
        <form aria-labelledby="signup-title" onsubmit="event.preventDefault(); this.querySelector('[role=status]').textContent = 'You’re all set for this preview! No email was saved or sent. Follow along for the real launch.'; this.reset();">
          <label for="signup-email">Your email</label>
          <input id="signup-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" aria-describedby="signup-privacy" required>
          <button type="submit">Count me in &rarr;</button>
          <p id="signup-privacy" class="signup-note">Demo only. Your email stays in your browser and is never saved or sent.</p>
          <p class="signup-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>
    <p class="signup-tagline">${SITE.name} &middot; ${SITE.tagline}</p>
  </div>
`);
