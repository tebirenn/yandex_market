import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import PlusFooter from "../../components/PlusFooter/PlusFooter";
import PlusHeader from "../../components/PlusHeader/PlusHeader";
import { MARKET_MAIN_ROUTE } from "../../utils/consts";

import "./SubPage.css";

const SubPage = () => {

    let user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    function to_sub() {
        const cardNumberInput = document.getElementById("card-number");
        const cardDateInput = document.getElementById("card-date");
        const cardCVVInput = document.getElementById("cvv");
        let cardNumber = "";
        let cardDate = "";
        let cardCVV = "";

        if (cardNumberInput && cardDateInput && cardCVVInput) {
            cardNumber = cardDateInput.value;
            cardDate = cardDateInput.value;
            cardCVV = cardCVV.value;
        }

        // let checksum = 0;
        // let j = 1;

        // for (let i = cardNumber.length - 1; i >= 0; i--) {
        //     let calc = 0;
        //     calc = Number(cardNumber.charAt(i)) * j;

        //     if (calc > 9) {
        //         checksum = checksum + 1;
        //         calc = calc - 10;
        //     }

        //     checksum = checksum + calc;

        //     if (j === 1) {
        //         j = 2;
        //     } else {
        //         j = 1;
        //     }
        // }
    
        if (cardNumber > 0 && cardDate.length > 0 && cardCVV.length > 0) {
            axios.post("http://127.0.0.1:8000/api/users/changeSub", {user_id: user.user_id});
            navigate(MARKET_MAIN_ROUTE);
        } else {
            const errorP = document.getElementById("errorp");
            if (errorP) {
                errorP.innerHTML = "Вы что то ввели не так";
            }
        }
    }

    return (
        <div id="sub-page">
            <PlusHeader />

            <section>
                <h1>Сейчас вы платите <span>1499 ₸</span></h1>
                <div id="form">
                    <div>
                        <input id="card-number" placeholder="Номер карты" />
                        <input id="card-date" placeholder="ММ / ГГ" />
                    </div>
                    <div>
                        <p>Последние цифры<br/>на обороте карты</p>
                        <input id="cvv" placeholder="CVV" />
                    </div>
                </div>
                <p id="errorp"></p>

                <button onClick={to_sub}>Оформить подписку</button>
            </section>

            <PlusFooter />
        </div>
    );
}

export default SubPage;