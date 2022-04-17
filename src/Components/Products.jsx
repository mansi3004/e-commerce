import React, {useState, useEffect, Fragment, useContext} from 'react'
import { Link } from 'react-router-dom'
import { GetProducts } from '../Services/ApiServices/GetProducts'
import "../Styles/Products.css"
import {CartContext} from '../Contexts/CartContext'
import { GetProductsByCategory } from '../Services/ApiServices/GetProductsByCategory'

const Products = () => {
    const [Data, setData] = useState([])
    const [Loading, setLoading] = useState(false)

    const {setCartItems, CartItems,Category} = useContext(CartContext)

    const fetchAllProducts = async() =>{
        setLoading(true);
        try{
            const res = await GetProducts()
            setLoading(false)
            setData(res.data)
            console.log("data ", res.data)
        }
        catch (er){
            console.log("error", er)
        }
    }

    const fetchProductsByCategory = async () =>{
        setLoading(true);
        try{
            const res = await GetProductsByCategory(Category)
            setLoading(false)
            setData(res.data)
            console.log("data ", res.data)
        }
        catch (er){
            console.log("error", er)
        }
    }

    useEffect( () =>{
        if (Category === "All") fetchAllProducts()
        else fetchProductsByCategory()
    },[])
    
    const Loader = () =>{
        return <div> Loading...</div>
    }

    const handleAddToCart = (data) =>{
        setCartItems([...CartItems, {...data, quantity:1}])
    }

    const RemoveFromCart = (data) =>{
        setCartItems(CartItems.filter(x => x.id !== data.id))
    }

    const Show = () =>{
        return (
            <>
                {Data.map((data, index)=>{
                    return (
                        <Fragment key ={index}>
                            <div style = {{margin:"auto", width: "100vh", marginBottom:"15px"}}>
                            <div style = {{border:"5px double black", width: "400px",margin:"auto",backgroundColor:"white"}}>
                                <img src ={data.image} alt = {data.title} style={{size: "2px",height: "100px", width:"90px",marginTop: "15px"}}/>
                                <h3>{data.title}</h3>
                                <h4>$ {data.price}</h4> 
                                {(CartItems.find(x => x.id === data.id))?  (<div><button className='p-button' disabled={true} >Added To Cart</button> <button className='p-button' style={{float:"right", marginRight: "45px"}}  onClick={() =>RemoveFromCart(data)}>Remove From Cart</button></div>) : (<button className='p-button' onClick={() =>handleAddToCart(data)}>Add To Cart</button>)}
                            </div>
                            </div>
                        </Fragment>)
                })}
            </>
        )
    }

  return (
        <>
            <div style={{backgroundColor:"#eff1fc"}}>
                    <div style = {{marginBottom: "15px"}}>
                        <div style={{width: "99%", border: "2px double black", paddingTop: "15px", paddingBottom: "15px", margin:"auto", backgroundColor: "orange", fontSize:"xx-large", fontWeight: "bolder",marginBottom: "15px"}}>
                        <div >Products</div>
                        <div style={{ position:"absolute", top: "2%", right:"15%", fontWeight: "bolder", fontSize: "large", border:"2px solid black", paddingTop:"10px", paddingBottom: "10px", paddingLeft: "10px", paddingRight: "10px"}}>
                            <Link to={{ pathname: "/" }}> Home </Link>
                        </div>
                        <div style={{ position:"absolute", right:"4%", top:"2%", fontWeight: "bolder", fontSize: "large", border:"2px solid black", paddingTop:"10px", paddingBottom: "10px", paddingLeft: "10px", paddingRight: "10px"}}>
                            <Link to={{ pathname: "/Cart" }}> Go To Cart </Link>
                        </div>
                        </div>
                    </div>
                    {Loading ? <Loader/> : <Show/>}

                {/* <div style={{ marginRight: "100px", position:"absolute", right:"12%", top:"10%", fontWeight: "bolder", fontSize: "x-large", border:"2px solid black", paddingTop:"10px", paddingBottom: "10px", paddingLeft: "10px", paddingRight: "10px",backgroundColor:"#eff1fc"}}><Link to={{
                        pathname: "/"
                    }}>Home</Link>
                </div>

                <div style={{ marginRight: "100px", position:"absolute", right:"10px", top:"10%", fontWeight: "bolder", fontSize: "x-large", border:"2px solid black", paddingTop:"10px", paddingBottom: "10px", paddingLeft: "10px", paddingRight: "10px",backgroundColor:"#eff1fc"}}><Link to={{
                        pathname: "/Cart"
                    }}>Go To Cart</Link>
                </div> */}
            </div>
        </>
  )
}

export default Products