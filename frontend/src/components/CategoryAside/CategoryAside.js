import React from "react";

import "./CategoryAside.css";

const CategoryAside = () => {
    return (
        <aside id="category-aside">
            <div className="aside--item">
                <p>Цена ₸</p>
                <span>
                    <input type="text" placeholder="от" />
                    <input type="text" placeholder="до" />
                </span>
            </div>
            <div className="aside--item">
                <p>Срок доставки</p>
                <span>
                    <input type="radio" className="radio" name="delivery" />
                    <label htmlFor="delivery">До 5 дней</label>
                </span>
                <span>
                    <input type="radio" className="radio" name="delivery" />
                    <label htmlFor="delivery">Любой</label>
                </span>
            </div>
            <div className="aside--item">
                <p>Производитель</p>
                <span>
                    <input type="checkbox" className="checkbox" name="b1" />
                    <label htmlFor="b1">Company_1</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="b2" />
                    <label htmlFor="b2">Company_2</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="b3" />
                    <label htmlFor="b3">Company_3</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="b4" />
                    <label htmlFor="b4">Company_4</label>
                </span>
            </div>
            <div className="aside--item">
                <p>Состоние товара</p>
                <span>
                    <input type="checkbox" className="checkbox" name="new" />
                    <label htmlFor="new">Новый</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="resail" />
                    <label htmlFor="resail">Ресейл</label>
                </span>
            </div>
            <div className="aside--item">
                <p>Внешний вид</p>
                <span>
                    <input type="checkbox" className="checkbox" name="like-new" />
                    <label htmlFor="like-new">Как новый</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="excelent" />
                    <label htmlFor="excelent">Отличный</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="good" />
                    <label htmlFor="good">Хороший</label>
                </span>
            </div>

            <button>Все фильтры</button>
        </aside>
    );
}

export default CategoryAside;