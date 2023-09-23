import React from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'


import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'





function App() {
  const [items,setItems] = React.useState([])
  const [cartItems,setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')


  React.useEffect(()=>{
    axios.get("https://64ecf64df9b2b70f2bfb2ca5.mockapi.io/items")
    .then(res => {setItems(res.data)})
    axios.get("https://64ecf64df9b2b70f2bfb2ca5.mockapi.io/cart")
    .then(res => {setCartItems(res.data)})
      }, [])

  const onAddToCart = (obj)=>{
     axios.post("https://64ecf64df9b2b70f2bfb2ca5.mockapi.io/cart",obj)
    setCartItems([...cartItems ,obj])
  }

  const onRemoveItem = (id)=>{
    axios.delete(`https://64ecf64df9b2b70f2bfb2ca5.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
}

  const onAddToFavorite = (obj)=>{
    let storage  = JSON.parse(localStorage.getItem('favorites')) || []
    storage = [...storage, obj]
    localStorage.setItem('favorites', JSON.stringify(storage))
    setFavorites((prev) => [...prev, obj])
  }

  const onChangeSearchInput = (event)=>{
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={()=>setCartOpened(true)}/>


      <Route path='/' exact>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
