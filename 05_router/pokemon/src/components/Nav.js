import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <div>
            <ul>
                <li><NavLink to='/'>메인</NavLink></li>
                <li><NavLink to='/list'>전체조회</NavLink></li>
            </ul>
        </div>
    );
}

export default Nav;