import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SingleProduct from '../components/SingleProduct'

const Products = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()
        setProducts(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    }
  

  useEffect(() => {
    fetchData()
  }, [])


  const allItems = products.map((item) => {
    return (
      <SingleProduct item={item} />
    )
  })





  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <section>
      <Header />
      <div>
        {allItems}
      </div>
    </section>
  )
}

export default Products