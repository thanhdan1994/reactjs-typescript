import { GetStaticProps, GetStaticPaths } from 'next'

import { ProductType, Product } from '../../interfaces'
import { sampleSidebarProductData } from '../../utils/sample-data'
import { sampleProductTypeData } from '../../utils/sample-product-type'
import Layout from '../../components/Layout'
import styles from '../../assets/IndexPage.module.css'
import Item from '../../components/products/Item'
import ItemHorizontal from '../../components/products/ItemHorizontal'

type Props = {
  ProductType: ProductType
  errors?: string
  sidebarItems: Product[]
}

const StaticPropsDetail = ({ ProductType,  errors,  sidebarItems }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        ProductType ? ProductType.name : 'product category'
      } | Next.js + TypeScript Example`}
    >
        <section className={styles.sectionIndexPage}>
            <div className={styles.main}>
                <ul className={styles.productsList}>
                {ProductType.productLists?.map((product) => (
                    <Item product={product} key={product.id} />
                ))}
                </ul>
                <button className={styles.buttonLoadmore}>
                Xem thêm 4 {ProductType.name}
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
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const data = sampleProductTypeData;
  const paths = data.map((ProductType) => ({
    params: { slug: ProductType.slug.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug= params?.slug
    const data = sampleProductTypeData;
    const ProductType = data.find((data) => data.slug === slug)
    const sidebarItems: Product[] = sampleSidebarProductData;
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { ProductType,  sidebarItems} }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
