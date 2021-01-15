import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg} from '@fortawesome/free-regular-svg-icons'

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <FontAwesomeIcon className="star" icon={faStarSolid} />
                    ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button>Add to basket</button>
        </div>
    )
}

export default Product
