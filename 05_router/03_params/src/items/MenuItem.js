import ItemStyle from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';

function MenuItem({ menu }) {
    return (
        <NavLink to={`/menu/${menu.menuCode}`}>
            <div className={ItemStyle.MenuItem}>
                <h3>이름 : {menu.menuName}</h3>
                <h3>가격 : {menu.menuPrice}</h3>
                <h3>종류 : {menu.categoryName}</h3>
            </div>
        </NavLink>
    );
}

export default MenuItem;