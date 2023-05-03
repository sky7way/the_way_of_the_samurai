import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const activeLink = ({isActive}) => isActive ? style.active : '';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' className={activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' className={activeLink}>Messages</NavLink>
            </div>
             <div className={style.item}>
                <NavLink to='/news' className={activeLink}>News</NavLink>
            </div>
             <div className={style.item}>
                <NavLink to='/music' className={activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' className={activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;