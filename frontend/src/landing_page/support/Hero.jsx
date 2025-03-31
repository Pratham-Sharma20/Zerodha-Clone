import React from 'react';

function Hero() {
    return ( 
        <section className="containe-fluid" id="supportHero">
            <div className="p-5 " id="supportWrapper">
                <h4 style={{color:"white"}}>Support portal</h4>
                <a href="" >Track tickets</a>
            </div>
            <div className="row mx-5 ml-5 " id="supportTickets">
                <div className="col-6 p-3">
                    <h2 className='fs-3' style={{color:"white"}}>Search for an answer or browse help topics to create a<br/> ticket</h2>
                    <input type="text" placeholder='Eg: how do i activate F&O , why is my order getting rejected..' /><br/>
                    <a href="" className='fs-5'>Track account opening</a>
                    <a href="" className='fs-5'> Track segment activation</a>
                    <a href="" className='fs-5'> Intraday margins</a><br/>
                    <a href="" className='fs-5 mb-5'>Kite user manual</a>
                </div>
                <div className="col-6 p-3">
                <h2 className='fs-3' style={{color:"white"}}>Featured</h2>
                <ol>
                    <li style={{color:"white"}}><a href="" >MCX Crude option contract expiry - March 2025</a></li>
                    <li style={{color:"white"}}><a href="" >Current Takeovers and Delisting – March 2025</a></li>
                </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;