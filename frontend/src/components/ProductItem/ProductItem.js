import React from "react";
import axios from "axios";
import { PRODUCT_DETAIL_ROUTE } from "../../utils/consts";

import "./ProductItem.css";

import heartIcon from "../../images/heart.svg";

const ProductItem = (props) => {
    const token = localStorage.getItem("token");

    function addProductToFav (productID) {

        // axios.post("http://localhost:8000/market/favorites/", {
        //     'product_id': productID
        // }, {
        //     headers: {
        //       'Authorization': `Bearer ${localStorage.getItem("token")}`
        //     }
        // })
        const data_id = {
            'product_id': productID   
        };
        const headers_data = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        axios.post("http://localhost:8000/market/favorites/", data_id, {
            headers: headers_data
        })
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
            console.log("AXIOS ERRORR: ", err);
        });

    }

    

    return (
        <div className="product-item">
            <div className="image-wrapper"><img src={props.image} alt="" /></div>
            <div>
                <a href={PRODUCT_DETAIL_ROUTE + "/" + props.id} className="prd-name">{props.name}</a>
                <p className="prd-desc">{props.desc}</p>
                {/* <p className="prd-created">{props.createdAt}</p> */}
            </div>
            <div>
                <h3>{props.price} KZT</h3>
                <button className="to-busket-btn">В корзину</button>
                <button className="to-fav-btn" onClick={addProductToFav(props.id)}>
                    <img src={heartIcon} alt="" />
                </button>
            </div>
        </div>
    );
}

export default ProductItem;