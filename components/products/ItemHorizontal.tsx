import React from 'react'
import Link from 'next/link';
import styles from '../../assets/products/ItemHorizontal.module.css'
import { Product } from '../../interfaces'

type Props = {
    product: Product
}

const ItemHorizontal = ({product} : Props) => (
    <li className={styles.item}>
        <Link href="/products/[id]" as={`/products/${product.id}`}>
            <a className={styles.productItemHorizontal}>
                <img src={product.thumbnail} width="150px" height="150px" />
                <div>
                    <div className={styles.labelAboveImage}>
                    <label>Trả góp 0%</label>
                    </div>
                    <h3>{product.name}</h3>
                    <span className={styles.price}><strong>{product.price}đ</strong></span>
                    <figure>
                        <span>Màn hình: {product.data.screen}</span>
                        <span>Chip:{product.data.cpu}</span>
                    </figure>
                </div>
            </a>
        </Link>
    </li>
)

export default ItemHorizontal