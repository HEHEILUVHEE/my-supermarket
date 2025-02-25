import React, { useContext } from 'react'
import './ItemDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem';


const ItemDisplaysuper = ({category} ) => {
    
    const {ItemSuper_list} = useContext(StoreContext)
    
    return (
    <div className='item-display' id='item-display'>
        <h2>ของดีๆๆๆทั้งนั้น</h2>
      <div className="item-display-list">
        {ItemSuper_list.map((item,index)=>{
          
            return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        })}



      </div>


    </div>
  )
}

export default ItemDisplaysuper
