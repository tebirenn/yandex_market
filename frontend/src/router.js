import ServicesPage from "./pages/Services/ServicesPage";
import MarketMainPage from "./pages/MarketMainPage/MarketMainPage";
import TravelMainPage from "./pages/TravelMainPage/TravelMainPage";
import AuthPage from "./pages/AuthPage/AuthPage";

import { AUTH_ROUTE, CATEGORY_ROUTE, HOTELS_ROUTE, MARKET_MAIN_ROUTE, PAYMENT_ROUTE, PLUS_MAIN_ROUTE, PRODUCT_DETAIL_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, SERVICES_ROUTE, SUB_ROUTE, TRAVEL_MAIN_PAGE_ROUTE } from "./utils/consts";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import PlusPage from "./pages/PlusPage/PlusPage";
import HotelsPage from "./pages/HotelsPage/HotelsPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import SubPage from "./pages/SubPage/SubPage";

export const publicRoutes = [
    {
        path: SERVICES_ROUTE,
        Component: ServicesPage
    },
    {
        path: MARKET_MAIN_ROUTE,
        Component: MarketMainPage
    },
    {
        path: TRAVEL_MAIN_PAGE_ROUTE,
        Component: TravelMainPage
    },
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTER_ROUTE,
        Component: RegisterPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: CATEGORY_ROUTE + "/:categoryID",
        Component: CategoryPage
    },
    {
        path: PRODUCT_DETAIL_ROUTE + "/:product_id",
        Component: ProductDetailPage
    },
    {
        path: PLUS_MAIN_ROUTE,
        Component: PlusPage
    },
    {
        path: HOTELS_ROUTE,
        Component: HotelsPage
    },
    {
        path: PAYMENT_ROUTE,
        Component: PaymentPage
    },
    {
        path: SUB_ROUTE,
        Component: SubPage
    },
]