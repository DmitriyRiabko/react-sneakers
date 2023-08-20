import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'


const arr = [{
  name :"Men's sneakers Nike Blazer Mid Suede",
  price :"139.00"
},
{
  name :"Men's sneakers Nike Air Max 270",
  price :"160.00"
},
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
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
          
        <Card title={arr[0].name}
              price={arr[0].price} 
              imgUrl = "/img/sneakers/1.jpg"
        />
          <Card title={arr[1].name}
              price={arr[1].price} 
              imgUrl = "/img/sneakers/2.jpg"
        />

          
        </div>
      </div>
    </div>
  );
}

export default App;
