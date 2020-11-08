import React from 'react'
import styles from '../../assets/products/DescriptionProduct.module.css'
import { Product } from '../../interfaces'
import ItemHorizontal from '../products/ItemHorizontal'

type Props = {
    product: Product,
    sidebarItems: Product[],
}

const DescriptionProduct = ({product, sidebarItems} : Props) => (
    <section className={styles.sectionDescriptionProduct}>
        <div className={styles.boxDescriptionProduct}>
            <article dangerouslySetInnerHTML={{ __html: product.content }} />
            <div className={styles.keuGoiMuaHang}>
                <div className={styles.info}>
                    <img src="https://cdn.tgdd.vn/Products/Images/7077/226282/oppo-watch-46mm-day-silicone-hong-thum-400x400.jpg" width="70" height="70"/>
                    <div>
                        <h3>Oppo Watch 46mm dây silicone vàng đồng</h3>
                        <span><strong>7.999.999đ</strong></span>
                    </div>
                </div>
                <div className={styles.boxButton}>
                    <a className={styles.muaNgay}>Mua Ngay</a>
                    <a className={styles.traGop}>Mua Trả Góp</a>
                    <a className={styles.traQuaThe}>Trả Góp Qua Thẻ</a>
                </div>
            </div>
        </div>
        <div className={styles.ads}>
            <h2>Sản phẩm nổi bật</h2>
            {sidebarItems.map((product) => (
                <ItemHorizontal product={product} key={product.id} />
            ))}
        </div>
    </section>
)
  
export default DescriptionProduct