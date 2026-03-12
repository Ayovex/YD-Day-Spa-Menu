import "./styles.css";

const facials = [
  ["White Wine Peel", "$145 | 50 min"],
  ["Glow Hydro Facial", "$175 | 70 min"],
  ["Ultimate Facial", "$200 | 80 min"],
  ["Collagen Boosting", "$245"],
  ["Firm Lift", "$285"],
];

const massages = [
  ["Swedish Massage", ["$99 | 60 min", "$139 | 90 min", "$179 | 120 min"]],
  ["Deep Tissue Massage", ["$109 | 60 min", "$159 | 90 min", "$189 | 120 min"]],
  ["Four Hands Massage", ["$189 | 60 min", "$269 | 90 min", "$349 | 120 min"]],
  ["Lomi Lomi / Sports / Thai", ["$109 | 60 min", "$149 | 90 min", "$189 | 120 min"]],
  ["Lymphatic Drainage", ["$119 | 60 min", "$169 | 90 min"]],
  ["Prenatal Massage", ["$119 | 60 min", "$169 | 90 min"]],
];

const beautySpa = [
  ["Head Therapy", ["$119 | 60 min"]],
  ["Body Scrub + Vichy Shower", ["$99 | 30 min", "$169 | 60 min"]],
];

const addons = [
  ["Hot Stone", "$10"],
  ["CBD Oil", "$15"],
  ["Herb Oil", "$15"],
  ["Essential Oil", "$10"],
  ["Table Shower", "$20"],
  ["Cupping", "$20"],
  ["Eye Spa Mask", "$10"],
  ["Eye Spa Therapy", "$20"],
  ["iRobot Massage", "$10"],
];

const gallery = [
  {
    title: "Skincare Rituals",
    note: "Refined facials and glow treatments",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Massage Escape",
    note: "Calm bodywork in a luxury setting",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Wellness Lounge",
    note: "Soft details, warm light, serene energy",
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function App() {
  return (
    <main className="screen">
      <header className="header">
        <p className="eyebrow">Wellness Menu</p>
        <h1>YD DAY SPA</h1>
      </header>

      <p className="subtitle">Luxury Wellness Experience</p>

      <section className="gallery" aria-label="Spa atmosphere photos">
        {gallery.map((item) => (
          <article
            className="photo-card"
            key={item.title}
            style={{ "--image": `url('${item.image}')` }}
          >
            <div className="photo-copy">
              <p className="photo-label">{item.title}</p>
              <p className="photo-note">{item.note}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="columns" aria-label="Spa services">
        <article className="card">
          <h2>Facials</h2>
          <div className="section-rule" />
          <div className="service-list">
            {facials.map(([title, meta]) => (
              <div className="service-item" key={title}>
                <div className="service-title">{title}</div>
                <div className="service-meta">{meta}</div>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>Massage</h2>
          <div className="section-rule" />
          <div className="massage-groups">
            {massages.map(([title, rates]) => (
              <div className="massage-group" key={title}>
                <div className="massage-title">{title}</div>
                <div className="massage-rates">
                  {rates.map((rate) => (
                    <div className="massage-rate" key={rate}>
                      {rate}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>Beauty &amp; Spa</h2>
          <div className="section-rule" />
          <div className="service-list">
            {beautySpa.map(([title, metaLines]) => (
              <div className="service-item" key={title}>
                <div className="service-title">{title}</div>
                {metaLines.map((line) => (
                  <div className="service-meta" key={line}>
                    {line}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="addons" aria-label="Add-ons">
        <div className="addons-header">
          <h3>Add Ons</h3>
        </div>
        <div className="addons-grid">
          {addons.map(([label, price]) => (
            <div className="addon-item" key={label}>
              <span>{label}</span>
              <span>{price}</span>
            </div>
          ))}
        </div>
      </section>

      <aside className="banner">
        Members receive <strong>15% OFF</strong> all services and free add-ons depending on
        membership tier.
      </aside>
    </main>
  );
}
