import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MarketFooter from "../../components/MarketFooter/MarketFooter";
import MarketMainHeader from "../../components/MarketMainHeader/MarketMainHeader";

import "./ProductDetailPage.css";
import heartIcon from "../../images/heart.svg";
import compareIcon from "../../images/compare.svg";

const ProductDetailPage = () => {

    const [product, setProduct] = useState({
        "product_id": "",
        "product_name": "",
        "category": "",
        "image_url": "",
        "product_description": "",
        "about": "{}",
        "characteristics": "{}",
        "price": "",
        "created_at": ""
    });
    const { product_id } = useParams();

    axios.get(`http://localhost:8000/api/products/${product_id}`)
        .then(response => setProduct(response.data));

    const capitalize = (text) => { 
        if (text) 
            return text.charAt(0).toUpperCase() + text.slice(1);
        return "";
    };
    const about = JSON.parse(product.about);
    const characteristics = JSON.parse(product.characteristics);

    return (
        <div id="product-detail-page">
            <MarketMainHeader />

            <section>
                <div id="product-header">
                    <p>{capitalize(product.category)}</p>
                    <h1>{product.product_name}</h1>

                    <div>
                        <span>
                            <a href="">0 отзыв</a>
                            <a href="">Характеристики</a>
                        </span>
                        <span>
                            <a href="">
                                <img src={heartIcon} alt="" />
                                <p>В избранное</p>
                            </a>
                            <a href=".">
                                <img src={compareIcon} alt="" />
                                <p>Сравнить</p>
                            </a>
                        </span>
                    </div>

                    <div id="product-main-info">
                        <div>
                            <img src={product.image_url} alt="" />
                        </div>
                        <div>
                            <p>Коротко о товаре</p>
                            {Object.keys(about).map((key) => (
                                <div className="product-about" key={key}>
                                    <span>
                                        <p>{key}</p>
                                        <span className="line"></span>
                                    </span>
                                    <span>
                                        <p>{about[key]}</p>
                                    </span>
                                </div>
                            ))}
                        </div>
                        
                        <div id="to-busket">
                            <h1>{product.price} KZT</h1>
                            <p>Курьером<br/>Оплата наличными курьеру</p>
                            <button>В корзину</button>
                        </div>
                    </div>
                </div>

                <div id="char">
                    <h2>Описание</h2>
                    <h1>Характеристики</h1>
                    <div>
                        {Object.keys(characteristics).map((key) => (
                            <div className="product-about" key={key}>
                                <span>
                                    <p>{key}</p>
                                    <span className="line"></span>
                                </span>
                                <span>
                                    <p>{characteristics[key]}</p>
                                </span>
                            </div>  
                        ))}
                    </div>
                </div>
            </section>

            <MarketFooter />
        </div>
    );
}

export default ProductDetailPage;