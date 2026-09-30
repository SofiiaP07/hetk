import "./About.css";

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="wrap">
          <span className="eyebrow">About Hetk</span>
          <h1>What if i tell you, that you can organise your special day in just a few clicks?</h1>
          <h2>Crazy, right?</h2>
          <p className="about-lead">
            HETK app was founded in Estonia, from a simple idea: bringing everything you need to plan an event into one place. Whether it's an intimate birthday celebration, a dream wedding, a corporate gathering, or a spontaneous party with friends, we're here to make the process easier, smarter, and more enjoyable.
          </p>
          <p className="about-lead">
            Our platform connects people with venues, services, and event professionals, helping turn ideas into unforgettable experiences without the endless searching, complicated planning, or unnecessary stress.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="wrap about-story-grid">
          <div>
            <h2>Our Mission</h2>
            <p>
              To make event planning simple, accessible, and enjoyable for everyone. By combining innovative technology with a human-centered approach, we aim to give people more time to focus on what truly matters — creating memories and enjoying moments together.
            </p>
          </div>
          <div>
            <h2>Our vision</h2>
            <p>
              We envision a world where organizing an event is as exciting as attending one. Starting in Estonia, our ambition is to grow into an international platform that brings people, places, and experiences together.
            </p>
          </div>
        </div>
      </section>

      <section className="about-hero">
        <div className="wrap about-hero-grid">
          <div className="about-hero-text">
            <h2>Why Hetk?</h2>
            <h3>In Estonian "hetk" means "moment"</h3>
            <p className="about-lead">
              And that's exactly what we're all about. The little moments, the big celebrations, the spontaneous gatherings, and the once-in-a-lifetime experiences.
            </p>
            <p className="about-lead">
              Because at the end of the day, it's not just about planning an event. It's about making moments that matter.
            </p>
            <h3>HETK — Less planning. More living.</h3>
          </div>
          <div className="about-hero-image">
            <img src="/hetk.img.png" alt="Hetk Preview" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;