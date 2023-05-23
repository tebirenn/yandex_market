import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./RegisterPage.css";

import bg from "../../images/bg_login.jpg";
import yaLogo from "../../images/logo_yandex.png";
import arrowLeftIcon from "../../images/left_arrow.svg";
import { AUTH_ROUTE, MARKET_MAIN_ROUTE } from "../../utils/consts";
import EmailInput from "../../components/RegPageInputs/EmailInput";
import PersonalInput from "../../components/RegPageInputs/PersonalInput";
import UserNameInput from "../../components/RegPageInputs/UserNameInput";
import PasswordInput from "../../components/RegPageInputs/PasswordInput";
import axios from "axios";

const RegisterPage = () => {

    useEffect(() => {
        document.title = "Авторизация";
    }, []);

    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const formTitles = [
        "Введите email для создания Яндекс ID",
        "Укажите имя и фамилию",
        "Придумайте логин для Яндекс ID",
        "Придумайте пароль для Яндекс ID"
    ];

    const formInputs = () => {
        if (page === 0) {
            return <EmailInput formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <PersonalInput formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <UserNameInput formData={formData} setFormData={setFormData} />
        } else if (page === 3) {
            return <PasswordInput formData={formData} setFormData={setFormData} />
        } 
    }

    const regUser = () => {
        axios.post("http://localhost:8000/authe/user/", formData)
            .then(response => navigate(MARKET_MAIN_ROUTE));
            // .then(response => loginUser(response.data.status));
    }

    const loginUser = (data) => {
        if (data === 200) {
            axios.post("http://localhost:8000/authe/users/login", {login: formData.login, password: formData.password})
                .then(response => localStorage.setItem("user", JSON.stringify(response.data)));

            navigate(MARKET_MAIN_ROUTE);
            window.location.reload(false);
        }
    }

    return (
        <div id="reg-page">
            <img id="bg" src={bg} alt="" />
            <div id="form">
                <img src={yaLogo} alt="" />
                <p>{formTitles[page]}</p>
                {formInputs()}
                <button 
                    className="next-btn" 
                    type="button"
                    onClick={() => {
                        setPage((currPage) => currPage < formTitles.length-1 ? currPage + 1 : regUser());
                    }}
                >Далее</button>
                <a href={AUTH_ROUTE}>Уже есть аккаунт</a>
                <button 
                    className="go-back-btn" 
                    type="button" 
                    onClick={() => {
                        setPage((currPage) => currPage !== 0 ? currPage - 1 : navigate(MARKET_MAIN_ROUTE));
                    }}
                ><img src={arrowLeftIcon} alt="" /></button>
            </div>
            <p id="form-after">Яндекс ID — ключ от всех сервисов <br/><a href=".">Узнать больше</a></p>
            <footer>
                <a href={MARKET_MAIN_ROUTE}>Используйте режим инкогнито на чужом компьютере</a>
                <span>
                    <a href={MARKET_MAIN_ROUTE}>Ru</a>
                    <a href={MARKET_MAIN_ROUTE}>Справка и поддержка</a>
                    <p>© 2022, <a href={MARKET_MAIN_ROUTE}>Яндекс</a></p>
                </span>
            </footer>
        </div>
    );
}

export default RegisterPage;
