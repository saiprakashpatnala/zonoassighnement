import {Link} from 'react-router-dom'

import './index.css'

const BrandDetails = props => {
  const {details, samsungProductsCount, sonyProductsCount} = props
  const {brand} = details
  const samsungImage =
    'https://res.cloudinary.com/drwe3lgdh/image/upload/v1668215261/samsung-img_g1ejbt.png'
  const sonyImage =
    'https://res.cloudinary.com/drwe3lgdh/image/upload/v1668215349/sony-img_w5ufiw.png'

  const Image = brand === 'Samsung' ? samsungImage : sonyImage

  const productsCount =
    brand === 'Samsung' ? samsungProductsCount : sonyProductsCount

  return (
    <li className="brands-info">
      <Link to={`/${brand}`} className="link-element">
        <div>
          <img src={Image} alt="icon" className="brand-image" />
        </div>
        <div>
          <h1 className="brand-name">{brand}</h1>
          <p className="products-count">Products Count:{productsCount}</p>
        </div>
      </Link>

      <hr />
    </li>
  )
}

export default BrandDetails
