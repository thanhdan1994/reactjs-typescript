import * as React from 'react'

import { Product } from '../../interfaces'

type DetailProps = {
  item: Product
}

const ListDetail = ({ item: product }: DetailProps) => (
  <div>
    <h1>Detail for {product.name}</h1>
    <p>ID: {product.id}</p>
  </div>
)

export default ListDetail
