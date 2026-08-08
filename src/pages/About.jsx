import "./About.css";

const values = [
  {
    time: "01",
    label: "Clarity over chaos",
    body: "Every quote, thread, and contract lives in one place — no more digging through texts and DMs.",
  },
  {
    time: "02",
    label: "Vetted, not just listed",
    body: "Every provider on Hetk is reviewed before they can accept a single booking.",
  },
  {
    time: "03",
    label: "Built for both sides",
    body: "Organizers get a calmer planning process; providers get fewer no-shows and faster payment.",
  },
];

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="wrap">
          <span className="eyebrow">About Hetk</span>
          <h1>Event planning, minus the group chat</h1>
          <p className="about-lead">
            Hetk started as a shared frustration: booking a single event meant
            juggling a dozen phone numbers, screenshots, and half-answered
            emails. We're building the version of event planning that should
            have existed the whole time — one place to find, compare, and
            book everyone your event needs.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="wrap about-story-grid">
          <div>
            <span className="eyebrow">The problem</span>
            <h2>Planning shouldn't need a spreadsheet</h2>
            <p>
              Most people plan two or three big events in their life —
              weddings, milestone birthdays, launches — and relearn the same
              painful process every time: cold-emailing venues, chasing
              quotes, and losing track of who said what.
            </p>
          </div>
          <div>
            <span className="eyebrow">The fix</span>
            <h2>One dashboard, every vendor</h2>
            <p>
              Hetk brings venues, photographers, caterers, florists, and more
              onto a single marketplace, with real availability, transparent
              pricing, and built-in messaging — so planning an event feels
              less like a second job.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="wrap">
          <span className="eyebrow">What we stand for</span>
          <h2>How we build Hetk</h2>
          <div className="values-list">
            {values.map((v) => (
              <div className="stub value-item" key={v.label}>
                <div className="stub-time">{v.time}</div>
                <h3>{v.label}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
