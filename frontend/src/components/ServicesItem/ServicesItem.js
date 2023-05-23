import React from "react";
// import { useNavigate } from "react-router-dom";
import { MARKET_MAIN_ROUTE, SERVICES_ROUTE, TRAVEL_MAIN_PAGE_ROUTE } from "../../utils/consts";

import "./ServicesItem.css";


const ServicesItem = (props) => {

    if (props.header === "Маркет") {
        return (
            <a className="service--item" href={MARKET_MAIN_ROUTE}>
                <img src={props.img} alt="" />
                <span>
                    <h4>{props.header}</h4>
                    <p>{props.desc}</p>
                </span>
            </a>
        );
    } else if (props.header === "Путешествия") {
        return (
            <a className="service--item" href={TRAVEL_MAIN_PAGE_ROUTE}>
                <img src={props.img} alt="" />
                <span>
                    <h4>{props.header}</h4>
                    <p>{props.desc}</p>
                </span>
            </a>
        );
    }

    return (
        <a className="service--item" href={SERVICES_ROUTE}>
            <img src={props.img} alt="" />
            <span>
                <h4>{props.header}</h4>
                <p>{props.desc}</p>
            </span>
        </a>
    );
}

export default ServicesItem;