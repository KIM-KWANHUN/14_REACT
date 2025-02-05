import { NavLink } from "react-router-dom";

function MenuItem({ menu }) {

    return (
        <NavLink>
            <h4>이름 : {menu.menuName}</h4>
            <h4>가격 : {menu.menuPrice}</h4>
            <h4>종류 : {menu.categoryName}</h4>
        </NavLink>
    );
}

export default MenuItem;