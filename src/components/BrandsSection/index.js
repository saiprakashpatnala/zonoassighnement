import {Component} from 'react'

import BrandDetails from '../BrandDetails'

import './index.css'

class BrandsSection extends Component {
  state = {brandsArray: []}

  componentDidMount() {
    this.getBrands()
  }

  getBrands = async () => {
    const url =
      'https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const brandsInformationArray = data.map(each => ({
      id: each.id,
      brand: each.brand,
      image: each.icon,
      price: each.price,
      weight: each.weight,
    }))
    this.setState({brandsArray: brandsInformationArray})
  }

  render() {
    const {brandsArray} = this.state
    const key = 'brand'
    const uniqueBrands = [
      ...new Map(brandsArray.map(item => [item[key], item])).values(),
    ]

    const samsungProducts = brandsArray.filter(each => each.brand === 'Samsung')
    const samsungProductsCount = samsungProducts.length
    const sonyProducts = brandsArray.filter(each => each.brand === 'Sony')
    const sonyProductsCount = sonyProducts.length

    return (
      <div className="brands-container">
        <h1 className="brands-heading">Brands</h1>
        <ul className="brands-list">
          {uniqueBrands.map(each => (
            <BrandDetails
              key={each.id}
              details={each}
              samsungProductsCount={samsungProductsCount}
              sonyProductsCount={sonyProductsCount}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default BrandsSection
