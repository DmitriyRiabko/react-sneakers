import React from 'react'
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'






function App() {
  const [items,setItems] = React.useState([])
  const [cartItems,setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')


  React.useEffect(()=>{
    axios.get("https://64ecf64df9b2b70f2bfb2ca5.mockapi.io/items")
    .then(res => {setItems(res.data)})
      }, [])

  const onAddToCart = (obj)=>{
    setCartItems([...cartItems ,obj])
  }


  const onChangeSearchInput = (event)=>{
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      <Header onClickCart={()=>setCartOpened(true)}/>
      {cartOpened && <Drawer items={cartItems} onClose={()=>setCartOpened(false)}/>}

      <div className="content p-40">
        <div className="mb-40 d-flex justify-between align-center ">
          <h1 style={ searchValue ? {color:"#6A5ACD"} : null}> {searchValue ? `Search by: ${searchValue}`: 'All Sneakers'}</h1>
          <div className="search-block">
            <img className="" src="/img/search.svg" alt="search" />
            {searchValue && <img
            onClick={() => setSearchValue('')}
            className="clear  cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." type="text" />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item,index) =>
          <Card key={index}
              title={item.title}
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
