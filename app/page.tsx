import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dr. Adam A. Harris | Motivational Speaker" };

const phone = { label: "(813) 475-2822", href: "tel:+18134752822" };
const talks = [
  ["Purpose in the Pause", "Change & transition", "What do you do when the next chapter takes longer than you expected? Explore how to choose one meaningful step while you wait."],
  ["Resilience for Real Life", "Resilience & hope", "A setback changes the plan. This conversation makes room for disappointment and asks what would make getting up tomorrow a little easier."],
  ["Lead From Within", "Leadership & character", "Consider a decision your team is facing. What would it look like to let your values guide your next conversation, especially when people disagree?"],
];

export default function Home() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header id="top"><a className="identity" href="#top"><b className="mark">AH</b><span>Dr. Adam A. Harris</span></a>
      <nav aria-label="Main navigation"><a href="#speaking">Speaking</a><a href="#about">About Adam</a></nav>
      <a className="nav-book" href="#book">Booking inquiries</a>
    </header>
    <main id="main">
      <section className="hero">
        <div className="hero-copy"><p className="overline">Motivational speaking</p>
          <h1>Motivation that meets you <em>right where you are.</em></h1>
          <p className="intro">Dr. Adam A. Harris brings faith and encouragement to the moments when the way forward feels uncertain.</p>
          <div className="actions"><a className="button" href="#book">Invite Adam to speak</a><a className="under" href="#speaking">Explore the talks</a></div>
        </div>
        <figure className="cover"><img src="/portraits/adam-harris.webp" width="1101" height="1650" alt="Dr. Adam A. Harris smiling outdoors in a navy suit" fetchPriority="high"/></figure>
      </section>
      <ul className="formats" aria-label="Speaking formats">
        <li>Keynotes</li><li>Workshops</li><li>Faith &amp; Community Events</li><li>Leadership Conversations</li>
      </ul>
      <section className="message wrap" aria-labelledby="message-title" id="message">
        <p className="overline">The heart of the message</p>
        <div>
          <h2 id="message-title">You do not have to have it all together to take your next step.</h2>
          <div className="message-body">
            <p>The most powerful motivation does not shout from far away. It listens first. It names the weight. Then it helps people discover the strength they already carry.</p>
            <p>Rooted in faith, shaped by theological study, and delivered with warmth, Dr. Harris speaks to the whole person—mind, heart, and spirit—without losing sight of what people can do next.</p>
          </div>
        </div>
      </section>
      <aside className="audiences" aria-labelledby="audiences-title">
        <p id="audiences-title">Messages built for</p>
        <ul><li>Churches</li><li>Schools</li><li>Teams</li><li>Community Groups</li><li>Organizations</li></ul>
      </aside>
      <section className="topics wrap" id="speaking">
        <p className="overline">Speaking topics</p><h2>A message for <em>your audience.</em></h2>
        <div className="cards">{talks.map(([title, theme, description]) => <article key={title}>
          <p className="theme">{theme}</p><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>
      <section className="about wrap" id="about">
        <img src="/portraits/adam-harris-bio.webp" width="1150" height="1650" loading="lazy" alt="Adam in a suit and tie, standing among palm trees"/>
        <div><p className="overline">Meet the speaker</p><h2>Dr. Adam <em>A. Harris</em></h2>
        <p>Adam holds a doctorate in theology. His speaking starts with a question that matters as much in a church hall as it does in a team meeting: what are the people in this room carrying today?</p>
        <p>Whether someone is finding their footing after a setback or helping others through change, his message offers an invitation to begin exactly where they are.</p></div>
      </section>
      <section className="experience wrap" aria-labelledby="experience-title">
        <h2 className="overline" id="experience-title">The Adam Harris experience</h2>
        <ol className="experience-list">
          <li><span aria-hidden="true">01</span><h3>Seen</h3><p>People hear their real experience reflected—not talked around.</p></li>
          <li><span aria-hidden="true">02</span><h3>Strengthened</h3><p>Hope becomes more than a feeling; it becomes a way to stand again.</p></li>
          <li><span aria-hidden="true">03</span><h3>Sent forward</h3><p>Every message lands with a practical invitation to move.</p></li>
        </ol>
      </section>
      <section className="booking wrap" id="book"><div><p className="overline">Speaking inquiries</p><h2>Invite Adam to <em>your event.</em></h2></div>
        <div><p>Planning a keynote, workshop or community gathering? Call Adam with your event date, location and a little about the people in the room.</p>
        <a className="call" href={phone.href} aria-label={'Call Adam at '+phone.label}>{phone.label}</a>
        <a className="under" href="https://www.facebook.com/adam.a.harris.1" target="_blank" rel="noreferrer">Connect on Facebook</a></div>
      </section>
    </main>
    <footer><a className="identity" href="#top"><b className="mark">AH</b>Dr. Adam A. Harris</a><a href={phone.href}>{phone.label}</a></footer>
  </>;
}
