import "./Team.css";

const team = [
  { name: "Name Surname", role: "role", initials: "NM" },
  { name: "Name Surname", role: "role", initials: "NM" },
  { name: "Name Surname", role: "role", initials: "NM" },
  { name: "Name Surname", role: "role", initials: "NM" },
  { name: "Name Surname", role: "role", initials: "NM" },
  { name: "Name Surname", role: "role", initials: "NM" },
];

function Team() {
  return (
    <section className="team-section">
      <div className="wrap">
        <span className="eyebrow">The People Behind HETK</span>
        <h1>The people planning the planner</h1>
        <p className="team-lead">
          We're a young, ambitious team with a shared passion for creativity, technology, and bringing people together.
        </p>
        <p className="team-lead">
          We started HETK because we believe great ideas shouldn't get lost in complicated planning. We're building the kind of platform we'd love to use ourselves — intuitive, innovative, and designed around real people's needs.
        </p>

        <div className="team-grid">
          {team.map((member) => (
            <div className="stub team-card" key={member.name}>
              <div className="team-avatar">{member.initials}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
