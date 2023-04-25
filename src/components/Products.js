import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export const Products = () => {

    const [products, setproducts] = useState([])
    const [flag, setflag] = useState('')
    const getALlProducts = () => {

        axios.get("http://localhost:4000/product/product").then((res)=>{

            console.log(res.data)
            setproducts(res.data.products)
            setflag('')

        }).catch((err)=>{

            console.log(err)
            
        })

    }
    useEffect(() => {
      
        getALlProducts()
    
    }, [])

    const searchHandler = (e) => {
        console.log(e.target.value)
        const searchValue = e.target.value
        axios.get(`http://localhost:4000/product/search/${searchValue}`).then((res)=>{
            console.log(res.data)
            setproducts(res.data.products)
        }).catch((err)=>{
            
            getALlProducts()
            setflag(<tr><td colSpan="3">No products found</td></tr>)
        })

    }
    
  return (
    <div>
        <h1>PRODUCTS</h1>
        <input type="text" placeholder="Search product name" onChange={(e)=>{searchHandler(e)}}/>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.map((product)=>{
                        return(
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.qty}</td>
                            </tr>
                        )
                    }
                    )
                }
                {flag}
            </tbody>
        </table>
    </div>
  )
}
