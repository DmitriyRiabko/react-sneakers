import React from 'react'

import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'






function App() {
  const [items,setItems] = React.useState([])
  const [cartItems,setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)


  React.useEffect(()=>{
    fetch("https://64ecf64df9b2b70f2bfb2ca5.mockapi.io/items")
    .then(res => res.json())
    .then(json => setItems(json))
      }, [])

  const onAddToCart = (obj)=>{
    setCartItems([...cartItems ,obj])
  }

  return (
    <div className="wrapper clear">
      <Header onClickCart={()=>setCartOpened(true)}/>
      {cartOpened && <Drawer items={cartItems} onClose={()=>setCartOpened(false)}/>}

      <div className="content p-40">
        <div className="mb-40 d-flex justify-between align-center ">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img className="" src="/img/search.svg" alt="search" />
            <input placeholder="Search..." type="text" />
          </div>
        </div>

        <div className="d-flex flex-wrap justify-between">
          {items.map(item =>
          <Card title={item.name}
              price={item.price} 
              imgUrl ={item.imageUrl}
              onFavorite ={()=> console.log("added to favorite")}
              onPlus={(obj)=> onAddToCart(item)}/>
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
