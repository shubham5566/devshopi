import React, { useState, createContext, useContext, useEffect } from 'react'
import axios from 'axios'

const Context = createContext()
export const StateContext = ({ children }) => {
  const [products, setproducts] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [product, setproduct] = useState()
  const [cartItem, setcartItem] = useState()
  const getAllProducts = async e => {
    const { data } = await axios.get("http://localhost:5000/products")
    setproducts(data)
  
  }
 const getSingleProduct = async id => {
    setisLoading(true)
    setTimeout(async () => {
      const { data } = await axios.get(`http://localhost:5000/products/${id}`)
      setproduct(data)
      setisLoading(false)
    }, 1000);
  }

  const getNumberOfCartItem = async e => {
    const { data } = await axios.get("http://localhost:5000/cart")
    setcartItem(data.length)
  }
  useEffect(() => {
    getNumberOfCartItem()
    
  },  [])
  

  return (
    <Context.Provider value={{ getAllProducts,
     products,
    product,
    isLoading,
    getSingleProduct, 
    cartItem,
    setcartItem }}>
    
          {children}      
    </Context.Provider>
  )
}
{/* <StateContext> <Cart/> </StateContext> */ }
export const useStateContext = ()=>useContext(Context)