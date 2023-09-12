import { Link } from "react-router-dom";
import '../stylesheets/navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={'./Cart'}>Cart</Link>
    </nav>
  );
}
