import React from 'react';
export default function Awards(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2+ million zerodha clients contribute to overall 15% of all the trade volumes in India by trading in :</p>
                    <div className="row">
                        <div className="col-6">
                        <ul>
                        <li>
                            <p>Futures and options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stock & IPO's</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media\images\pressLogos.png" alt="" style={{width:"80%"}} />
                </div>
            </div>
        </div>
    );
}