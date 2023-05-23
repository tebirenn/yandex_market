import React, { useEffect } from "react";
import axios from "axios";

import "./ServicesPage.css";
import yandexLogo from "../../images/Yandex_logo_Cyrillic.svg";
import ServicesItem from "../../components/ServicesItem/ServicesItem";

import img1 from "../../images/services-items/img1.svg";
import img2 from "../../images/services-items/img2.svg";
import img3 from "../../images/services-items/img3.svg";
import img4 from "../../images/services-items/img4.svg";
import img5 from "../../images/services-items/img5.svg";
import img6 from "../../images/services-items/img6.svg";
import img7 from "../../images/services-items/img7.svg";
import img8 from "../../images/services-items/img8.svg";
import img9 from "../../images/services-items/img9.svg";
import img10 from "../../images/services-items/img10.svg";
import img11 from "../../images/services-items/img11.svg";
import img12 from "../../images/services-items/img12.svg";
import img13 from "../../images/services-items/img13.svg";
import img14 from "../../images/services-items/img14.svg";
import img15 from "../../images/services-items/img15.svg";

const ServicesPage = () => {

    useEffect(() => {
        document.title = "Все сервисы Яндекса";
    }, []);

    const services = [
        [img1, "Поиск", "Ответы на любые вопросы"],
        [img2, "Картинки", "Изображения всех цветов и размеров"],
        [img3, "Видео", "Просмотр фильмов, сериалов, телешоу, музыкальных роликов"],
        [img4, "Погода", "Прогноз в вашем городе и по всему миру"],
        [img5, "Карты", "Поиск мест, транспорт и навигация в городе"],
        [img6, "Почта", "Электронный ящик без спама и вирусов"],
        [img7, "Маркет", "Товары, сравнение цен, отзывы покупателей"],
        [img8, "Яндекс Браузер", "Простой и безопасный интернет"],
        [img9, "Яндекс Афиша", "Развлекательные мероприятия"],
        [img10, "Такси", "Свободные водители поблизости"],
        [img11, "Музыка", "Персональные рекомендаций"],
        [img12, "Диск", "Безопасное облако для ваших файлов"],
        [img13, "Недвижимость", "Объявления о комнатах, квартирах и домах"],
        [img14, "Авто.ру", "Огромный выбор новых и подержанных автомобилей"],
        [img15, "Путешествия", "Авиабилеты, билеты на поезд, автобус, бронирование отелей"],
    ];

    const testF = () => {
        axios.get(
            "http://127.0.0.1:8000/test/"
        ).then(
            data => console.log(data.data.text)
        ).catch(
            error => console.log(error)
        );
    };

    return (
        <section id="services-page">
            <header>
                <img src={ yandexLogo } alt="" />
                <div id="services-links">
                    <a href="a">Сервисы</a>
                    <a href="a">Приложения</a>
                    <a href="a">Программы</a>
                    <a href="a">Для бизнеса</a>
                </div>
            </header>
            <div className="service-items-list">
                {services.map((list) => (
                    <ServicesItem 
                        key={list[1]} 
                        img={list[0]} 
                        header={list[1]} 
                        desc={list[2]} 
                    />
                ))}
            </div>
            <button onClick={testF}>abc</button>
        </section>
    );
}

export default ServicesPage;