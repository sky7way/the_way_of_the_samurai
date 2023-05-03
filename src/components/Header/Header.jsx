import style from './Header.module.css';

const Header = () => {
    return (
            <header className={style.header}>
                <img src='https://i.pinimg.com/originals/1e/c1/1a/1ec11a869384bc5e59625bac39b6a099.png' alt='logo' className={style.logo} />
            </header>
    );
}

export default Header;