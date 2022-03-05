import {
    Routes as RouterRoutes,
    Route as RouterRoute,
    BrowserRouter,
} from "react-router-dom";
import ComputerUsage from "../view/computer/ComputerUsage";
import MainScreen from "../view/mainScreen/MainScreen";
import MarketStudy from "../view/marketStudy/MarketStudy";
import BaseLayout from "../view/shared/Layout/BaseLayout";
import RequiredTools from "../view/tools/RequiredTools";
import { Route } from "./Route";

export default function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <RouterRoutes>
                {routes.map((route: { route: Route, component: JSX.Element }) => (
                    <RouterRoute path={route.route.getPath()} element={
                        <BaseLayout>
                            {route.component}
                        </BaseLayout>
                    } />
                ))}
            </RouterRoutes>
        </BrowserRouter>
    );
}

const routes: { route: Route, component: JSX.Element }[] = [
    {
        route: Route.fromPath('/'),
        component: <MainScreen/>,
    },
    {
        route: Route.fromPath('/needs'),
        component: <ComputerUsage/>,
    },
    {
        route: Route.fromPath('/computer/market-study'),
        component: <MarketStudy/>,
    },
    {
        route: Route.fromPath('/computer/tools'),
        component: <RequiredTools/>,
    },
];