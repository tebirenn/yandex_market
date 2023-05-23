import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PlusHeader from "../../components/PlusHeader/PlusHeader";
import PlusFooter from "../../components/PlusFooter/PlusFooter";

import "./PlusPage.css";
import yaAvatar from "../../images/ya_avatar.png";
import leftArrowIcon from "../../images/left_arrow.svg";
import plusDarkIcon from "../../images/plus-dark.svg";
import { SUB_ROUTE } from "../../utils/consts";

const PlusPage = () => {

    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("user"));

    axios.get("http://localhost:8000/api/users/" + user.user_id)
        .then(response => getUser(response.data));

    const getUser = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
    }

    return (
        <div id="plus-main">
            <PlusHeader />

            <div className="main">
                <aside>
                    <div className="footer-aside-item">
                        <span>
                            <p>Плюс <br/> {user.sub_plus ? "Активен" : "Неактивен"}</p>
                            <img src={yaAvatar} alt="" />
                        </span>
                        <span>
                            <p>Управлять</p>
                            <img src={leftArrowIcon} alt="" />
                        </span>
                    </div>

                    {user.sub_plus ? 
                    <div className="footer-aside-item">
                        <span>
                            <h4>Баллы Плюса</h4>
                            <p>1 балл = 1 ₸ скидки</p>
                        </span>
                        <span>
                            <p>0</p>
                            <img src={plusDarkIcon} alt="" />
                        </span>
                    </div>
                    :
                    ""
                    }
                </aside>
                <section>
                    <div>
                        <h1>Мастерская подарков Плюса</h1>
                        <p>Помощники Плюса приготовили для вас подарки. Много подарков. Для каждого — разные</p>
                        <p>Оформите подписку и смотрите, какой подарок попадётся вам. А ещё смотрите Кинопоиск, слушайте Музыку и копите баллы Плюса за поездки и заказы</p>
                        {user.sub_plus ? <h6></h6> : <button onClick={() => navigate(SUB_ROUTE)}>1499₸ в месяц</button>}
                    </div>
                </section>
            </div>

            <PlusFooter />
        </div>
    );
}

export default PlusPage;