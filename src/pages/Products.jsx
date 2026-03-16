import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SingleProduct from '../components/SingleProduct'

const Products = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = selectedCategory === "all" ? products : products.filter((product) => {
    return (
      product.category === selectedCategory
    )
  })

 

  const allCategories = ["all", ...new Set(products.map((product) => {
      return (
        product.category
      )
  }))]

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


  const allItems = filteredProducts.map((item) => {
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
      <div>
        <div className=' flex p-4 justify-center flex-wrap gap-5'>
          {allCategories.map((category, index) => {
            return (
              <button key={index} onClick={() => setSelectedCategory(category)} className='text-lg font-semibold cursor-pointer bg-gray-200 text-black shadow-md p-2 rounded-lg '>
                {category}
              </button>
            )
          })}
        </div>
        <div className='flex flex-wrap gap-12 justify-center'>
        {allItems}
      </div>
      </div>
    </section>
  )
}

export default Products