import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5 text-muted">
        <h1>Zerodha Products</h1>
        <h3>Sleek, modern, and intuitive trading platforms</h3>
        <p>
          Check out our{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
