import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg} from '@fortawesome/free-regular-svg-icons'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }
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

            <button onClick={addToBasket}>
                <span className="add-basket">Add to basket</span>
            </button>
        </div>
    )
}

export default Product
