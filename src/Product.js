import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg} from '@fortawesome/free-regular-svg-icons'

function Product() {
    return (
        <div className="product">
            <div className="product-info">
                <p>The lean startup</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product-rating">
                    <FontAwesomeIcon className="star" icon={faStarSolid} />
                    <FontAwesomeIcon className="star" icon={faStarSolid} />
                    <FontAwesomeIcon className="star" icon={faStarSolid} />
                    <FontAwesomeIcon className="star" icon={faStarSolid} />
                    <FontAwesomeIcon className="star" icon={faStarReg} />
                </div>

                <img />

                <button>Add to basket</button>
            </div>
        </div>
    )
}

export default Product
