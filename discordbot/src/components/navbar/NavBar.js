import "./NavBar.css";
import Button from '../buttons/Button';
import logo from '../pictures/discord_logo.png';

function NavBar() {
  return (
    <div>
      <header>
        <nav className="Navbar">
          <div className="pictureName">
            <img src={logo} alt=".." />
          </div>
          <div className="navbarButton">
            <Button />
          </div>
        </nav>
      </header>
      <body></body>
    </div>
  );
}

export default NavBar;
