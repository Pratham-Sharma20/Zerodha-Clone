import React from 'react';
export default function Status(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India.</p>
                    <a href="" className='mx-3' style={{textDecoration:"none"}} >See pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center mb-3">
                        <div className="col p-2 border  ">
                            <h1 className='mb-3 fs-2'>₹0</h1>
                            <p>free equity delivery and <br />direct mutual funds</p>
                        </div>
                        <div className="col p-2 border ">
                        <h1 className='mb-3'>₹20</h1>
                        <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}