import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="place-order">
      <form className="place-order-form">
        <div className="place-order-left">
          <p className="title">ที่อยู่ในการจัดส่ง</p>

          <div className="multi-fields">
            <label htmlFor="full-name">ชื่อผู้รับ</label>
            <input type="text" id="full-name" placeholder="กรุณากรอกชื่อผู้รับ" required />
          </div>

          <div className="multi-fields">
            <label htmlFor="address">ที่อยู่</label>
            <input type="text" id="address" placeholder="กรุณากรอกที่อยู่" required />
          </div>

          <div className="multi-fields">
            <label htmlFor="city">เมือง</label>
            <input type="text" id="city" placeholder="กรุณากรอกเมือง" required />
          </div>

          <div className="multi-fields">
            <label htmlFor="postal-code">รหัสไปรษณีย์</label>
            <input type="text" id="postal-code" placeholder="กรุณากรอกรหัสไปรษณีย์" required />
          </div>

          <div className="multi-fields">
            <label htmlFor="phone">เบอร์โทรศัพท์</label>
            <input type="text" id="phone" placeholder="กรุณากรอกเบอร์โทรศัพท์" required />
          </div>

          <div className="multi-fields">
            <label htmlFor="email">อีเมล</label>
            <input type="email" id="email" placeholder="กรุณากรอกอีเมล" required />
          </div>
          <div className='place-order-rigth'>
            <div className="cart-totals">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-detailss">
                  <p>Subtotal</p>
                  <p>฿{getTotalCartAmount()}</p>
                </div>
                <div className="cart-total-detailss">
                  <p>Delivery Not free</p>
                  <p>฿{2}</p>
                </div>
                <div className="cart-total-detailss">
                  <b>Total</b>
                  <b>฿{getTotalCartAmount() + 2} </b>
                </div>

              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
