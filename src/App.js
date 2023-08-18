function App() {
  return (
    <div className="wrapper clear">
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
              <span> 100 USD</span>
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
          <img src="/img/sneakers/1.jpg" alt="sneakers_1" width={133} height={112}/>
          <h5>Men's sneakers Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>139 USD</b>
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
              <b>156 USD</b>
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
              <b>110 USD</b>
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
              <b>89 USD</b>
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
