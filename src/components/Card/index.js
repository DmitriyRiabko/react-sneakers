import React from 'react';
import styles from './Card.module.scss'

console.log(styles);

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = ()=>{
    setIsAdded(!isAdded)
  }

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
          <img className={styles.plus} src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"} alt="add" onClick={onClickPlus}/>
      </div>
    </div>
  );
}

export default Card;