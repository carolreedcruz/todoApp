import "./about.css";
import Button from "../../components/button/button";

const AboutPage = () => {
  return (
    <div className="aboutUs">
      <div className="about-tile">
        <h2>Embrace simplicity and enhance your productivity with TaskTamer</h2>
        <div className="aboutUs-text">
          <p>
            Our mission is simple: to help you stay organized and focused.
            Whether you're managing daily tasks, planning personal projects, or
            tracking professional goals, <strong>TaskTamer</strong> is here to
            simplify your life.
          </p>
          <p>
            <Button
              backgroundColor={"black"}
              text="To Do List"
              fontWeight={"bold"}
              onClick={() => (window.location.href = "/todo")}
            />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
