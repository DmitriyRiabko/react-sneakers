function Drawer(props) {
  return (
    <div  className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          {" "}
          Shopping cart
          <img
            onClick={props.onClose}
            className="removeBtn  cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>

        <div className="items flex">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men's sneakers Nike Blazer Mid Suede</p>
              <b>$ 139.00</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/3.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men's sneakers Nike Blazer Mid Suede</p>
              <b>$ 110.00</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>$ 249.00</b>
            </li>
            <li>
              <span>Duty 5%:</span>
              <div></div>
              <b>$ 12.45</b>
            </li>
          </ul>
          <button className="greenButton">
            Make an order <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
