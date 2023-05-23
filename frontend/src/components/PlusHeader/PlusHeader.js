import React from "react";

import "./PlusHeader.css";
import yaTextLogo from "../../images/ya_text_logo.svg";
import plusCircleIcon from "../../images/plus-circle.svg";
import plusTextImg from "../../images/plus-text.svg";
import bugerMenuIcon from "../../images/burger_menu.svg";
import yaAvatar from "../../images/ya_avatar.png";
import AvatarDrop from "../AvatarDrop/AvatarDrop";
import { AUTH_ROUTE } from "../../utils/consts";

const PlusHeader = () => {
    return (
        <header id="plus-header">
            <div>
                <img src={yaTextLogo} alt="" />
                <img src={plusCircleIcon} alt="" />
                <img src={plusTextImg} alt="" />
            </div>
            <div>
                <span>
                    <img src={bugerMenuIcon} alt="" />
                    <p>Меню</p>
                </span>
                <span>
                    {
                        localStorage.getItem("user") ?
                        <button className="header-avatar">
                            <img src={yaAvatar} alt="" />
                            <AvatarDrop />
                        </button>
                        :
                        <a href={AUTH_ROUTE} className="header-login-btn">Войти</a>
                    }
                </span>
            </div>
        </header>
    );
}

export default PlusHeader;