import { Outlet } from "react-router-dom";
import { Header } from "../views/Header";

export function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}