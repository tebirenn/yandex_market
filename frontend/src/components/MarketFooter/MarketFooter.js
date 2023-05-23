import React from "react";

import "./MarketFooter.css";

import sovetnikImg from "../../images/sovetnik-icon.svg";
import vkImg from "../../images/vk.svg";

const MarketFooter = () => {
    return (
        <footer id="market-footer">
            <div>
                <div id="market-footer-links">
                    <div className="footer-links--item">
                        <p>Покупателям</p>
                        <a href=".">Как выбрать товар</a>
                        <a href=".">Оплата и доставка</a>
                        <a href=".">Обратная связь</a>
                        <a href=".">Покупайте как юрлицо</a>
                        <a href=".">О сервисе</a>
                        <a href=".">Участие в исследованиях</a>
                        <a href=".">Возвраты</a>
                    </div>
                    <div className="footer-links--item">
                        <p>Продавцам</p>
                        <a href=".">Личный кабинет продавца</a>
                        <a href=".">Продавайте на Маркете</a>
                        <a href=".">Документация для партнёров</a>
                        <a href=".">Сайт для партнёров</a>
                    </div>
                    <div className="footer-links--item">
                        <p>Сотрудничество</p>
                        <a href=".">Новости компаний</a>
                        <a href=".">Партнёрская программа</a>
                        <a href=".">Производителям</a>
                        <a href=".">Пункт выдачи заказов</a>
                        <a href=".">Маркет нанимет</a>
                    </div>
                    <div className="footer-outro">
                        <span>
                            <img src={sovetnikImg} alt="" />
                            <p>Советник находит нужные вам товары <br/>по более выгодной цене. <a href=".">Подробнее</a></p>
                        </span>
                        <p>528189268 предложений от 39835 магазинов. <br/>
                        Обновлено 17.12.2022 в 19:14 по московскому времени.</p>
                        <img src={vkImg} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p>Мобильная версия</p>
                    <p>Статистика</p>
                    <p>Пользовательское соглашение</p>
                </div>
                <div>
                    <p>© 2022  ООО «ЯНДЕКС»</p>
                </div>
            </div>
        </footer>
    );
}

export default MarketFooter;