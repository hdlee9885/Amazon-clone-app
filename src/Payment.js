import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
