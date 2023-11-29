import {Outlet} from "react-router-dom";
import {Header, Footer, Content} from "../containers";

export const Layout = () => {
    return <>
        <Header/>
        <Content>
            <Outlet/>
        </Content>
        <Footer/>
    </>
}