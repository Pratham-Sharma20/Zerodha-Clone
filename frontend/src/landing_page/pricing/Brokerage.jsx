import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row ">
        <h2 className="text-center mb-5">
          <a href="" style={{ textDecoration: "none" }}>
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </h2>
        <div className="col-6">
          <h2>Charges explained</h2>
          <h4>Securities/Commodities transaction tax</h4>
          <p className="text-small">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="text-small">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h4>Transaction/Turnover Charges</h4>
          <p className="text-small">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions. BSE has revised transaction charges in XC, XD, XT, Z
            and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD
            groups have been merged into a new group X w.e.f 01.12.2017) BSE has
            revised transaction charges in SS and ST groups to ₹1,00,000 per
            crore of gross turnover. BSE has revised transaction charges for
            group A, B and other non exclusive scrips (non-exclusive scrips from
            group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat
            rate basis w.e.f. December 1, 2022. BSE has revised transaction
            charges in M, MT, TS and MS groups to ₹275 per crore of gross
            turnover.
          </p>
        </div>
        <div className="col-6">
          <h4>GST</h4>
          <p className="text-small">
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h4>SEBI Charges</h4>
          <p className="text-small">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h4>DP (Depository participant) charges</h4>
          <p>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity. Female demat account holders (as first
            holder) will enjoy a discount of ₹0.25 per transaction on the CDSL
            fee. Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h4>Pledging charges</h4>
          <p className="text-small">₹30 + GST per pledge request per ISIN.</p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
