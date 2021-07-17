import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
    const onClickButton = () => {
        alert(props.title);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/images/heart-white.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="" />
            <p>{props.title}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button" onClick={onClickButton}>
                    <img width={11} height={11} src="/images/plus.svg" alt="" />
                </button>
            </div>
        </div>
    );
}

export default Card;