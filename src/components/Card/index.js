import React from 'react';
import styles from './Card.module.scss'

function Card({imgUrl,title,price,onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false)
  const [isLiked, setIsLiked] = React.useState(false)

  const onClickPlus = ()=>{
    onPlus({title,imgUrl,price})
    setIsAdded(!isAdded)
  }


  const onClickFavorite = ()=>{
    onFavorite({title,imgUrl,price})
    setIsLiked(!isLiked)
  }
  

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src ={isLiked ? '/img/liked.svg' :"/img/unliked.svg"}  
         />
      </div>
      <img
        className="d-flex "
        src={imgUrl}
        alt="sneakers_1"
        width={133}
        height={112}
      />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>$ {price}</b>
        </div>
          <img className={styles.plus} 
          src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"} 
          alt="add" 
          onClick={onClickPlus}
         />
      </div>
    </div>
  );
}

export default Card;