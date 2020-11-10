import { Icon } from '@material-ui/core'
import React, { useState } from 'react'
import styles from '../../assets/products/Detail.module.css'
import { Product } from '../../interfaces'
import SmallImagePreview from './SmallImagePreview'

type DetailProps = {
  product: Product
}

function Detail({ product } : DetailProps) {
  const [images, setImages] = useState(product.images);
  const [activeKey, setActiveKey] = useState(1);

  function handleShowPreviewImage(key: number) {
    console.log('hehe 1');
  }

  function handleShowPrevImagePreview() {
    console.log('hihi');
  }

  function handleShowNextImagePreview() {
    console.log('hihi');
  }

  return (
    <section className={styles.sectionDetail} id="sectionDetail">
          <div className={styles.boxSmallPreview}>
            <Icon fontSize="large" className={styles.iconArrow} onClick={handleShowPrevImagePreview}>keyboard_arrow_up</Icon>
            <ul>
              {images && images.map((image, key) => <SmallImagePreview key={key} className={key === 1 ? 'active' : ''} image={image.small} handleShowPreviewImage={() => handleShowPreviewImage(key)}/>)}
            </ul>
            <Icon fontSize="large" className={styles.iconArrow} onClick={handleShowNextImagePreview}>keyboard_arrow_down</Icon>
          </div>
          <div className={styles.boxPreview} id="boxPreview">
            {images && images.map((image, key) => <img key={key} src={image.normal} className={key === 1 ? 'show' : 'hidden'} />)}
            <div>
              <Icon fontSize="large">zoom_in</Icon>
              <span>Phóng to hình sản phẩm</span>
              <label>3/8</label>
            </div>
          </div>
          <div className={styles.boxInfoAndOrder}>
            <span>
              <strong>{product.price}đ</strong>
              <label>Trả góp 10%</label>
            </span>
            <div>
              <h2>Thông số kỹ thuật</h2>
              <ul>
                <li>
                  <span>Công nghệ màn hình: </span>
                  <span>AMOLED</span>
                </li>
                <li>
                  <span>Kích thước màn hình: </span>
                  <span>1.91 inch</span>
                </li>
                <li>
                  <span>Thời gian sử dụng pin: </span>
                  <span>Khoảng 36 giờ (chế độ thường), Khoảng 21 ngày (chế độ tiết kiệm pin)</span>
                </li>
                <li>
                  <span>Kích thước màn hình: </span>
                  <span>1.91 inch</span>
                </li>
                <li>
                  <span>Hệ điều hành: </span>
                  <span>Google Wear OS</span>
                </li>
                <li>
                  <span>Kết nối với hệ điều hành: </span>
                  <span>Android, iOS</span>
                </li>
                <li>
                  <span>Chất liệu mặt: </span>
                  <span>Kính cường lực</span>
                </li>
                <li>
                  <span>Đường kính mặt: </span>
                  <span>46 mm</span>
                </li>
                <li>
                  <span>Theo dõi sức khỏe: </span>
                  <span>Đo nhịp tim, Theo dõi giấc ngủ, Tính lượng calories tiêu thụ, Đếm số bước chân, Chế độ luyện tập, Tính quãng đường chạy</span>
                </li>
              </ul>
            </div>
          </div>
      </section>
  )
}

export default Detail
