import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";


const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.products.title);
                setPrice(res.data.products.price);
                setDescription(res.data.products.description);

            })
    }, []);

    const updateProductForm = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProductForm}>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" 
                        name="title" 
                        value={title} 
                        onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div>
                        <label>Price:</label><br />
                        <input type='number' min="1" step='any' onChange={(e) => setPrice(e.target.value)} value={price} />
                    </div>
                    <div>
                        <label>Description: </label><br />
                        <input type="text" 
                        name="description" 
                        value={description} 
                        onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                    <button type='submit' value={"Create"}>Update Product</button>
                </form>
        </div>
)
}


export default Update