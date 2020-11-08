import React from 'react'
import Link from 'next/link'
import { Product } from '../../interfaces'
import styles from '../../assets/products/Item.module.css'

type Props = {
  product: Product
}

const Item = ({ product }: Props) => (
  <li className={styles.productItem}>
    <Link href="/products/[id]" as={`/products/${product.id}`}>
      <a>
        <div className={styles.labelAboveImage}>
          <label>Trả góp 0%</label>
        </div>
        <img src={product.thumbnail}/>
        <h3>{product.name}</h3>
        <span className={styles.price}><strong>{product.price}đ</strong></span>
        <figure>
          <span>Màn hình: {product.data.screen}</span>
          <span>Chip: {product.data.cpu}</span>
          <span>RAM: {product.data.ram}, Bộ nhớ trong: {product.data.rom}</span>
          <span>Camera: {product.data.camerus}</span>
          <span>Pin: {product.data.pin}</span>
        </figure>
      </a>
    </Link>
  </li>
)

export default Item
