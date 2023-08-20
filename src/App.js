import Card from './components/Card'
import Header from './components/Header'

function App() {
  return (
    <div className="wrapper clear">
      <div style={{display:'none'}}className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between"> Shopping cart
          <img className="removeBtn  cu-p" src="/img/btn-remove.svg" alt="remove" />
          </h2>

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
         <button className="greenButton">Make an order <img src="/img/arrow.svg" alt="arrow" /></button>
         </div>
        </div>
      </div>

      <Header />

      <div className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img className="" src="/img/search.svg" alt="search" />
            <input placeholder="Search..." type="text" />
          </div>
        </div>

        <div className="d-flex">
          <Card/>
        
        </div>
      </div>
    </div>
  );
}

export default App;
