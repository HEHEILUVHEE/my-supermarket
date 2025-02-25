
import React, { useState } from 'react'
import './Menu.css'

import ItemDisplaysuper from '../../components/ItemDisplay/ItemDisplaysuper';

const Menu = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
    <ItemDisplaysuper category={category}/>
  </div>
  )
}

export default Menu