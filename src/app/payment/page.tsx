import React from 'react';
import envClientConfig from '@/configClient';
import Payment from '@/components/payment';
const PaymentPage = () => {
    const product = {
        name: "Pizza",
        amount: 0.5
    }
    return (
        <main className="max-w-6xl mx-auto p-10  text-center border m-10 rounded-md">
            <div className="bg-gradient-to-tr p-4 rounded-md mb-2 text-white from-blue-500 to-purple-500">
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold mb-2">{product.name}</h1>
                    <h2 className="text-2xl">
                        has requested
                        <span className="font-bold"> ${product.amount}</span>
                    </h2>
                </div>
            </div>
            <Payment product={product} />
        </main>
    );
};

export default PaymentPage;