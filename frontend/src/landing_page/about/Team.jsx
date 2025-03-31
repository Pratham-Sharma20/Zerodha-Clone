import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row mt-5 mr-5 p-6 border-top "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 fs-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "45%" }}
          />
          <h4>Nithn Kamath</h4>
          <p className="text-muted">Founder & CEO</p>
        </div>
        <div className="col-6 p-5" >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen</p>
          <p>
            Connect on
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            /
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQ&A
            </a>
            /
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
