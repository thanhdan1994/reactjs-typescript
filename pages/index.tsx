import Layout from '../components/Layout'
import styles from '../assets/IndexPage.module.css'
import { Product } from '../interfaces'
import { GetStaticProps } from 'next'
import { sampleProductData, sampleSidebarProductData } from '../utils/sample-data'
import Item from '../components/products/Item'
import ItemHorizontal from '../components/products/ItemHorizontal'


type Props = {
  items: Product[],
  sidebarItems: Product[],
}

const IndexPage = ({items, sidebarItems}: Props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <section className={styles.sectionIndexPage}>
      <div className={styles.main}>
        <ul className={styles.productsList}>
          {items.map((product) => (
            <Item product={product} key={product.id} />
          ))}
        </ul>
        <button className={styles.buttonLoadmore}>
          Xem thêm 4 đồng hồ thông minh
        </button>
      </div>
      <div className={styles.ads}>
        <h2>Sản phẩm nổi bật</h2>
        <ul>
          {sidebarItems.map((product) => (
            <ItemHorizontal product={product} key={product.id} />
          ))}
        </ul>
      </div>
    </section>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Product[] = sampleProductData
  const sidebarItems: Product[] = sampleSidebarProductData
  return { props: { items, sidebarItems } }
}

export default IndexPage
