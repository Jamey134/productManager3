import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ViewOne = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const navigator = useNavigate()

    const fetchOneProduct = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    }

const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => navigator("/")) //<----- use navigator const in order to activate useNavigate
        .catch(err => console.log(err))
}

    useEffect(fetchOneProduct, [])

    return (
        <div>
            <p>{products.title} </p>
            <p>Price: {products.price} </p>
            <p>Description: {products.description} </p>
            <Link to = {`/product/${id}/edit`}>Edit</Link> 
            <br></br>
            <button onClick={handleDelete}>Delete</button>
        </div>

    )



}

export default ViewOne
