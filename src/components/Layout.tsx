import { Outlet } from "react-router";
import Header from "./Header";
import CartTab from "./CartTab";

const Layout = () => 
    <div className="bg-zinc-200">
        <main className="w-[1200px] max-w-full m-auto p-5">
            <Header />
            <Outlet />
        </main>
        <CartTab />
    </div>

export default Layout;