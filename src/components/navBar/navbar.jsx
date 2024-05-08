import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="og">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/todos">To do List</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
