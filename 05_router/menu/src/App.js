import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './page/Main';
import Menu from './page/Menu';
import MenuDetail from './page/MenuDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='main' element={<Main />} />
          <Route index element={<Main />} />
          <Route path='menu'>
            <Route index element={<Menu />} />
            <Route path=':menuCode' element={<MenuDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
