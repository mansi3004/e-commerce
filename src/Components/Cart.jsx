import React, {useContext, Fragment} from 'react';
import {CartContext} from '../Contexts/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const {CartItems, setCartItems} = useContext(CartContext)

    const Increment = (data) =>{
        if(CartItems.find(x=> x.id === data.id)) {
            setCartItems(CartItems.map((item)=>{
                if(item.id === data.id) return {...item, quantity: item.quantity+1}
                else return item
            }))
        }
        else {
            setCartItems([...CartItems, {...data, quantity:1}])
        }
    }

    const Decrement = (data) => {
        setCartItems(CartItems.map((item)=>{
            if(item.id === data.id) return {...item, quantity: item.quantity-1}
            else return item
        }))
    }

    const Remove = (data) => {
        setCartItems(CartItems.filter((item) => item.id !== data.id))
    }

  return (
      <>
        <div style={{backgroundColor:"#eff1fc"}}>
            <div style = {{marginBottom: "15px"}}>
                <div style={{width: "99%", border: "2px double black", paddingTop: "15px", paddingBottom: "15px", margin:"auto", backgroundColor: "orange", fontSize:"xx-large", fontWeight: "bolder"}}>
                    <div>Cart</div>
                    <div style={{ position:"absolute", top: "2%", right:"5%", fontWeight: "bolder", fontSize: "large", border:"2px solid black", paddingTop:"10px", paddingBottom: "10px", paddingLeft: "10px", paddingRight: "10px"}}>
                            <Link to={{ pathname: "/" }}> Home </Link>
                    </div>
                </div>
            </div>
            {CartItems.map((data, index) =>{
                return(
                    
                    <Fragment key ={index}>
                        <div style = {{margin:"auto", width: "100vh", marginBottom:"15px"}}>
                        <div  style = {{border:"5px double black", width: "400px",margin:"auto",backgroundColor:"white"}}>
                            <span style={{float:"right"}}>
                                <button onClick={() => Remove(data)} style={{fontWeight: "bold"}}> X </button>
                            </span>
                            <img src ={data.image} alt = {data.title} style={{size: "2px",height: "85px", width:"80px",marginTop: "15px"}}/>
                            <h3>{data.title}</h3>
                            <h4>$ {data.price}</h4> 
                            <div style ={{marginBottom:"15px"}}>
                            <button disabled = {(data.quantity === 1) ? true : false} onClick={() => Decrement(data)}>-</button>
                            <button>{data.quantity}</button>
                            <button onClick={() => Increment(data)}>+</button>
                            </div>
                        </div>
                        </div>
                    </Fragment>
                )
            })}
        </div>
        <Link to = {{pathname : "/Saved"}}> 
            <button>
                SAVE
            </button>
        </Link>
    </>
  )
}

export default Cart