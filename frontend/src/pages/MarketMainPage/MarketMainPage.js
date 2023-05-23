import React, { useEffect } from "react";
import MarketMainHeader from "../../components/MarketMainHeader/MarketMainHeader";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import MarketFooter from "../../components/MarketFooter/MarketFooter";

import "./MarketMainPage.css";

import optimizeImg from "../../images/optimize.webp";
import carousel_1 from "../../images/carousel1.webp";
import carousel_2 from "../../images/carousel2.webp";
import carousel_3 from "../../images/carousel3.webp";
import carousel_4 from "../../images/carousel4.webp";
import carousel_5 from "../../images/carousel5.webp";
import acdc_1 from "../../images/acdc1.webp";
import acdc_2 from "../../images/acdc2.webp";
import acdc_3 from "../../images/acdc3.webp";
import acdc_4 from "../../images/acdc4.webp";
import r1 from "../../images/reviews/r1.webp";
import r2 from "../../images/reviews/r2.webp";
// import r3 from "../../images/reviews/r3.webp";
// import r4 from "../../images/reviews/r4.webp";


const MarketMainPage = () => {

    useEffect(() => {
        document.title = "Интернет-магазин Яндекс";
    }, []);

    const carouselImages = [carousel_1, carousel_2, carousel_3, carousel_4, carousel_5];
    const reviewsItems = [
        {
            "image": r1,
            "header": "Горный велосипед",
            "description": "В целом все хорошо. Наклейки, инструкции и всю мелочевку можно было бы положить в одну коробочку. Пришлось искать мелкие части по всей большой коробке.",
            "author": "Евгений А.",
            "ago": "Использует год"
        },
        {
            "image": r2,
            "header": "Тонометр",
            "description": "Точность измерения, зарядка аккумулятора от адаптера через микро-USB. Голосовое \"сопровождение\" на русском языке. (покупал на АлиЭкспрессе).",
            "author": "Александр Р.",
            "ago": "Использует год"
        },
        // {
        //     "image": r3,
        //     "header": "Тонометр",
        //     "description": "Тонометром очень довольна, измеряет быстро, почти бесшумный (есть с чем сравнить). Брали обязательно с адаптером, потому что батарейки быстро садятся.",
        //     "author": "Яна Ш.",
        //     "ago": "Использует год"
        // },
        // {
        //     "image": r4,
        //     "header": "Умные часы",
        //     "description": "В общем замечательные часы. Рабочая лошадка. Автономность в 20-26 дней поражает. ",
        //     "author": "Роман Г.",
        //     "ago": "Использует год"
        // }
    ]

    return (
        <section id="market-main">
            <MarketMainHeader />
            <section id="market-main-section">
                <img src={optimizeImg} alt="" />

                <div id="new-year-ads">
                    <div>
                        <div id="market-new-year--carousel">
                            {carouselImages.map( (image, index) => (
                                <img key={index.toString()} src={image} alt="" />
                            ))}
                        </div>
                        <div>
                            <img src={acdc_1} alt="" />
                            <img src={acdc_2} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={acdc_3} alt="" />
                        <img src={acdc_4} alt="" />
                    </div>
                </div>
            
                <div id="reviews">
                    <div><h1 id="title">Отзывы на лучшие товары</h1></div>
                    <div>
                        {reviewsItems.map((reviewItem, index) => {
                            return <ReviewItem
                                key={index.toString()}
                                image={reviewItem.image}
                                header={reviewItem.header}
                                desc={reviewItem.description}
                                author={reviewItem.author}
                                ago={reviewItem.ago}
                            />;
                        })}
                    </div>
                </div>

            </section>

            <MarketFooter />

        </section>
    );
}

export default MarketMainPage;