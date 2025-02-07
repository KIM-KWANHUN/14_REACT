import { NavLink } from 'react-router-dom';
function MenuItem({ menu }) {

    const menuStyle = () => {
        return {
            border: '1px solid black'
        };
    };

    return (
        <tr>
            <td style={menuStyle()}><NavLink to={`/menu/${menu.menuCode}`}>{menu.menuName}</NavLink></td>
            <td style={menuStyle()}>{menu.menuPrice}</td>
            <td style={menuStyle()}>{menu.categoryName}</td>
            <td style={menuStyle()}>{menu.detail.description}</td>
        </tr>
    );
}

export default MenuItem;