import { useState } from "react";
import Contact from "./Contact.jsx";
import "./Help.css";

const faqs = [
  {
    question: "What is Hetk?",
    answer:
      "Hetk is an event planning platform that brings venues, services, and event professionals into one place, so you can plan a birthday, wedding, or corporate event without endless searching.",
  },
  {
    question: "How does the booking process work?",
    answer:
      "Discover venues and providers filtered by date, budget, and city. Compare quotes and message providers directly. Then book and manage everything from one dashboard.",
  },
  {
    question: "Who can use Hetk?",
    answer:
      "Anyone planning an event, from a small birthday to a large corporate gathering, as well as venues and service providers who want to be booked.",
  },
  {
    question: "What types of services are offered?",
    answer:
      "Venues, photographers, caterers, florists, music and DJs, and event planners, with more categories coming.",
  },
  {
    question: "What does “Hetk” mean?",
    answer:
      "In Estonian, “hetk” means “moment”. Our goal is less planning and more living.",
  },
  {
    question: "I can't find my answer. How do I reach you?",
    answer:
      "Use the contact form at the bottom of this page and we'll get back to you within one business day.",
  },
];

function Help() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const results = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(q) ||
      f.answer.toLowerCase().includes(q)
  );

  return (
    <>
      <section className="help-hero">
        <div className="wrap">
          <span className="eyebrow">Help Center</span>
          <h1>How can we help?</h1>
          <input
            className="help-search"
            type="search"
            placeholder="Search the questions below"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search frequently asked questions"
          />
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap faq-wrap">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-lead">
            Have questions? We've got answers to help you every step of the way.
          </p>

          <div className="faq-list">
            {results.map((f) => (
              <details className="faq-item" key={f.question}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}

            {results.length === 0 && (
              <p className="faq-empty">
                No answers match “{query}”. Send us a message below and we'll help.
              </p>
            )}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default Help;