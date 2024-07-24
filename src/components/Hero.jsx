import photoGrid from "../assets/photo-grid.png";
function Hero() {
  return (
    <div className="hero">
      <div className="photo-grid-container">
        <img src={photoGrid} className="photo-grid" />
      </div>
      <h1 className="title">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export { Hero };
