// import { Product } from './types/Product'
import bcrypt from 'bcryptjs'
import { User } from './models/userModel'
import { Product } from './models/productModel'

export const sampleProducts:Product[] = [
    {
        name: 'Nike Slim shirt',
        slug: 'nike-slim-shirt',
        category: 'shirts',
        image: '../images/p1.jpg',
        price:120,
        countInStock:10,
        brand:'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt',
    },
    {
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'shirts',
        image: '../images/p2.jpg',
        price:100,
        countInStock:20,
        brand:'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
    },
    {
        name: 'Lacoste Free Pants',
        slug: 'laconste-free-pants',
        category: 'pants',
        image: '../images/p3.jpg',
        price:220,
        countInStock:0,
        brand:'Laconste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality pant',
    },
    {
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'pants',
        image: '../images/p4.jpg',
        price:78,
        countInStock:15,
        brand:'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality pant',
        
    },
    {
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'pants',
        image: '../images/p4.jpg',
        price:78,
        countInStock:15,
        brand:'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality pant',
        
    }
]

export const sampleUsers: User[] = [
    {
      name: 'Joe',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Dhruv',
      email: 'dhruvdesai980@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ]