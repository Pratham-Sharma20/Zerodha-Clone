import React from 'react';
export default function Education(){
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="" style={{width:"90%"}} />
                </div>
                
                <div className="col-6">
                <h1 className='fs-2'>free and open markete education</h1>
                    <p>Varsity, the largest online stock market education book in the world covers everything related to trading.</p>
                    <a href="" className='' style={{textDecoration:"none"}} >Versity<i class="fa-solid fa-arrow-right"></i></a>
                    <p>TradingQ&A, the most active trading and investing community in india for all your market related queries</p>
                    <a href="" className='' style={{textDecoration:"none"}} >TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );  
}