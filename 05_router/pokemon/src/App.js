import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './page/Main';
import Pokemon from './page/Pokemon';
import PokemonDetail from './page/PokemonDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='list' element={<Pokemon />}>
            <Route index element={<Pokemon />} />
            <Route path=':id' element={<PokemonDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
