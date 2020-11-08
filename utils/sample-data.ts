import { User, Product } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const sampleProductData: Product[] = [
  { 
    id: 1,
    name: 'Iphone 12', 
    thumbnail: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-mini-blue-select-2020_2.png',
    price: 20500000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    },
    content: '<h3><strong>Thiết kế đơn giản đẹp mắt</strong></h3><p>Đồng hồ thông minh <a href="https://www.thegioididong.com/tim-kiem?key=oppo+watch" target="_blank" title="Oppo Watch" type="Oppo Watch">Oppo Watch</a> <a href="https://www.thegioididong.com/dong-ho-thong-minh/oppo-watch-46mm-day-silicone-hong" target="_blank" title="Oppo Watch 46 mm vàng hồng" type="Oppo Watch 46 mm vàng hồng">màu vàng hồng phiên bản 46mm </a>sử dụng mặt đồng hồ vuông, bo cong nhẹ ở 4 cạnh, cùng với mặt kính vát cong 2D có chiều sâu tạo cảm giác như mặt kính cong 3D, màn hình AMOLED 1.91 inch độ phân giải 402 x 476 pixels cho chất lượng hiển thị sắc nét. <a href="https://www.thegioididong.com/day-dong-ho" target="_blank" title="dây đeo" type="dây đeo">Dây đeo</a> silicon cho cảm giác mang được dễ chịu và thoải mái.</p><p>Dù vẻ ngoài khá giống với <a href="https://www.thegioididong.com/dong-ho-thong-minh-apple" target="_blank" title="apple watch" type="apple watch">Apple Watch</a>, tuy nhiên <a href="https://www.thegioididong.com/tim-kiem?key=oppo+watch" target="_blank" title="Xem thêm các mẫu đồng hồ Oppo Watch" type="Xem thêm các mẫu đồng hồ Oppo Watch">Oppo Watch</a> vẫn có một số điểm khác như:</p><p>- Cạnh trái là nơi đặt loa ngoài dùng để phát nhạc, cũng như đàm thoại.</p><p>- Cạnh phải là nơi đặt hai phím cứng, trong đó phím home có thêm đường chỉ xanh chạy dọc.</p><p>- Mặt sau được trang bị các cảm biến để đo nhịp tim và logo <a href="https://www.thegioididong.com/dtdd-oppo" target="_blank" title="oppo" type="oppo">OPPO</a>.</p><h3><a class="preventdefault" href="https://www.thegioididong.com/images/7077/226282/oppo-watch-46mm-day-silicone-hong-writee1.jpg" onclick="return false;"><img alt="Đồng hồ Oppo Watch 46mm dây silicone vàng hồng có thiết kế tinh tế, sang trọng" data-original="https://cdn.tgdd.vn/Products/Images/7077/226282/oppo-watch-46mm-day-silicone-hong-writee1.jpg" class="lazy" title="Đồng hồ Oppo Watch 46mm dây silicone vàng hồng có thiết kế tinh tế, sang trọng" src="https://cdn.tgdd.vn/Products/Images/7077/226282/oppo-watch-46mm-day-silicone-hong-writee1.jpg" style="display: block;"></a></h3><h3><strong>Kết nối đa dạng</strong></h3><p>Oppo Watch hỗ trợ kết nối Bluetooth v4.2 tương thích với&nbsp;<a href="https://www.thegioididong.com/dtdd?g=android" target="_blank" title="android" type="android">Android</a> cho phép bạn dễ dàng đồng bộ điện thoại và <a href="https://www.thegioididong.com/dong-ho-thong-minh" target="_blank" title="smartwatch" type="smartwatch">smartwatch </a>để nhận các thông báo tin nhắn SMS, Zalo, Messenger,…, nghe nhận cuộc gọi (chỉ nghe gọi được trên điện thoại Android). Ngoài ra Oppo Watch còn hỗ trợ kết nối Wi-Fi và định vị GPS cho phép bạn dễ dàng kết nối với điện thoại cũng như dễ dàng định vị vị trí của mình</p><h3><a class="preventdefault" href="https://www.thegioididong.com/images/7077/226282/oppo-watch-46mm-day-silicone-hong-183020-103004.jpg" onclick="return false;"><img alt="Đồng hồ Oppo Watch 46mm dây silicone vàng hồng kết nối điện thoại nhanh chóng qua bluetooth" data-original="https://cdn.tgdd.vn/Products/Images/7077/226282/oppo-watch-46mm-day-silicone-hong-183020-103004.jpg" class="lazy" title="Đồng hồ Oppo Watch 46mm dây silicone vàng hồng kết nối điện thoại nhanh chóng qua bluetooth" src="https://cdn.tgdd.vn/Products/Images/7077/226282/oppo-watch-46mm-day-silicone-hong-183020-103004.jpg" style="display: block;"></a></h3><h3><strong>Mặt đồng hồ phong phú tha hồ lựa chọn</strong></h3><p>Oppo Watch sở hữu đa dạng các mặt đồng hồ khác nhau theo nhiều chủ đề để người dùng có thể lựa chọn theo ý thích của bản thân.</p>'
  },
  { 
    id: 2, 
    name: 'Iphone 12 Mini' , 
    thumbnail: 'https://cdn.cellphones.com.vn/media/catalog/product/i/p/iphone-12-mini-white-select-2020_2.png',
    price: 17505000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    },
    content: ''
  },
  { 
    id: 3, 
    name: 'Iphone 12 Pro', 
    thumbnail: 'https://cdn.cellphones.com.vn/media/catalog/product/p/h/photo_2020-10-13_22-12-33.jpg_1.png',
    price: 25550000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
  { 
    id: 4, 
    name: 'Iphone 12 Pro Max', 
    thumbnail: 'https://cdn.cellphones.com.vn/media/catalog/product/p/h/photo_2020-10-13_22-12-37.jpg_1.png',
    price: 28990000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
  { 
    id: 5, 
    name: 'Realme 7', 
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/227731/TimerThumb/realme-7-(2).jpg',
    price: 7800000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
  { 
    id: 6, 
    name: 'Iphone 12 Pro Max 128GB', 
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/228743/iphone-12-pro-max-256gb-190320-020344-600x600.jpg',
    price: 27000000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
  { 
    id: 8, 
    name: 'Iphone 12', 
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/228737/iphone-12-256gb-195920-105925-600x600.jpg',
    price: 20000000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
  { 
    id: 9, 
    name: 'Iphone 12 Pro Max 512 GB', 
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-512gb-191020-021035-600x600.jpg',
    price: 44500000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
  { 
    id: 10, 
    name: 'Iphone SE 128GB', 
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/230412/iphone-se-128gb-2020-hop-moi-292720-102759-600x600.jpg',
    price: 17600000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
  { 
    id: 11, 
    name: 'Vsmart Aris Pro', 
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/230412/iphone-se-128gb-2020-hop-moi-292720-102759-600x600.jpg',
    price: 8890000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
]

export const sampleSidebarProductData: Product[] = [
  { 
    id: 20,
    name: 'Apple Watch S6 LTE 40mm viền nhôm dây cao su ', 
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/7077/229033/apple-watch-s6-lte-40mm-vien-nhom-day-cao-su-ava-200x200.jpg',
    price: 12890000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
  { 
    id: 21,
    name: 'Oppo Watch 46mm dây silicone', 
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/7077/225648/oppo-watch-46mm-day-silicone-ava-400x400.jpg',
    price: 18900000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
  { 
    id: 23,
    name: 'HP Pavilion x360 14 dw0060TU i3 1005G1/Office 2019 (195M8PA)', 
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/44/225695/hp-pavilion-x360-dw0060tu-i3-195m8pa-225695-400x400.jpg',
    price: 15899000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
  { 
    id: 24,
    name: 'Apple Watch S5 40mm viền nhôm dây cao su', 
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/7077/212769/apple-watch-s5-40mm-vien-nhom-day-cao-su10-2-1-600x600.jpg',
    price: 16750000,
    data: {
      screen: '6.44", Full HD+',
      cpu: 'Snapdragon 720G 8 nhân',
      ram: '8 GB',
      rom: '128 GB',
      camerus: 'Chính 64 MP &amp; Phụ 8 MP, 2 MP',
      pin: '34000 mAh'
    }
  },
]