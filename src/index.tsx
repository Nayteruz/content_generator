import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {App} from './App';
import './index.scss';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found!');
}

const container = createRoot(root);

container.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);