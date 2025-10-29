import { Link } from "react-router-dom";

function Header() {
  return (
<nav style={{ padding: "1rem", backgroundColor: "#f8f9fa" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/add">Add Recipe</Link>
    </nav>
  );
}

export default Header;
