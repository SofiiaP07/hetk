import { Link } from "react-router-dom";
import "./Home.css";

const schedule = [
  {
    time: "09:00",
    label: "Discover",
    body: "Browse vetted venues, photographers, caterers, and florists filtered by date, budget, and city.",
  },
  {
    time: "13:00",
    label: "Book",
    body: "Compare quotes side by side, message providers directly, and lock in your date with one click.",
  },
  {
    time: "18:00",
    label: "Celebrate",
    body: "Run the whole event from a single dashboard — timeline, payments, and every vendor thread in one place.",
  },
];

const categories = [
  { name: "Venues", detail: "Barns, ballrooms, rooftops & gardens" },
  { name: "Photography", detail: "Editorial, documentary & film" },
  { name: "Catering", detail: "Plated, buffet & family-style" },
  { name: "Florists", detail: "Bouquets, arches & installations" },
  { name: "Music & DJs", detail: "Live sets, bands & full production" },
  { name: "Planners", detail: "Day-of coordination to full-service" },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <span className="eyebrow">● Now booking 2026 – 2027</span>
          <h1 className="hero-title">
            Every vendor.
            <br />
            One invitation.
          </h1>
          <p className="hero-sub">
            Hetk is the marketplace where you find, compare, and book every
            service your event needs — venues, photographers, caterers, and
            more — without the group chats and scattered spreadsheets.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Start planning
            </Link>
            <a href="#how-it-works" className="btn btn-ghost">
              See how it works
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="schedule-section">
        <div className="wrap">
          <span className="eyebrow">Run of show</span>
          <h2>How a booking day runs</h2>
          <div className="schedule">
            {schedule.map((item) => (
              <div className="stub schedule-item" key={item.label}>
                <div className="stub-time">{item.time}</div>
                <h3>{item.label}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="wrap">
          <span className="eyebrow">What you can book</span>
          <h2>Services on the guest list</h2>
          <div className="categories-grid">
            {categories.map((cat) => (
              <div className="stub category-card" key={cat.name}>
                <h3>{cat.name}</h3>
                <p>{cat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap cta-inner">
          <h2>Ready to send the invite to Hetk?</h2>
          <p>Tell us about your event and we'll help you get started.</p>
          <Link to="/contact" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
