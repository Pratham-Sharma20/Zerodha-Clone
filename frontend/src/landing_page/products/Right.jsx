import React from "react";

function Right({ imageUrl, productName, productDescriptipn, learnMore }) {
  return (
    <div className="container">
      <div className="row mt-5 p-5">
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p className="mb-5">{productDescriptipn}</p>
          <a href="" style={{textDecoration:"none"}}>{learnMore}</a>
        </div>
        <div className="col-6">
            <img src={imageUrl} alt="" style={{width:"80%"}} />
        </div>
      </div>
    </div>
  );
}

export default Right;
