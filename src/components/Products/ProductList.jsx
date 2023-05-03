import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ProductList = () => {

    const [products, setproducts] = useState('')
    const getAllProducts =async ()=>{

        const res = await axios.get("http://localhost:4000/product/product")
        setproducts(res.data.products)
    }
    useEffect(() => {
      getAllProducts()
    }, [])

    const addTocart = async (productId)=>{
        var products = []
        products.push(productId)
        const data = {
            user:"643f91ca98d8a295ff84f54e",
            products:products
        }
        
        const res = await axios.post("http://localhost:4000/addtocart/addtocart",data)
        console.log(res)
    }
    
  return (
    <div>
        <h1>Product List</h1>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Description</th>
                    <th>ACtion</th>
                    </tr>
            </thead>
            <tbody>
                {products && products.map((product)=>(
                    <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.qty}</td>
                        <td>
                            <button onClick={()=>{addTocart(product._id)}}>ADD TO CART</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
        <div>
            <h1>Cart</h1>
            
        </div>
        
    </div>
  )
}
