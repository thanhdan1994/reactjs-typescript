import LayoutPost from '../../components/LayoutPost'
import styles from '../../assets/IndexPage.module.css'
import { Product, Article } from '../../interfaces'
import { GetStaticProps } from 'next'
import { sampleSidebarProductData } from '../../utils/sample-data'
import { sampleArticleData } from '../../utils/sample-article'
import ItemHorizontal from '../../components/products/ItemHorizontal'
import ArticleItem from '../../components/articles/ArticleItem'


type Props = {
  articles: Article[],
  sidebarItems: Product[],
}

const ArticleIndexPage = ({ sidebarItems, articles }: Props) => (
  <LayoutPost title="Home | Next.js + TypeScript Example">
    <section className={styles.sectionIndexPage}>
      <div className={styles.main}>
          <div className={styles.postLists}>
            {articles.map(article => <ArticleItem  article={article}/>)}
          </div>
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
  </LayoutPost>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const sidebarItems: Product[] = sampleSidebarProductData
  const articles: Article[] = sampleArticleData
  return { props: { sidebarItems, articles } }
}

export default ArticleIndexPage
