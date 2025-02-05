import { useState, useEffect } from 'react';
import MenuItem from '../items/MenuItem';
import { GetMenuList } from '../apis/MenuAPI';

function Menu() {

    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        setMenuList(GetMenuList())
    }, []);

    return (
        <div>
            <h1>메뉴리스트</h1>
            {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
        </div>
    );
}

export default Menu;