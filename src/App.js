// import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card
        image="/Card image.jpg"
        name="Abdullah Sawan"
        para="A passionate web developer with expertise in front-end and back-end technologies."
        skills={[
          { skill: "HTML", level: "Advanced", emoji: "" },
          { skill: "CSS", level: "Advanced", emoji: "" },
          { skill: "JavaScript", level: "Intermediate", emoji: "" },
          { skill: "React", level: "Intermediate", emoji: "" },
          { skill: "Node.js", level: "beginner", emoji: "" },
          { skill: "Express", level: "beginner", emoji: "" },
        ]}
      />{" "}
      <Card
        image="/mohamed image.jpg"
        name="Mohamed Ahmed"
        para="A creative full-stack developer who loves building modern, responsive web applications."
        skills={[
          { skill: "HTML", level: "Advanced", emoji: "" },
          { skill: "CSS", level: "Advanced", emoji: "" },
          { skill: "JavaScript", level: "Intermediate", emoji: "" },
          { skill: "React", level: "Intermediate", emoji: "" },
          { skill: "Node.js", level: "beginner", emoji: "" },
          { skill: "MongoDB", level: "beginner", emoji: "" },
        ]}
      />
    </div>
  );
}

export default App;
