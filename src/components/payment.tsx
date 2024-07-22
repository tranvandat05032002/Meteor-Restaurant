'use client'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from 'react';
import CheckOutPage from './check-out';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
import envClientConfig from "@/configClient";

const Payment = ({ product }: { product: { name: string, amount: number } }) => {
    const stripePromise = loadStripe(envClientConfig?.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
    return (
        <Elements
            stripe={stripePromise}
            options={{
                mode: 'payment',
                amount: convertToSubcurrency(product.amount),
                currency: 'usd'
            }}
        >
            <CheckOutPage amount={product.amount} />
        </Elements>
    );
};

export default Payment;