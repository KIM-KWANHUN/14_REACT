import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <div>
            <h1>NavBar</h1>
            <ul>
                <li><NavLink to='/'>메인</NavLink></li>
                <li><NavLink to='menu'>메뉴전체조회</NavLink></li>
            </ul>
        </div>
    );
}

export default Nav;