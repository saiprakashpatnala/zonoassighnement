import {Component} from 'react'

import CartContext from '../../Context/CartContext'

import Cart from '../Cart'

import './index.css'

class SonyProducts extends Component {
  state = {array: [], quantity: 1}

  componentDidMount() {
    this.getSonyProducts()
  }

  getSonyProducts = async () => {
    const url =
      'https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const brandsInformationArray = data.map(each => ({
      id: each.id,
      name: each.name,
      brand: each.brand,
      image: each.icon,
      price: each.price,
      weight: each.weight,
    }))
    this.setState({array: brandsInformationArray})
  }

  onDecrementQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  finalRender = () => (
    <CartContext.Consumer>
      {value => {
        const {array, quantity} = this.state
        const sonyBrandedProducts = array.filter(each => each.brand === 'Sony')
        const {addCartItem} = value
        const onClickAddItem = () => {
          addCartItem(...sonyBrandedProducts, quantity)
        }
        console.log(quantity)
        return (
          <div className="products-and-cart-container">
            <ul className="products-list">
              {sonyBrandedProducts.map(each => (
                <li key={each.id}>
                  <div className="products-info">
                    <div className="image-container">
                      <img src={each.image} alt="productImage" />
                      <div>
                        <h1 className="product-name">{each.name}</h1>
                        <p className="price">Price: {each.weight}</p>
                      </div>
                    </div>
                    <div className="add-to-cart-container">
                      <div className="button-container">
                        <button
                          type="button"
                          className="button"
                          onClick={this.onDecrementQuantity}
                        >
                          -
                        </button>
                        <p className="quantity">{quantity}</p>
                        <button
                          type="button"
                          className="button"
                          onClick={this.onIncrementQuantity}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="cart-button"
                        onClick={onClickAddItem}
                        type="button"
                      >
                        cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <Cart />
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return (
      <div>
        <h1 className="heading">Products Of Sony</h1>
        {this.finalRender()}
      </div>
    )
  }
}

export default SonyProducts
