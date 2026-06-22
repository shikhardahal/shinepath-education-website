import heroImg from "../assets/hero.jpg";

const Home = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/ShinePath_Education_Poster.png"
            alt="ShinePath Education"
            className="hero-banner"
          />
        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="services">

        <h2>Our Preparation Programs</h2>

        <div className="service-grid">

          <div className="card">
            <h3>IT Entrance Prep</h3>
            <p>BSc.CSIT | BSc.IT | BIT | BCA | BE Computer</p>
          </div>

          <div className="card">
            <h3>CMAT Entrance Prep</h3>
            <p>CMAT | KUUMAT | PUUMAT</p>
          </div>

          <div className="card">
            <h3>Language Test</h3>
            <p>IELTS | PTE | JLPT</p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div>👨‍🏫 Expert Mentors</div>
        <div>🎯 Proven Strategies</div>
        <div>📘 Personalized Guidance</div>
        <div>📈 Success Assured</div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip">

        <div>
          📞 9816358198
        </div>

        <div>
          📍 Bagbazar-28, Kathmandu
        </div>

        <div>
          🔵 facebook.com/shinepathed
        </div>

      </section>

    </div>
  );
};

export default Home;