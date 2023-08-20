function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unlike" />
      </div>
      <img
        className="d-flex justify-center"
        src="/img/sneakers/1.jpg"
        alt="sneakers_1"
        width={133}
        height={112}
      />
      <h5>Men's sneakers Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>$ 139.00</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="add" />
        </button>
      </div>
    </div>
  );
}

export default Card;