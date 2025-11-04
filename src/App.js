// import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card
        image="/Card image.jpg"
        name="Abdullah Sawan"
        para="A passionate web developer with expertise in front-end and back-end technologies."
        skills={["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"]}
      />
      <Card
        image="/Card image.jpg"
        name="Abdullah Sawan"
        para="A passionate web developer with expertise in front-end and back-end technologies."
        skills={["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"]}
      />
    </div>
  );
}

export default App;
