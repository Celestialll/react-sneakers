function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex align-center justify-between mb-20">Корзина<img className="closeBtn" src="/images/btn-remove.svg" alt="Close" /></h2>
                <div className="cartItems mb-40">
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" width={70} height={70} src="/images/sneakers/item-1.jpg" alt="" />
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" width={70} height={70} src="/images/sneakers/item-2.jpg" alt="" />
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove" />
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex mb-20" >
                            <span>Итого:</span>
                            <div>

                            </div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex mb-20">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/images/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;