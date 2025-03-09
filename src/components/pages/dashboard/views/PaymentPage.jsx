import React from 'react';
import { pay } from '../../../../api/payment';
export default function PaymentPage(){
    const handlePayment = async () => {
        try{
            const data = {
                'amount' : 100,
            };
            const response = await pay(data);
            window.location.href = response.url;
        }
        catch(err){
            console.log('erreur ', err);
        }
    }

    return (
        <>
            <button onClick={handlePayment}>Payer</button>;
        </>
    );
}