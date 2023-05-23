import React from "react";

import "./ReviewItem.css";
import starIcon from "../../images/star_icon.svg";
import yaAvatar from "../../images/ya_avatar.png";

const ReviewItem = (props) => {
    return (
        <div className="review--item">
            <div className="img-and-rating">
                <img src={props.image} alt="" />
                <div>
                    <span className="stars">
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                    </span>
                    <p>{props.header}</p>
                </div>
            </div>
            <div className="desc-and-author">
                <p>{props.desc}</p>
                <div>
                    <span>
                        <img src={yaAvatar} alt="" />
                    </span>
                    <span className="author">
                        <p>{props.author}</p>
                        <p>{props.ago}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ReviewItem;