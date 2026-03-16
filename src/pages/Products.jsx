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
      <SingleProduct key={item.id} item={item} />
    )
  })





  if (isLoading) {
    return (
      <div className='text-2xl font-semibold text-center mt-6'>
        Loading...
      </div>
    )
  }

  return (
    <section>
      <Header />
      <div className='flex flex-wrap gap-12 justify-center'>
        {allItems}
      </div>
    </section>
  )
}

export default Products