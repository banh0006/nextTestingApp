import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function ProductDetails(props) {
    const router = useRouter()
    // useEffect(() => {
    //     console.log('router')
    //     router.push(`/products/${props.product.name.split('')[0]}`, undefined, { shallow: true })
    // }, [])
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {props.product && `Product number: ${props.product.id}`}
        </div>
    )
}

export async function getStaticPaths() {
   const url = "https://my-json-server.typicode.com/banh0006/mock_products/data"
   const res = await axios.get(url) 
   const products = res.data

   const paths = products.map(product => {
        return {
            params: { id: product.id.toString() }
        }
   })
 
   return {
       paths,
       fallback: true
   }
} 

export async function getStaticProps({ params }) {
    const url = `https://my-json-server.typicode.com/banh0006/mock_products/data/${params.id}`
    const res = await axios.get(url)
    const product = res.data
    
    return {
        props: {
           product: product
        }
    }
}