import "./index.css";
import Button from "../../components/button/button";

const HomePage = () => {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1>
          Bigger than
          <br />a note book
        </h1>
        <div className="explore">
          <p>
            <Button backgroundColor={"black"} text="To Do List" fontWeight={"bold"} /> Be an <strong>organiser.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
