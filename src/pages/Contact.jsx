import { useState } from "react";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  questionType: "General Inquiry",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to Supabase, e.g.
    // await supabase.from("contact_requests").insert([form]);
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm(initialForm);
  }

  return (
    <section className="contact-section">
      <div className="wrap contact-grid">
        <div>
          <span className="eyebrow">Get in touch</span>
          <h1>Tell us about your event</h1>
          <p className="contact-lead">
            Share a few details and we'll point you toward the right venues
            and vendors — or answer any question about how Hetk works.
          </p>

          {sent && (
            <p className="contact-success">
              Thanks — your message is in. We'll be in touch shortly.
            </p>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jordan Blake"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jordan@email.com"
                required
              />
            </label>

            <label>
              Question type
              <select name="questionType" value={form.questionType} onChange={handleChange}>
                <option value="">Select a question type</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing & Payment</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us the date, city, and what you're planning..."
                required
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>

        <div className="stub contact-card">
          <div className="stub-time">ADMIT ONE</div>
          <h3>Hetk HQ</h3>
          <p>Remote-first, booking events everywhere.</p>
          <hr />
          <p>
            <strong>Email</strong>
            <br />
            hello@hetk.app
          </p>
          <p>
            <strong>For vendors</strong>
            <br />
            partners@hetk.app
          </p>
          <p>
            <strong>Response time</strong>
            <br />
            Within one business day
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
