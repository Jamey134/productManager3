import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    const formSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={formSubmit}>
            <h1>Add Your Product!</h1>

            <label>Title:</label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
            <br />
            <label>Price:</label>
            <input type='number' min="1" step='any' onChange={(e) => setPrice(e.target.value)} value={price} />
            <br />
            <label>Description:</label>
            <input type='text' onChange={(e) => setDescription(e.target.value)} value={description} />
            <br />
            <button type='submit' value={"Create"}>Create</button>
        </form>
    )
}

export default Form 