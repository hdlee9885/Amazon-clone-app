import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
    return (
        <div className="order">
            <h2>Ordered on</h2>
            <p>{moment.unix(order.data.created).format('MM/DD/YYYY, h:mma')}</p>
            {/* <p className="order-id">
                <small>
                    {order.id}
                </small>
            </p> */}
            {order.data.basket?.map(order => (
                <CheckoutProduct 
                    id = {order.id}
                    title = {order.title}
                    image = {order.image}
                    price = {order.price}
                    rating = {order.rating}
                    hideBtn = {true}
                />
            ))}
            <CurrencyFormat 
                renderText={(value) => (
                    <h3 className="order-total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
