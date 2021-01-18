import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating, hideBtn }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-img" src={image} alt=""></img>

            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <FontAwesomeIcon className="star" icon={faStarSolid} />
                        ))}
                </div>
                {!hideBtn && (
                    <button onClick={removeFromBasket}>
                        <span className="checkoutProduct-remove">Remove from basket</span>
                    </button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct
