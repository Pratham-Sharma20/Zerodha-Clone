import React from "react";
import Hero from "./Hero";
import Left from "./Left";
import Right from "./Right";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductsPage() {
  return (
    <>
      <Hero />
      <Left
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDescriptipn="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo →"
        learnMore="Learn more →"
        playStore=""
        appStore=""
      />
      <Right 
        imageUrl="media/images/console.png"
        productName="Console"
        productDescriptipn="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more →"
      />
      <Left
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescriptipn="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin →"
        learnMore=""
        playStore=""
        appStore=""
      />
      <Right
        imageUrl="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescriptipn="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="Kite connect →"
       />
      <Left
        imageUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDescriptipn="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        playStore=""
        appStore=""
      />
      <h3 className="text-center mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h3>
      <br />
      <Universe />
    </>
  );
}

export default ProductsPage;
