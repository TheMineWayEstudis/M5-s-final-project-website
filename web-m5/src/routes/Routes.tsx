import {
    Routes as RouterRoutes,
    Route as RouterRoute,
    BrowserRouter,
} from "react-router-dom";
import BaseLayout from "../view/shared/Layout/BaseLayout";
import Route from "./Route";

export default function Routes() {
    return (
        <BrowserRouter>
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
        component: <></>
    },
];