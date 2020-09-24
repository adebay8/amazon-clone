import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvide';

function Product({id, title, image, price, rating}) {

    const [dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image, 
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <span role="img" aria-label="rating stars">⭐</span>
                        ))
                    }
            </div>

            </div>
            
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
