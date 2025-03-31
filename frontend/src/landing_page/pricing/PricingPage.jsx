import React from 'react';
import Brokerage from './Brokerage';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>  <Pricing/>
            <OpenAccount/>
            <Brokerage/>
            
        </>
     );
}

export default PricingPage;