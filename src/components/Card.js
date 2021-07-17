function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/images/heart-white.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/images/sneakers/item-1.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="" />
                </button>
            </div>
        </div>
    );
}

export default Card;