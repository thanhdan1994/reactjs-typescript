// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type ProductImage = {
  small: string
  normal: string
}

export type ProductImages = Array<ProductImage>

export type Product = {
  id: number
  name: string
  thumbnail: string
  price: number
  data: {
    screen: string
    cpu: string
    ram: string
    rom: string
    camerus: string
    pin: string
  }
  content?: string
  images: ProductImages
}



export type ProductType = {
  id: number
  name: string
  slug: string
  thumbnail?: string
  productLists?: Product[]
}


export type Article = {
  id: number
  title: string
  slug: string
  description: string
  content: string
  thumbnail: string
}