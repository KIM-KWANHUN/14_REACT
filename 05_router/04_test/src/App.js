import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout.js';
import Menu from './pages/Menu.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Menu />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
