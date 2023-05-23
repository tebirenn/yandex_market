import React from "react";
import { PLUS_MAIN_ROUTE } from "../../utils/consts";

import "./PlusFooter.css";

const PlusFooter = () => {


    return (
        <footer id="plus-footer">
            <div>
                <p>Условия подписки: yandex.ru/legal/yandex_plus_conditions/. Общий срок проведения акции с 05.12.2022г. по 10.01.2023г. Акция и розыгрыш только для пользователей с активной подпиской Яндекс Плюс или иной, ее включающей. Подробности об организаторе акции, правилах ее проведения, количестве подарков и призов, сроках, месте и порядке их получения см. yandex.kz/legal/plus_newyear_kz. Условия программы лояльности «Яндекс Плюс Кешбэк»: yandex.ru/legal/plus_loyalty. Для использования баллов требуется активная подписка Яндекс Плюс (или иная, ее включающая). Баллы не являются денежными средствами, при использовании баллов предоставляется скидка. Близкие — члены семьи пользователя, проживающие совместно с ним.</p>
                <p>Проект компаний <a href={PLUS_MAIN_ROUTE}>Яндекс</a></p>
            </div>
            <div className="links">
                <span>
                    <a href={PLUS_MAIN_ROUTE}>Условия подписки</a>
                    <a href={PLUS_MAIN_ROUTE}>Условия привилегий</a>
                    <a href={PLUS_MAIN_ROUTE}>Условия кэшбека</a>
                    <a href={PLUS_MAIN_ROUTE}>Служба поддержки</a>
                    <a href={PLUS_MAIN_ROUTE}>Плюс для бизнеса</a>
                    <a href={PLUS_MAIN_ROUTE}>Новости сервиса</a>
                </span>
                <a href={PLUS_MAIN_ROUTE}>
                    Руский
                    <img src="https://plus.yandex.ru/svgs/langs/ru.svg" alt="" />    
                </a>
            </div>
            <p>© 2018–2022 ООО «Яндекс» 18+</p>
        </footer>
    );
}

export default PlusFooter;