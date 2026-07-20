import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar">
      <Link class="logo" to="/" data-discover="true">
        
      </Link>
      <Link to="/">Home</Link>
    </nav>
  );
}
export default Navbar;
