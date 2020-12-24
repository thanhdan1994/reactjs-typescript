import React from 'react'
import Link from 'next/link'
import styles from '../../assets/articles/ArticleItem.module.css'
import { Article } from '../../interfaces'

type Props = {
  article: Article
}

const ArticleItem = ({ article }: Props) => (
  <article>
      <div className={styles.thumb}>
        <Link href="/">
            <a>
                <img src={article.thumbnail} />
            </a>
        </Link>
      </div>
      <div className={styles.title}>
        <Link href="/">
            <a>
                <h2>{article.title}</h2>
            </a>
        </Link>
      </div>
  </article>
)

export default ArticleItem
