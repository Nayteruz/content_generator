import {Outlet} from 'react-router-dom';
import {Header, Footer, Content} from '../containers';

export const Layout = () => <>
  <Header/>
  <Content>
    <Outlet/>
  </Content>
  <Footer/>
</>;