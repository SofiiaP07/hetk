import "./Home.css";

const steps = [
  {
    label: "IDEATE",
    title: "Discover",
    body: "Browse vetted venues, photographers, caterers, and florists filtered by date, budget, and city.",
  },
  {
    label: "CREATE",
    title: "Book",
    body: "Compare quotes side by side, message providers directly, and lock in your date with one click.",
  },
  {
    label: "CELEBRATE",
    title: "Celebrate",
    body: "Run the whole event from a single dashboard — timeline, payments, and every vendor thread in one place.",
  },
];

function HowItWorks() {
  return (
    <section className="schedule-section">
      <div className="wrap">
        <span className="eyebrow">Run of show</span>
        <h1>How it works?</h1>
        <div className="schedule">
          {steps.map((step) => (
            <div className="stub schedule-item" key={step.label}>
              <div className="stub-time">{step.label}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;