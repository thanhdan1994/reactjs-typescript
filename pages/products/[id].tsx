import { GetStaticProps, GetStaticPaths } from 'next'

import { Product } from '../../interfaces'
import { sampleProductData, sampleSidebarProductData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import Detail from '../../components/products/Detail'
import Breadcrumb from '../../components/Breadcrumb'
import DescriptionProduct from '../../components/products/DescriptionProduct'

type Props = {
  item?: Product
  errors?: string
  sidebarItems: Product[]
}

const StaticPropsDetail = ({ item, errors, sidebarItems }: Props) => {
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
        item ? item.name : 'Product Detail'
      } | Next.js + TypeScript Example`}
    >
      <Breadcrumb />
      {item && <Detail item={item} />}
      <DescriptionProduct product={item} sidebarItems={sidebarItems} />
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const data = [...sampleProductData, ...sampleSidebarProductData];
  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
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
    const id = params?.id
    const data = [...sampleProductData, ...sampleSidebarProductData];
    const item = data.find((data) => data.id === Number(id))
    const sidebarItems: Product[] = sampleSidebarProductData;
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item,  sidebarItems} }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
