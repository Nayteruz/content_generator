import {Route, Routes} from "react-router-dom";
import {Main, PageInfo, NotFound} from "./pages";
import {Layout} from "./components/layout/Layout";


export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>} />
                    <Route path="/page" element={<PageInfo/>} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </>
    );
};
