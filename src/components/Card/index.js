import styles from './Card.module.scss'

console.log(styles);

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="/img/unliked.svg" alt="unlike" />
      </div>
      <img
        className="d-flex justify-center"
        src={props.imgUrl}
        alt="sneakers_1"
        width={133}
        height={112}
      />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>$ {props.price}</b>
        </div>
        <button className="button" onClick={props.onPlus}>
          <img width={11} height={11} src="/img/plus.svg" alt="add" />
        </button>
      </div>
    </div>
  );
}

export default Card;