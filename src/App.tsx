import {Route, Routes} from "react-router-dom";
import {Layout} from "@/components/layout/Layout";
import {Main, NotFound, PageInfo} from "@/pages";
import GeneratePages from "@/pages/generatePages";
import PagesList from "@/pages/pagesList";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>} />
                    <Route path="/page" element={<PageInfo/>} />
                    <Route path="/generatePages" element={<GeneratePages />} />
                    <Route path="/pageList" element={<PagesList />} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </>
    );
};
