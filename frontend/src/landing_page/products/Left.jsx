import React from "react";

function Left({
  imageUrl,
  productName,
  productDescriptipn,
  tryDemo,
  learnMore,
  playStore,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageUrl} alt="" style={{width:"80%"}} />
        </div>
        <div className="col-6 p-3 mt-5 " >
          <h1>{productName}</h1>
          <p>{productDescriptipn}</p>
          <div className="mt-5 p-3">
          <a href={tryDemo} style={{textDecoration:"none",marginRight:"60px"}}>{tryDemo}</a>
          <a href={learnMore} style={{textDecoration:"none"}}>{learnMore}</a>
          </div>
          <a href={playStore} style={{marginRight:"60px"}}>
            <img src="media/images/googlePlayBadge.svg" alt="" />
          </a>
          <a href={appStore}>
            <img src="media/images/appstoreBadge.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Left;
