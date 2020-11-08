import { User, Product } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const sampleProductData: Product[] = [
  { id: 1, name: 'Iphone 12', thumbnail: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-mini-blue-select-2020_2.png' },
  { id: 2, name: 'Iphone 12 Mini' , thumbnail: 'https://cdn.cellphones.com.vn/media/catalog/product/i/p/iphone-12-mini-white-select-2020_2.png'},
  { id: 3, name: 'Iphone 12 Pro', thumbnail: 'https://cdn.cellphones.com.vn/media/catalog/product/p/h/photo_2020-10-13_22-12-33.jpg_1.png'},
  { id: 4, name: 'Iphone 12 Pro Max', thumbnail: 'https://cdn.cellphones.com.vn/media/catalog/product/p/h/photo_2020-10-13_22-12-37.jpg_1.png' },
]