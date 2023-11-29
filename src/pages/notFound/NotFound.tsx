import {Link} from "react-router-dom";

export const NotFound = () => {

    return <>
        <h1>Страница не найдена</h1>
        Перейти на  <Link to="/" >главную</Link>
    </>
}