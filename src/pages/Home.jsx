import Card from '../components/Card'

function Home () {
   

    return (
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

      <div className="d-flex flex-wrap justify-between">
        {items
        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item,index) =>
        <Card key={index}
            title={item.title}
            price={item.price} 
            imgUrl ={item.imageUrl}
            onFavorite ={(item)=>onAddToFavorite(item) }
            onPlus={(obj)=> onAddToCart(item)}/>
          )}
      </div>
    </div>
    )
}

export default Home