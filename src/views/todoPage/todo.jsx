import "./todo.css";
import Button from "../../components/button/button";

const todoPage = () => {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1>
          Bigger than
          <br />a note book
        </h1>
        <div className="explore">
          <p>
            <Button backgroundColor={"black"} text="Explore" fontWeight={"bold"} /> Be an <strong>organiser.</strong>
          </p>
        </div>
      </div>
    </div>
  )
};

export default todoPage;
