import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { calBasketTotal } from './reducer';
import axios from 'axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const element = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits
                url: `/payments/create?total=${calBasketTotal(basket) * 100}`,
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handlePayment = (e) => {
        e.preventDefault();
        setProcessing(true);
        // const payload = await stripe 
    }

    const handlePaymentChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment-container">
                <h1>
                    Checkout (
                        <Link to="/cart">{
                            basket?.length} items
                        </Link>)
                </h1>
                {/* delivery address */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment-address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* review items */}
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment-items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* payment method */}

                <div className='payment-section'>
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-method">
                        {/* Stripe magic will go */}
                        <form onSubmit={handlePayment}>
                            <CardElement onChange={handlePaymentChange}/>

                            <div className="payment-price-container">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={calBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button className="payment-purchase-btn" disabled={processing || disabled || succeeded }>
                                    <span>
                                        {processing ? <p>Processing</p> : "Purchase now"}
                                    </span>
                                </button>
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
