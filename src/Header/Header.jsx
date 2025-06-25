import logo from '../assets/logo-calculator.svg';

function Header() {
    return (
        <header>
            <div className="header-logo">
                <img src={logo} alt="logo" draggable={false} />
            </div>
        </header>
    )
}

export default Header;