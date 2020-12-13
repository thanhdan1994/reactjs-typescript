import { Icon } from '@material-ui/core'
import React, { useState } from 'react'
import styles from '../../assets/products/Detail.module.css'
import { Product } from '../../interfaces'
import SmallImagePreview from './SmallImagePreview'
import SlideshowModal from './SlideshowModal'

type DetailProps = {
  product: Product
}

function Detail({ product } : DetailProps) {
  var [images, setImages] = useState(product.images);
  var [showSlideshow, setShowSlideshow] = useState(false);

  function handleShowPrevImagePreview() {
    let newImages: Array<Object> = new Array();
    newImages.push(images[(images.length - 1)]);
    for (let i = 0; i < (images.length - 1); i++) {
      newImages.push(images[i]);
    }
    setImages(newImages);
  }

  function handleShowNextImagePreview() {
    let newImages: Array<Object> = new Array();
    for (let i = 1; i < images.length; i++) {
      newImages.push(images[i]);
    }
    newImages.push(images[0]);
    setImages(newImages);
  }

  function handleShowSlideshow() {
      setShowSlideshow(true);
  }

  function handleCloseSlideshow() {
    setShowSlideshow(false);
  }

  return (
    <>
      <section className={styles.sectionDetail} id="sectionDetail">
          <div className={styles.boxSmallPreview}>
            <Icon fontSize="large" className={styles.iconArrow} onClick={handleShowPrevImagePreview}>keyboard_arrow_up</Icon>
            <ul>
              {images.map((image, key) => <SmallImagePreview key={key} className={key === 1 ? 'active' : ''} image={image.small}/>)}
            </ul>
            <Icon fontSize="large" className={styles.iconArrow} onClick={handleShowNextImagePreview}>keyboard_arrow_down</Icon>
          </div>
          <div className={styles.boxPreview} id="boxPreview">
            {images.map((image, key) => <img key={key} src={image.normal} className={key === 1 ? 'show' : 'hidden'} alt="Mô tả ảnh" onClick={handleShowSlideshow} />)}
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
      {showSlideshow && <SlideshowModal handleCloseSlideshow={handleCloseSlideshow} productImages={images} />}
    </>
  )
}

export default Detail
