import {Route, Routes} from "react-router-dom";
import {Layout} from "@/components/layout/Layout";
import {GeneratePages, Main, NotFound, PageInfo, PagesList} from "@/pages";


export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>} />
                    <Route path="/page/:id" element={<PageInfo/>} />
                    <Route path="/generatePages" element={<GeneratePages />} />
                    <Route path="/pageList" element={<PagesList />} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </>
    );
};
