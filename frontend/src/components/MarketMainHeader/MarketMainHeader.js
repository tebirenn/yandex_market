import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarDrop from "../AvatarDrop/AvatarDrop";

import marketLogo from "../../images/market_logo.svg";
import bugerMenuIcon from "../../images/burger_menu.svg";
import plusIcon from "../../images/market-header/plus.svg";
import yaAvatar from "../../images/ya_avatar.png";

import "./MarketMainHeader.css";
import { AUTH_ROUTE, CATEGORY_ROUTE, MARKET_MAIN_ROUTE, PLUS_MAIN_ROUTE } from "../../utils/consts";
import axios from "axios";

const MarketMainHeader = () => {
    
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const testAuth = () => {

        axios.get("http://127.0.0.1:8000/authe/test/", {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}` 
            }
        }).then(response => console.log(response.data));
    }
    const getCategories = () => {
        axios.get("http://127.0.0.1:8000/market/categories/", {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}` 
            }
        }).then(response => setCategories(response.data));
    }
    getCategories();

    return (
        <header id="market-main-header">
            <div>
                <span id="market-main-header-logo" onClick={() => navigate(MARKET_MAIN_ROUTE)}>
                    <img src={marketLogo} alt="" />
                </span>
                <button id="market-main-header-catalog-btn">
                    <img src={bugerMenuIcon} alt="" />
                    <p>Каталог</p>
                </button>

                <div id="search-bar">
                    <input type="text" placeholder="Искать товары" />
                    <button type="button">Найти</button>
                </div>

                <div id="icons">
                    <span className="header-icons" onClick={() => navigate(PLUS_MAIN_ROUTE)}>
                        <img src={plusIcon} alt="" />
                        <p>Баллы</p>
                    </span>
                    <span className="header-icons">
                        <div><svg data-tid="d8e914e5 5f4174f0" data-tid-prop="5f4174f0" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.0002 8.79341L6.70373 6.67341H6.70473L11.9992 4.55342L17.2967 6.67341L12.0002 8.79341ZM20.3405 5.73101L12.3724 2.54177C12.1332 2.44604 11.8662 2.44604 11.627 2.54177L3.63058 5.74234C3.19743 5.9155 2.98743 6.31528 3.00058 6.70817V17.3286C3.00063 17.5289 3.06067 17.7247 3.17296 17.8906C3.28526 18.0566 3.44467 18.1851 3.63066 18.2596L11.6271 21.4602C11.7793 21.5212 11.9441 21.544 12.1072 21.5265C12.2086 21.5156 12.3074 21.4894 12.4003 21.449L20.3689 18.2596C20.5551 18.1852 20.7147 18.0567 20.8272 17.8908C20.9397 17.7248 20.9999 17.529 21 17.3285V6.67333C21 6.61264 20.9945 6.5523 20.9836 6.49301C20.9331 6.20788 20.7619 5.94217 20.4699 5.78885C20.4281 5.76652 20.3849 5.7472 20.3405 5.73101ZM5.00721 8.15548L7.36766 9.10025L10.997 10.5532L10.997 19.0472L5.00721 16.6493V8.15548ZM18.9934 8.15522L13.0036 10.5531L13.0036 19.0472L18.9934 16.6493V8.15522Z" fill="#222222"></path></svg></div>
                        <p>Заказы</p>
                    </span>
                    <span className="header-icons" onClick={testAuth}>
                        <div><svg data-tid="e6dd9446 febe89cc" data-tid-prop="febe89cc" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.36693C10.675 3.27975 9.24521 2.71991 7.72945 2.71991C4.56517 2.71991 2 5.28506 2 8.44934C2 12.7785 5.19725 16.9814 11.4484 21.1143L11.9998 21.4789L12.5513 21.1143C18.8026 16.9814 22 12.7785 22 8.44934C22 5.28505 19.4349 2.71991 16.2706 2.71991C14.7548 2.71991 13.325 3.27975 12 4.36693ZM4 8.44934C4 6.38963 5.66973 4.71991 7.72945 4.71991C8.95344 4.71991 10.132 5.27022 11.296 6.42424L12 7.12225L12.7041 6.42423C13.8681 5.27022 15.0466 4.71991 16.2706 4.71991C18.3303 4.71991 20 6.38962 20 8.44934C20 11.8468 17.3766 15.4058 11.9999 19.0755C6.62334 15.4058 4 11.8468 4 8.44934Z"></path></svg></div>
                        <p>Избранное</p>
                    </span>
                    <span className="header-icons">
                        <div><svg data-tid="a8afce77 1f394573" data-tid-prop="1f394573" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.0164 15.792C16.7535 15.792 17.4604 16.0848 17.9816 16.606C18.5028 17.1272 18.7956 17.8341 18.7956 18.5712C18.7956 19.3083 18.5028 20.0152 17.9816 20.5364C17.4604 21.0576 16.7535 21.3504 16.0164 21.3504C15.2793 21.3504 14.5724 21.0576 14.0512 20.5364C13.53 20.0152 13.2372 19.3083 13.2372 18.5712C13.2372 17.8341 13.53 17.1272 14.0512 16.606C14.5724 16.0848 15.2793 15.792 16.0164 15.792ZM16.0164 17.532C15.7408 17.532 15.4764 17.6415 15.2815 17.8364C15.0867 18.0313 14.9772 18.2956 14.9772 18.5712C14.9772 18.8468 15.0867 19.1111 15.2815 19.306C15.4764 19.5009 15.7408 19.6104 16.0164 19.6104C16.292 19.6104 16.5563 19.5009 16.7512 19.306C16.9461 19.1111 17.0556 18.8468 17.0556 18.5712C17.0556 18.2956 16.9461 18.0313 16.7512 17.8364C16.5563 17.6415 16.292 17.532 16.0164 17.532ZM5.48037 15.792C6.21746 15.792 6.92436 16.0848 7.44556 16.606C7.96676 17.1272 8.25957 17.8341 8.25957 18.5712C8.25957 19.3083 7.96676 20.0152 7.44556 20.5364C6.92436 21.0576 6.21746 21.3504 5.48037 21.3504C4.74328 21.3504 4.03638 21.0576 3.51518 20.5364C2.99398 20.0152 2.70117 19.3083 2.70117 18.5712C2.70117 17.8341 2.99398 17.1272 3.51518 16.606C4.03638 16.0848 4.74328 15.792 5.48037 15.792ZM5.48037 17.532C5.20476 17.532 4.94043 17.6415 4.74555 17.8364C4.55066 18.0313 4.44117 18.2956 4.44117 18.5712C4.44117 18.8468 4.55066 19.1111 4.74555 19.306C4.94043 19.5009 5.20476 19.6104 5.48037 19.6104C5.75599 19.6104 6.02031 19.5009 6.2152 19.306C6.41009 19.1111 6.51957 18.8468 6.51957 18.5712C6.51957 18.2956 6.41009 18.0313 6.2152 17.8364C6.02031 17.6415 5.75599 17.532 5.48037 17.532ZM5.69037 5.3952L7.87197 12.8472L16.2276 11.2596C16.8953 11.1327 17.4977 10.7768 17.9311 10.2532C18.3644 9.72964 18.6014 9.07124 18.6012 8.3916V5.3952H5.69037ZM5.16237 3.5952H20.4024V8.3916C20.4024 9.49037 20.0189 10.5547 19.3181 11.4009C18.6173 12.2472 17.6431 12.8224 16.5636 13.0272L6.60357 14.922L2.77197 1.8348L4.49997 1.3284L5.16237 3.5952Z"></path></svg></div>
                        <p>Корзина</p>
                    </span>
                    {
                        localStorage.getItem("token") ?
                        <button className="header-avatar">
                            <img src={yaAvatar} alt="" />
                            <AvatarDrop />
                        </button>
                        :
                        <a href={AUTH_ROUTE} className="header-login-btn">Войти</a>
                    }
                </div>
            </div>
            <div>
                <span id="location">
                    <div><svg data-tid="f3e340ba 29675e42" data-tid-prop="29675e42" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 22.0361C6.98081 16.9804 4.47122 12.7992 4.47122 9.49265C4.47122 5.33463 7.84197 1.96388 12 1.96388C16.158 1.96388 19.5288 5.33463 19.5288 9.49265C19.5288 12.7992 17.0192 16.9804 12 22.0361ZM6.27122 9.49265C6.27122 11.9434 8.14899 15.3046 12 19.4407C15.851 15.3046 17.7288 11.9434 17.7288 9.49265C17.7288 6.32874 15.1639 3.76388 12 3.76388C8.83608 3.76388 6.27122 6.32874 6.27122 9.49265ZM8.39999 9.49265C8.39999 7.50443 10.0118 5.89265 12 5.89265C13.9882 5.89265 15.6 7.50443 15.6 9.49265C15.6 11.4809 13.9882 13.0927 12 13.0927C10.0118 13.0927 8.39999 11.4809 8.39999 9.49265ZM12 7.69265C11.0059 7.69265 10.2 8.49854 10.2 9.49265C10.2 10.4868 11.0059 11.2927 12 11.2927C12.9941 11.2927 13.8 10.4868 13.8 9.49265C13.8 8.49854 12.9941 7.69265 12 7.69265Z"></path></svg></div>
                    <p>Алматы</p>
                </span>
                <div id="categories">
                    {categories.map(ctgr => (
                        <a key={ctgr.id} href={CATEGORY_ROUTE + '/' + ctgr.id}>{ctgr.name}</a>
                    ))}
                </div>
                <span>
                    <a href={MARKET_MAIN_ROUTE}>Покупайте как юрлицо</a>
                </span>
            </div>
        </header>
    );
}

export default MarketMainHeader;