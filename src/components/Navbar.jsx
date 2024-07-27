import airBNBLogo from "../../assets/airbnb-logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <img src={airBNBLogo} className="airbnb-logo" />
    </nav>
  );
}

export { Navbar };
