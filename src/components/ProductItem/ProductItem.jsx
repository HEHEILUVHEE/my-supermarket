import React, { useContext } from 'react'
import './ProductItem.css'
import { FaBucket } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { StoreContext } from '../../context/StoreContext';



const ProductItem = ({ id, name, price, description, image }) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)


    return (

        <div className='product-item'>
            <div className="product-item-img-container">
                <img className='product-item-image' src={image} alt="" />
                {!cartItems[id]
                    ? <FaBucket className='add' onClick={() => addToCart(id)} />
                    : <div className='product-item-couter'>
                        
                        
                        <IoMdAdd onClick={() => addToCart(id)} />
                        <p>{cartItems[id]}</p>
                        <IoIosRemove onClick={() => removeFromCart(id)} />


                    </div>
                }
            </div>
            <div className="product-item-info">
                <div className="product-item-name-rating">
                    <p> {name} </p>


                </div>
                <p className="product-item-desc"> {description} </p>
                <p className="product-item-price">${price} </p>
            </div>

        </div>
    )
}

export default ProductItem