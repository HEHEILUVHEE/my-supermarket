import React from 'react'
import './ExploreMenu.css'
import { item_list } from '../../assets/assets'
// ✅ ตรวจสอบ path ให้ถูกต้อง

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>ของที่ทางเราขายน้ะจ้ะ</h1>
      <p className='explore-item-text'>อยากซื้ออะไรก็ซื้อ</p> {/* แก้ P -> p */}
      <div className="explore-item-list">
        {item_list.map((item, index) => {  /* แก้ menu_list -> item_list */
          return (
            <div onClick={()=>setCategory(prev=>prev===item.item_name?"All":item.item_name)} key={index} className="explore-item">
              <img className={category===item.item_name?"active":""} src={item.item_image} alt="" />
              <p>{item.item_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
