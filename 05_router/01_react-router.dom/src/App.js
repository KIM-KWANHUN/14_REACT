/*
  최초 프로젝트 생성 시
  프로젝트 만들고 싶은 폴더에 오른쪽 터미널 버튼 누르고
  1. npx create-react-app 이후 기본세팅
  2. src 폴더에 App.js, index.js 빼고 지우기
  3. App.js, index.js 에 불필요한 import와 코드 지워버리기
  4. npm install react-router-dom@6 으로 의존성 추가하기

  라우팅이란?
  어떠한 요청을 어디로 안내 및 매핑할 것인지를 정해놓고
  진행 하는것.
  리액트는 요청에 따라 요청에 매핑 된 컴포넌트를 렌더링한다.
  /menu/detail => <Detail/> 이렇게 url에 따라 컴포넌트를 매핑한다.
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'; // import 받을때 쓰는 구문
import About from './pages/About'; // import 받을때 쓰는 구문
import Menu from './pages/Menu'; // import 받을때 쓰는 구문

/* react-router-dom 에서 제공하는
      - BrowserRouter : 라우팅이 필요한 컴포넌트를 감싸는 컴포넌트
      - Routes : Route 들을 묶어주는 단위
      - Route : url 요청 주소와 컴포넌트를 매칭 해주는 단위 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Main/>}/> 여기있는 부분이나 밑에 꺼를 쓰면된다. */}
        <Route path='/' element={<Main />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
