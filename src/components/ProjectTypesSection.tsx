const PROJECT_TYPES = [
  {
    title: "Recurring Cleaning",
    text: "Weekly, biweekly, or monthly visits so your home stays consistently clean.",
  },
  {
    title: "Deep Cleaning",
    text: "A top-to-bottom clean for baseboards, grout, appliances, and everything in between.",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    text: "A thorough clean before keys change hands, for tenants, owners, and landlords.",
  },
  {
    title: "One-Time Cleaning",
    text: "Need the house ready for guests or just a fresh start? Book a single visit, no commitment.",
  },
];

export function ProjectTypesSection() {
  return (
    <section className="project-types section" id="project-types">
      <div className="container">
        <span className="eyebrow">OUR SERVICES</span>
        <h2>Cleaning Services for Every Home</h2>
        <p className="section-lede">
          From a one-time deep clean to a standing weekly visit, we&rsquo;ll recommend the right
          service for your home.
        </p>
        <ul className="pt-grid">
          {PROJECT_TYPES.map((pt) => (
            <li className="pt-card" key={pt.title}>
              <div className="pt-card-body">
                <h3>{pt.title}</h3>
                <p>{pt.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
