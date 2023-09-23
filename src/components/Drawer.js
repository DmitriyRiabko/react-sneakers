import {FiInbox} from 'react-icons/fi'

function Drawer({onClose, onRemove, items= []}) {
  return (
    <div  className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          {" "}
          Shopping cart
          <img
            onClick={onClose}
            className="removeBtn  cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>
      {items.length >0 ? 
        <div className="items h100p">
          {items.map((obj) =>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: `url(${obj.imageUrl})` }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b> $ {obj.price}</b>
            </div>
            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
              )}
        </div> 
       : 
       <div className="d-flex justify-center h100p align-center flex-column">
        <div><FiInbox  style={{width:'60px',height:'60px',color:'#9dd558'}}/></div>
        <b>Your cart is empty</b>
       </div> 
       }
        

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
