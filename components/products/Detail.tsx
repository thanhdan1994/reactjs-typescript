import { Icon } from '@material-ui/core'
import React from 'react'
import styles from '../../assets/products/Detail.module.css'
import { Product } from '../../interfaces'

type DetailProps = {
  item: Product
}

const ListDetail = ({ item: product }: DetailProps) => (
  <section className={styles.sectionDetail} id="sectionDetail">
      <div className={styles.boxSmallPreview}>
        <ul>
          <li>
            <Icon fontSize="large" className={styles.iconArrow}>keyboard_arrow_up</Icon>
          </li>
          <li className="active">
            <img src="https://cdn.tgdd.vn/Products/Images/7978/219556/day-da-dong-ho-l016-05-20-nau-size-20mm-2-180x125.jpg" />
          </li>
          <li>
            <img src="https://cdn.tgdd.vn/Products/Images/7978/219556/day-da-dong-ho-l016-05-20-nau-size-20mm-3-180x125.jpg " />
          </li>
          <li>
            <img src="https://cdn.tgdd.vn/Products/Images/7978/219556/day-da-dong-ho-l016-05-20-nau-size-20mm-4-180x125.jpg" />
          </li>
          <li>
            <img src="https://cdn.tgdd.vn/Products/Images/7978/219556/day-da-dong-ho-l016-05-20-nau-size-20mm-4-180x125.jpg" />
          </li>
          <li>
            <Icon fontSize="large" className={styles.iconArrow}>keyboard_arrow_down</Icon>
          </li>
        </ul>
      </div>
      <div className={styles.boxPreview}>
        <img src="https://cdn.tgdd.vn/Products/Images/7978/219556/day-da-dong-ho-l016-05-20-nau-size-20mm-4-org.jpg" />
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

export default ListDetail
