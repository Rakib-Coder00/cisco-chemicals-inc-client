import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import AtomSpinner from '../Shared/AtomSpinner/AtomSpinner';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';


const stripePromise = loadStripe('pk_test_51L1Xa9K72xpPBPaXfbH2ZHygNVJ2rb1EYtpADqsst4Ss4p5uO3x8XDfGSk6MfmI2KRgMbxoG39ixrZaSLkfYW3MT00GwvPNCNU');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    // const url = `http://localhost:5000/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <AtomSpinner />
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {appointment.user}</p>
                    <h2 class="card-title">Pay for {appointment.product
                    }</h2>
                    {/* <p>Your Appointment : {appointment.date} at {appointment.slot}</p> */}
                    <p>Please Pay : ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <PaymentForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;