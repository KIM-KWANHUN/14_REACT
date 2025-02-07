import { useState, useEffect } from 'react';
import { getMenuList } from '../api/MenuApi';
import MenuItem from '../items/MenuItem';

function Menu() {

    const [menuList, setMenuList] = useState([]);

    const menuStyle = () => {
        return {
            border: '1px solid black'
        };
    };

    useEffect(() => {
        setMenuList(getMenuList());
    }, [])
    return (
        <div>
            <table style={menuStyle()}>
                <tr style={menuStyle()}>
                    <th style={menuStyle()}>메뉴 이름</th>
                    <th style={menuStyle()}>메뉴 가격</th>
                    <th style={menuStyle()}>메뉴 종류</th>
                    <th style={menuStyle()}>메뉴 설명</th>
                </tr>
                {menuList.map(menu => <MenuItem key={menu.id} menu={menu} />)}
            </table>
        </div>
    );
}

export default Menu;