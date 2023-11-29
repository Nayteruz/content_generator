import {Route, Routes} from "react-router-dom";
import {Layout} from "@/components/layout/Layout";
import {Main, NotFound, PageInfo} from "@/pages";
import {useStore} from "@/hooks/useStore";
import {useEffect} from "react";


export const App = () => {

    const {page} = useStore();
    const defaultPages = [
        {id: '1', name: 'Главная', content: ''},
        {id: '2', name: 'О нас', content: ''},
        {id: '3', name: 'Контакты', content: ''},
    ]

    useEffect(() => {
        page.setPages(defaultPages)
    }, []);

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
