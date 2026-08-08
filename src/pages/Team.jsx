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
        <span className="eyebrow">Behind Hetk</span>
        <h1>The people planning the planner</h1>
        <p className="team-lead">
          A small, hands-on team that talks to organizers and vendors every
          week — the roadmap comes from those conversations.
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
