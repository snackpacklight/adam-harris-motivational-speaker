import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Adam A. Harris | Motivational Speaker",
  description:
    "Motivation that meets you right where you are. Book Dr. Adam A. Harris for keynotes, workshops, and conversations that move people forward.",
};

const talks = [
  {
    number: "01",
    title: "Purpose in the Pause",
    copy: "A grounded message for people in seasons of waiting, uncertainty, or transition—helping them see that the pause can still be part of the progress.",
    tag: "Purpose · Change · Hope",
  },
  {
    number: "02",
    title: "Resilience for Real Life",
    copy: "Practical encouragement for getting back up without pretending the fall did not hurt. Audiences leave with language for the struggle and courage for the next step.",
    tag: "Resilience · Mindset · Action",
  },
  {
    number: "03",
    title: "Lead From Within",
    copy: "An invitation to lead from conviction, character, and clarity—at work, at home, and in the communities that are counting on us.",
    tag: "Leadership · Character · Impact",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dr. Adam A. Harris home">
          <span className="brand-mark">AH</span>
          <span className="brand-name">
            Adam A. Harris
            <small>Speaker · Encourager · Theologian</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#message">The message</a>
          <a href="#speaking">Speaking</a>
          <a href="#about">About</a>
        </nav>
        <a className="button button-small" href="#book">
          Book Dr. Harris <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Motivational speaking for real life</p>
          <h1>
            Motivation that meets you
            <em>right where you are.</em>
          </h1>
          <p className="hero-intro">
            Honest words. Lasting hope. A clear next step. Dr. Adam A. Harris
            brings a message that reaches people in the middle of real life—and
            reminds them that where they are is not where they have to stay.
          </p>
          <div className="hero-actions">
            <a className="button" href="#book">Bring Adam to your audience <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#speaking">Explore speaking topics <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-stage" aria-label="A message of forward movement">
          <div className="spotlight" />
          <div className="stage-word" aria-hidden="true">RISE</div>
          <div className="stage-card">
            <p>Wherever you are,</p>
            <strong>there is a way forward.</strong>
          </div>
          <div className="credential-pill">
            <span>Dr.</span>
            Doctorate<br />in Theology
          </div>
        </div>

        <div className="hero-footer">
          <span>Keynotes</span><i />
          <span>Workshops</span><i />
          <span>Faith &amp; Community Events</span><i />
          <span>Leadership Conversations</span>
        </div>
      </section>

      <section className="manifesto" id="message">
        <div className="section-label">The heart of the message</div>
        <div className="manifesto-copy">
          <p className="lead-quote">
            You do not have to have it all together to take your next step.
          </p>
          <div className="two-column-copy">
            <p>
              The most powerful motivation does not shout from far away. It
              listens first. It names the weight. Then it helps people discover
              the strength they already carry.
            </p>
            <p>
              Rooted in faith, shaped by theological study, and delivered with
              warmth, Dr. Harris speaks to the whole person—mind, heart, and
              spirit—without losing sight of what people can do next.
            </p>
          </div>
        </div>
      </section>

      <section className="audience-strip" aria-label="Ideal audiences">
        <p>Messages built for</p>
        <div>
          <span>Churches</span>
          <span>Schools</span>
          <span>Teams</span>
          <span>Community Groups</span>
          <span>Organizations</span>
        </div>
      </section>

      <section className="speaking" id="speaking">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> Signature messages</p>
            <h2>Words for the moment.<br /><em>Tools for what comes next.</em></h2>
          </div>
          <p>
            Every presentation can be shaped around your audience, your theme,
            and the outcome you want people to carry home.
          </p>
        </div>

        <div className="talk-list">
          {talks.map((talk) => (
            <article className="talk" key={talk.number}>
              <span className="talk-number">{talk.number}</span>
              <div>
                <h3>{talk.title}</h3>
                <p>{talk.copy}</p>
              </div>
              <span className="talk-tag">{talk.tag}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-visual" aria-hidden="true">
          <span className="about-word">MEET</span>
          <span className="about-initials">AAH</span>
          <div className="about-line" />
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Meet the speaker</p>
          <h2>Dr. Adam<br />A. Harris</h2>
          <p className="about-lead">
            A motivational speaker and trained theologian with a heart for
            helping people move from stuck to steady—and from steady to strong.
          </p>
          <p>
            Adam brings depth without distance. His approach is thoughtful,
            direct, and deeply human: meet people where they are, honor the road
            that brought them there, and help them believe in what is still
            possible.
          </p>
          <div className="credential-row">
            <span>Doctorate in Theology</span>
            <span>Audience-first messaging</span>
            <span>Faith-informed encouragement</span>
          </div>
        </div>
      </section>

      <section className="experience">
        <p className="eyebrow dark"><span /> The Adam Harris experience</p>
        <div className="experience-grid">
          <article>
            <strong>01</strong>
            <h3>Seen</h3>
            <p>People hear their real experience reflected—not talked around.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>Strengthened</h3>
            <p>Hope becomes more than a feeling; it becomes a way to stand again.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>Sent forward</h3>
            <p>Every message lands with a practical invitation to move.</p>
          </article>
        </div>
      </section>

      <section className="booking" id="book">
        <div className="booking-glow" aria-hidden="true" />
        <p className="eyebrow"><span /> Let’s start the conversation</p>
        <h2>Your audience is ready<br />for a word that <em>moves.</em></h2>
        <p>
          Planning a church gathering, school program, leadership event, team
          retreat, or community conversation? Tell Adam what your people are
          walking through.
        </p>
        <a
          className="button button-light"
          href="https://www.facebook.com/adam.a.harris.1"
          target="_blank"
          rel="noreferrer"
        >
          Connect with Adam on Facebook <span aria-hidden="true">↗</span>
        </a>
        <small>Direct booking contact details can be added here when available.</small>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">AH</span>
          <span className="brand-name">Dr. Adam A. Harris<small>Motivation that meets you right where you are.</small></span>
        </a>
        <p>Motivational speaking · Theology · Leadership · Hope</p>
        <a href="#top" className="back-top">Back to top ↑</a>
      </footer>
    </main>
  );
}
