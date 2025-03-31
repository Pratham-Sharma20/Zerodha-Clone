import React from 'react';
export default function Stats(){
    return(
        <div className="container">
            <div className="row p-3">
                <div className="col-6 p-5">
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>that's why 1.3+ crore customers trust zerodha</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>no spam or gimmicks or annoying notifications</p>
                    <h2 className='fs-4'>The zerodha universe</h2>
                    <p className='text-muted'>Not just an app but a whole ecosystem</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>We dont just facilitate transcations,but actively help you do better with your money</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" alt="" style={{width:"70%"}} />
                    <div className='text-center'>
                        <a href="" className='mx-3' style={{textDecoration:"none"}} >Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try kite demo</a>
                        </div>
                    
                </div>
            </div>
        </div>    
    );
}