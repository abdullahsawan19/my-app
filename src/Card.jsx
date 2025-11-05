const Card = (props) => {
  const cardStyle = {
    width: "260px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    marginBottom: "10px",
  };

  const nameStyle = {
    fontSize: "1.3rem",
    color: "#333",
    margin: "8px 0",
  };

  const paraStyle = {
    fontSize: "0.9rem",
    color: "#555",
    marginBottom: "12px",
  };

  const skillsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "6px",
    marginBottom: "10px",
  };

  const skillStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "5px 10px",
    borderRadius: "8px",
    fontSize: "0.8rem",
  };

  const totalStyle = {
    fontSize: "0.85rem",
    color: "#777",
  };

  return (
    <div style={cardStyle}>
      <img src={props.image} alt="Card" style={imageStyle} />
      <h2 style={nameStyle}>{props.name}</h2>
      <p style={paraStyle}>{props.para}</p>

      <div style={skillsContainer}>
        {props.skills.map((skill, index) => (
          <span key={index} style={skillStyle}>
            {skill.skill}
            {skill.level ? ` (${skill.level})` : ""}
            {skill.level === "beginner" ? (skill.emoji = " 🐣") : ""}
            {skill.level === "Intermediate" ? (skill.emoji = " 👍") : ""}
            {skill.level === "Advanced" ? (skill.emoji = " 👌") : ""}
          </span>
        ))}
      </div>

      <div style={totalStyle}>{props.skills.length} Skills Listed</div>
    </div>
  );
};

export default Card;
