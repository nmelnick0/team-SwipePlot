// Person C: build the Team section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #team so your CSS only affects your section.
section("team", () => `
  <style>
    #team .team-wrap { padding: 40px 0 8px; text-align: center; }
    #team .team-kicker { display: inline-block; font-size: .8rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: ${SITE.color}; background: color-mix(in srgb, ${SITE.color} 14%, transparent); padding: 4px 12px; border-radius: 999px; }
    #team h2 { font-size: clamp(1.7rem, 4vw, 2.3rem); margin: 14px 0 6px; line-height: 1.2; }
    #team .team-sub { color: #98a6bc; max-width: 560px; margin: 0 auto 36px; }
    #team .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 22px; }
    #team .team-card { position: relative; background: #12203a; border: 1px solid #22314f; border-radius: 20px; padding: 28px 20px 22px; transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
    #team .team-card:nth-child(odd) { transform: rotate(-2deg); }
    #team .team-card:nth-child(even) { transform: rotate(2deg); }
    #team .team-card:hover { transform: rotate(0) translateY(-6px); border-color: ${SITE.color}; box-shadow: 0 14px 34px color-mix(in srgb, ${SITE.color} 22%, transparent); }
    #team .team-stamp { position: absolute; top: 14px; right: 14px; font-size: .72rem; font-weight: 800; letter-spacing: .08em; color: ${SITE.color}; border: 2px solid ${SITE.color}; border-radius: 6px; padding: 1px 7px; transform: rotate(12deg); opacity: 0; transition: opacity .25s ease; }
    #team .team-card:hover .team-stamp { opacity: 1; }
    #team .team-avatar { width: 76px; height: 76px; margin: 0 auto 14px; border-radius: 50%; display: grid; place-items: center; font-size: 1.6rem; font-weight: 800; color: #0b1220; background: ${SITE.color}; }
    #team .team-name { font-size: 1.15rem; font-weight: 700; margin: 0; }
    #team .team-role { color: ${SITE.color}; font-size: .9rem; margin: 2px 0 12px; }
    #team .team-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; margin: 0; padding: 0; list-style: none; }
    #team .team-tags li { font-size: .78rem; color: #c7d2e3; background: #0b1220; border: 1px solid #22314f; border-radius: 999px; padding: 2px 10px; }
    #team .team-foot { color: #98a6bc; font-size: .9rem; margin-top: 36px; }
    #team .team-foot b { color: #eef3fa; }
    @media (max-width: 480px) {
      #team .team-card:nth-child(odd), #team .team-card:nth-child(even) { transform: none; }
    }
  </style>

  <div class="team-wrap">
    <span class="team-kicker">The team</span>
    <h2>Swipe right on the people behind ${SITE.name}</h2>
    <p class="team-sub">${SITE.tagline} We're four students who kept missing out on things to do, so we built the app we wanted.</p>

    <div class="team-grid">
      <article class="team-card">
        <span class="team-stamp">MATCH</span>
        <div class="team-avatar">A</div>
        <p class="team-name">Teammate A</p>
        <p class="team-role">Hero &amp; first impressions</p>
        <ul class="team-tags"><li>Hiking</li><li>Coffee runs</li><li>Pickup soccer</li></ul>
      </article>
      <article class="team-card">
        <span class="team-stamp">MATCH</span>
        <div class="team-avatar">B</div>
        <p class="team-name">Teammate B</p>
        <p class="team-role">Features &amp; matching</p>
        <ul class="team-tags"><li>Board games</li><li>Concerts</li><li>Cooking</li></ul>
      </article>
      <article class="team-card">
        <span class="team-stamp">MATCH</span>
        <div class="team-avatar">C</div>
        <p class="team-name">Teammate C</p>
        <p class="team-role">Team &amp; community</p>
        <ul class="team-tags"><li>Beach days</li><li>Climbing</li><li>Trivia nights</li></ul>
      </article>
      <article class="team-card">
        <span class="team-stamp">MATCH</span>
        <div class="team-avatar">D</div>
        <p class="team-name">Teammate D</p>
        <p class="team-role">Sign-up &amp; growth</p>
        <ul class="team-tags"><li>Road trips</li><li>Open mics</li><li>Volleyball</li></ul>
      </article>
    </div>

    <p class="team-foot">Got an activity in mind? Post it on <b>${SITE.name}</b> and see who swipes in.</p>
  </div>
`);
