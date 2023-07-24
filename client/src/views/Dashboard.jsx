import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import Product from '../components/Product';


const Dashboard = () => {
    const [products, setProducts] = useState([])

    const fetchProduct = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    }

    useEffect(fetchProduct, [])

    return (
        <div>
            <Form/>
            <Product products = {products} />
        </div>

    )
}

export default Dashboard