import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./AvatarDrop.css";
import yaAvatar from "../../images/ya_avatar.png";
import exitIcon from "../../images/exit.svg";
import { MARKET_MAIN_ROUTE, PROFILE_ROUTE } from "../../utils/consts";
// import { MARKET_MAIN_ROUTE } from "../../utils/consts";
// import cubeIcon from "../../images/cube.svg";
// import heartIcon from "../../images/heart.svg";
// import returnIcon from "../../images/return.svg";
// import locationIcon from "../../images/location.svg";
// import settingsIcon from "../../images/settings.svg";

const AvatarDrop = () => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const userFullName = `${user.first_name} ${user.last_name}`;

    return (
        <div id="avatar-drop">
            <span id="avatar-drop-user" onClick={() => navigate(PROFILE_ROUTE)}>
                <div>
                    <img src={yaAvatar} alt="" />
                </div>
                <div>
                    <p>{userFullName}</p>
                </div> 
            </span>
            <span onClick={() => {
                localStorage.clear();
                navigate(MARKET_MAIN_ROUTE);
                window.location.reload(false);
            }}>
                <div>
                    <img className="exit-icon" src={exitIcon} alt="" />
                </div>
                <div>
                    <p>Выйти</p>
                </div> 
            </span>
            {/* <span>
                <img src={cubeIcon} alt="" />
                <p>Заказы</p>
            </span>
            <span>
                <img src={returnIcon} alt="" />
                <p>Возвраты</p>
            </span>
            <span>
                <img src={heartIcon} alt="" />
                <p>Избранное</p>
            </span>
            <span>
                <img src={locationIcon} alt="" />
                <p>Алматы</p>
            </span>
            <span>
                <img src={settingsIcon} alt="" />
                <p>Настройки</p>
            </span> */}
        </div>
    );
}

export default AvatarDrop;