import boxStyle from './Menu.module.css';
import { useEffect, useState } from 'react';
import { getMenuList } from '../apis/MenuAPI';
import MenuItem from '../items/MenuItem';
import {useNavigate} from 'react-router-dom';

// 메뉴 전체 조회
function Menu() {

    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    // input 창
    const onChangeHandler = (e) => {
        setSearchValue(e.target.value)
    }

    // 검색하기 버튼 누르면 다른 페이지로 검색 결과 보여줄 것이다.
    const onClickHandler = () => {
        // 우리가 관리하는 값을 쿼리스트링으로 전달
        navigate(`/menu/search?menuName=${searchValue}`)
    }

    useEffect(() => {

        // menu 컴포넌트는 마운트 되는 시점에 데이터를 가져와 state 에 담아 줄 것이다.
        setMenuList(getMenuList());
    }, [])
    return (
        <>
            <h1>하이미디어 레스토랑 메뉴!!</h1>
            <div>
                <input type="search" name="menuName" onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>메뉴 이름 검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
            </div>
        </>
    );
}

export default Menu;