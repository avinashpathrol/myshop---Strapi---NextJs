import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const products = (props) => {
  return (
    <div  className='container mx-auto px-4' >
        <section className="text-gray-600 body-font">
  <div className="container px-5 md:py-24 mx-auto">
    <div className="flex flex-wrap w-full md:mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4">
        {props.products.data.map((item) =>{
            return (
      <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-96 rounded m-auto mb-8" src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
          <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
          <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
          <p className="leading-relaxed text-base">{item.attributes.description}</p>
          <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
        </div>
      </div>
      )
    })}
    </div>
  </div>
</section>
    </div>
  )
}


  

export async function getServerSideProps(context) {
    let headers = {Authorization: "Bearer b033bc76d8e6855d49002136e4c663508f3ad681e48239bbed41c460cfcb876ad89ee352471459c271ae516616fa385ed3e7c5485756768ffe0d6d4d5ad2a697169a396a7ed98a44f32501ac72951e077daa589ab5698d49ac77735cc209ecf398ab871b2b7ced205f215de533c45c9e068705b07c0e8fdc6074140727d4cd13"}
    let a = await fetch("http://localhost:1337/api/products?populate=*",{headers:headers})
    let products = await a.json()
    console.log(products)
    return {
      props: {products}, // will be passed to the page component as props
    }
  }



export default products