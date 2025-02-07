import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMenuByCode } from '../api/MenuApi';

function MenuDetail() {

    const [menu, setMenu] = useState({
        menuName: '', menuPrice: 0, categoryName: '', detail: {}
    });

    const { menuCode } = useParams();

    useEffect(() => {
        setMenu(getMenuByCode(menuCode))
        console.log(menuCode);
    }, [])
    return (
        <div>
            <h1>메뉴 이름 : {menu.menuName}</h1>
            <h3>메뉴 가격 : {menu.menuPrice}</h3>
            <h3>메뉴 가격 : {menu.categoryName}</h3>
            <h3>메뉴 가격 : {menu.detail.description}</h3>
        </div>
    );
}

export default MenuDetail;