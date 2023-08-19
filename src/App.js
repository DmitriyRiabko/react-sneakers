function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30"> Shopping cart</h2>

          <div className="items flex">
          <div className="cartItem d-flex align-center mb-20">
              
              <div style={{backgroundImage:"url(/img/sneakers/1.jpg)"}} className="cartItemImg">

              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Men's sneakers Nike Blazer Mid Suede</p>
                <b>$ 139.00</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              
              <div style={{backgroundImage:"url(/img/sneakers/3.jpg)"}} className="cartItemImg">

              </div>
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
         <button>Make an order</button>
         </div>
        </div>
      </div>





      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneakers marketplace</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
              <span> $100</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt="user"/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img className="" src="/img/search.svg" alt="search" />
            <input placeholder="Search..." type="text" />
          </div>
        </div>



        <div className="d-flex">
        <div className="card">
          <div className="favorite">
            <img src="/img/unliked.svg" alt="unlike" />
          </div>
          <img className="d-flex justify-center" src="/img/sneakers/1.jpg" alt="sneakers_1" width={133} height={112}/>
          <h5>Men's sneakers Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>$ 139.00</b>
            </div>
            <button className="button">
              <img width={11}
                  height={11}
                  src="/img/plus.svg" alt="add" />
            </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/2.jpg" alt="sneakers_2" width={133} height={112}/>
          <h5>Men's sneakers Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>$ 156.00</b>
            </div>
            <button className="button">
              <img width={11}
                  height={11}
                  src="/img/plus.svg" alt="add" />
            </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/3.jpg" alt="sneakers_3" width={133} height={112}/>
          <h5>Men's sneakers Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>$ 110.00</b>
            </div>
            <button className="button">
              <img width={11}
                  height={11}
                  src="/img/plus.svg" alt="add" />
            </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/4.jpg" alt="sneakers_4" width={133} height={112}/>
          <h5>Men's sneakers Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>$ 89.00</b>
            </div>
            <button className="button">
              <img width={11}
                  height={11}
                  src="/img/plus.svg" alt="add" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
