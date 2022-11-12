import CartContext from '../../Context/CartContext'

import EmptyCartView from '../EmptyCart'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <>
          <div className="cart-container">
            {cartList.length === 0 ? (
              <EmptyCartView />
            ) : (
              <div>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
