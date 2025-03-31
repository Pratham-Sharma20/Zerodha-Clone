import React from 'react';
function Pricing() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 borderr-bottom text-center">
                <h1 className='fs-1'>Charges</h1>
                <h4 className='text-muted p-3 mb-5'>List of all charges and taxes</h4>
                <div className="col-4 mt-5 p-3">
                    <img src="media/images/pricing0.svg" alt="" style={{width:"70%"}} />
                    <h2>Free equity delivery</h2>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 mt-5 p-3">
                    <img src="media/images/intradayTrades.svg" alt="" style={{width:"70%"}} />
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 mt-5 p-3">
                    <img src="media/images/pricing0.svg" alt="" style={{width:"70%"}} />
                    <h2>Free direct MF</h2>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Pricing;