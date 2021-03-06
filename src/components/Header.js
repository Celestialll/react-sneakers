function Header() {
    return(
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img className="mr-15" width={40} height={40} src="/images/logo.svg" alt="" />
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 d-flex align-center">
                    <img className="mr-15" width={18} height={18} src="/images/cart.svg" alt="" />
                    <span>1500 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/images/user.svg" alt="" />
                </li>
            </ul>
        </header>
    );
}

export default Header;