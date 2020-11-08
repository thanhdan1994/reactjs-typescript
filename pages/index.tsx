import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../assets/IndexPage.module.css'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <section className={styles.sectionIndexPage}>
      <div className={styles.main}>
        <ul className={styles.productsList}>
          <li>
            <Link href="/">
              <a>
                <div className={styles.labelAboveImage}>
                  <label>Trả góp 0%</label>
                </div>
                <img src="https://cdn.tgdd.vn/Products/Images/42/227731/TimerThumb/realme-7-(2).jpg"/>
                <h3>Realme 7 </h3>
                <span className={styles.price}><strong>7,000,000đ</strong></span>
                <figure>
                  <span>Màn hình: 6.44", Full HD+</span>
                  <span>Chip: Snapdragon 720G 8 nhân</span>
                  <span>RAM: 8 GB, Bộ nhớ trong: 128 GB</span>
                  <span>Camera sau: Chính 64 MP &amp; Phụ 8 MP, 2 MP</span>
                  <span>Camera trước: 44 MP</span>
                  <span>Pin: 4000 mAh, có sạc nhanh</span>
                </figure>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <div className={styles.labelAboveImage}></div>
                <img src="https://cdn.tgdd.vn/Products/Images/42/228743/iphone-12-pro-max-256gb-190320-020344-600x600.jpg"/>
                <h3>Iphone 12 Pro Max 128GB </h3>
                <span className={styles.price}><strong>27,000,000đ</strong></span>
                <figure>
                  <span>Màn hình: 6.44", Full HD+</span>
                  <span>Chip: Snapdragon 720G 8 nhân</span>
                  <span>RAM: 8 GB, Bộ nhớ trong: 128 GB</span>
                  <span>Camera sau: Chính 64 MP &amp; Phụ 8 MP, 2 MP</span>
                  <span>Camera trước: 44 MP</span>
                  <span>Pin: 4000 mAh, có sạc nhanh</span>
                </figure>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <div className={styles.labelAboveImage}></div>
                <img src="https://cdn.tgdd.vn/Products/Images/42/228737/iphone-12-256gb-195920-105925-600x600.jpg"/>
                <h3>Iphone 12 </h3>
                <span className={styles.price}><strong>20,000,000đ</strong></span>
                <figure>
                  <span>Màn hình: 6.44", Full HD+</span>
                  <span>Chip: Snapdragon 720G 8 nhân</span>
                  <span>RAM: 8 GB, Bộ nhớ trong: 128 GB</span>
                  <span>Camera sau: Chính 64 MP &amp; Phụ 8 MP, 2 MP</span>
                  <span>Camera trước: 44 MP</span>
                  <span>Pin: 4000 mAh, có sạc nhanh</span>
                </figure>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <div className={styles.labelAboveImage}></div>
                <img src="https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-512gb-191020-021035-600x600.jpg"/>
                <h3>Iphone 12 Pro Max 512 GB </h3>
                <span className={styles.price}><strong>47,050,000đ</strong></span>
                <figure>
                  <span>Màn hình: 6.44", Full HD+</span>
                  <span>Chip: Snapdragon 720G 8 nhân</span>
                  <span>RAM: 8 GB, Bộ nhớ trong: 128 GB</span>
                  <span>Camera sau: Chính 64 MP &amp; Phụ 8 MP, 2 MP</span>
                  <span>Camera trước: 44 MP</span>
                  <span>Pin: 4000 mAh, có sạc nhanh</span>
                </figure>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <div className={styles.labelAboveImage}></div>
                <img src="https://cdn.tgdd.vn/Products/Images/42/230412/iphone-se-128gb-2020-hop-moi-292720-102759-600x600.jpg"/>
                <h3>Iphone SE 128GB </h3>
                <span className={styles.price}><strong>47,050,000đ</strong></span>
                <figure>
                  <span>Màn hình: 6.44", Full HD+</span>
                  <span>Chip: Snapdragon 720G 8 nhân</span>
                  <span>RAM: 8 GB, Bộ nhớ trong: 128 GB</span>
                  <span>Camera sau: Chính 64 MP &amp; Phụ 8 MP, 2 MP</span>
                  <span>Camera trước: 44 MP</span>
                  <span>Pin: 4000 mAh, có sạc nhanh</span>
                </figure>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <div className={styles.labelAboveImage}></div>
                <img src="https://cdn.tgdd.vn/Products/Images/42/230412/iphone-se-128gb-2020-hop-moi-292720-102759-600x600.jpg"/>
                <h3>Vsmart Aris Pro </h3>
                <span className={styles.price}><strong>8,890,000đ</strong></span>
                <figure>
                  <span>Màn hình: 6.39", Full HD+</span>
                  <span>Chip: Snapdragon 720G 8 nhân</span>
                  <span>RAM: 8 GB, Bộ nhớ trong: 128 GB</span>
                  <span>Camera sau: Chính 64 MP & Phụ 8 MP, 8 MP, 2 MP</span>
                  <span>Camera trước: 44 MP</span>
                  <span>Pin: 4000 mAh, có sạc nhanh</span>
                </figure>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.ads}>
        <h2>Sản phẩm nổi bật</h2>
        <ul>
          <li>
            <img src="https://cdn.tgdd.vn/Products/Images/7077/229033/apple-watch-s6-lte-40mm-vien-nhom-day-cao-su-ava-200x200.jpg" width="150px" height="150px" />
            <div>
              <div className={styles.labelAboveImage}>
                <label>Trả góp 0%</label>
              </div>
              <h3>Apple Watch S6 LTE 40mm viền nhôm dây cao su </h3>
              <span className={styles.price}><strong>12,890,000đ</strong></span>
              <figure>
                <span>Màn hình: 6.39", Full HD+</span>
                <span>Chip: Snapdragon 720G 8 nhân</span>
              </figure>
            </div>
          </li>
          <li>
            <img src="https://cdn.tgdd.vn/Products/Images/7077/225648/oppo-watch-46mm-day-silicone-ava-400x400.jpg" width="150px" height="150px" />
            <div>
              <div className={styles.labelAboveImage}></div>
              <h3>Oppo Watch 46mm dây silicone </h3>
              <span className={styles.price}><strong>10,890,000đ</strong></span>
              <figure>
                <span>Màn hình: 6.39", Full HD+</span>
                <span>Chip: Snapdragon 720G 8 nhân</span>
              </figure>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default IndexPage
