import React from 'react'
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = (props) => {

    return (
        <div>
            {props.products.map((prod, i) => {
                return (
                    <div key={i}>
                        <Link to={`/product/${prod._id}`}>
                            <p>{prod.title} </p>
                            {/* <p>Price: {prod.price} </p>
                        <p>Description: {prod.description} </p> */}
                        </Link>
                    </div>
                )
            })}
        </div>
    )

}


export default Product