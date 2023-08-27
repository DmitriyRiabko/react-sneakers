import React from 'react'

import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'


const arr = [
  {name :"Men's sneakers Nike Blazer Mid Suede",price :"139.00",imageUrl:'/img/sneakers/1.jpg'},
  {name :"Men's sneakers Nike Air Max 270",price :"160.00",imageUrl:'/img/sneakers/2.jpg'},
  {name :"Men's sneakers Nike Blazer Mid Suede",price :"140.99",imageUrl:'/img/sneakers/3.jpg'},
  {name :"Men's sneakers Puma X Aka Boku Future Rider",price :"125.68",imageUrl:'/img/sneakers/4.jpg'},
]



function App() {
  let [count, setCount] = React.useState(0)
  
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
          {arr.map(obj =>
          <Card title={obj.name}
              price={obj.price} 
              imgUrl ={obj.imageUrl}
              onFavorite ={()=> console.log("added to favorite")}
              onPlus={()=> console.log("typed plus")}/>
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
