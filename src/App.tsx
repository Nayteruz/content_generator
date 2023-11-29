import {Route, Routes} from "react-router-dom";
import {Layout} from "@/components/layout/Layout";
import {Main, NotFound, PageInfo} from "@/pages";


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
