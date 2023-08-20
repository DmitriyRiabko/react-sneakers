function Card(props) {
  return (
    <div className="card">
      <div className="favorite">
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
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="add" />
        </button>
      </div>
    </div>
  );
}

export default Card;