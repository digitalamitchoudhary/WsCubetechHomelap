import React, { useEffect, useState } from 'react';

import Header from './Component/Header'
import Products from './Component/Products'
import Footer from './Component/Footer'

function Home() {

    const [products, setProducts] = useState([]);
   
    const [loading, setloading] = useState(true)


    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => {
            return res.json();
        }).then((result)=>{
            setProducts(result.products)
            setloading(false)
            console.log(result)
        })
    
    }, [ ])
    
  return (
    <> 
      <Header/>
      <Products allProduct = {products} loading = {loading}/>
       <Footer/> 

      
      </>
  )
}

export default Home