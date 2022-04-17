import React, {useContext} from "react";
import {
    Link
  } from "react-router-dom";
import CountDownTimer from "./CountDownTimer";
import { CartContext } from "../Contexts/CartContext";

const Home = () =>{

    const {setCategory} = useContext(CartContext)

    return(
        <div>
            <div style = {{ fontWeight:"bold", fontSize:" xx-large", backgroundColor: "orange", height: "80px", marginBottom: "15px",border: "2px double white"}}> 
                <div style= {{textAlign: "center", paddingTop: "15px"}}>
                    ShopCart
                </div> 
            </div>
            <div style={{width: "35%", border: "2px double black", paddingTop: "15px", margin:"auto", backgroundColor: "#eff1fc", fontSize:"large"}}>
                <div style={{fontWeight: "bolder"}}>
                    SALE ENDS IN
                </div>
                <div>
                    <CountDownTimer hoursMinSecs/>
                </div>
            </div>
            <div style = {{marginBottom: "40px", fontWeight:"bold", fontSize: "xx-large", marginTop: "20px", color:"red"}}> Get 20% discount on New Arrivals</div>
            <div style= {{width: "65%", height: "10vh" ,border: "2px double black", paddingTop: "15px", margin:"auto", backgroundColor: "#e0ded3", paddingBottom: "15px", marginBottom: "25px"}}>
                <div style={{fontSize:"xx-large", marginTop: "3vh", fontWeight: "bolder"}}>
                    <Link onClick={()=> setCategory("All")} style={{paddingRight:"200px", paddingLeft: "150px"}}
                    to={{
                        pathname: "/Products",
                    }}>
                        All Products</Link>
                    <Link style={{paddingRight:"150px"}} to={{
                        pathname: "/Cart",
                    }}> 
                    Cart</Link>
                </div>
            </div>
            <div style= {{width: "99%", height: "40vh" ,border: "2px double black", paddingTop: "15px", margin:"auto", backgroundColor: "#fbfbfb", paddingBottom: "15px"}}>
                <div style= {{width: "30%", border: "2px double black", paddingTop: "15px", margin:"auto", backgroundColor: "#db988c", paddingBottom: "15px"}}>
                    <div style={{fontWeight: "bolder", fontSize:"x-large", color: "white"}}>
                        CATEGORIES
                    </div>
                </div >
                <Link onClick = {() => setCategory("women's clothing")}
                    to={{
                        pathname: "/Products",
                    }}>
                    <div style= {{width: "20%", height: "20vh", border: "8px double black", paddingTop: "15px", marginTop: "25px", marginLeft: "5px", backgroundColor: "#8a2e35", paddingBottom: "15px", position: "absolute", left: "1% ", top: "60%"}}>
                        <div style={{fontWeight: "bolder", fontSize:"xx-large", color: "white", marginTop:"6vh"}}>
                            Women's Clothing
                        </div>
                    </div>
                </Link>
                <Link onClick = {() => setCategory("men's clothing")}
                    to={{
                        pathname: "/Products",
                    }}>
                    <div style= {{width: "20%", height: "20vh", border: "8px double black", paddingTop: "15px", marginTop: "25px", marginLeft: "5px", backgroundColor: "#3a4e33", paddingBottom: "15px", position: "absolute", left: "26%", top: "60%"}} >
                        <div style={{fontWeight: "bolder", fontSize:"xx-large", color: "white", marginTop:"6vh"}}>
                            Men's Clothing
                        </div>
                    </div>
                </Link>
                <Link onClick = {() => setCategory("electronics")}
                    to={{
                        pathname: "/Products",
                    }}>
                    <div style= {{width: "20%", height: "20vh", border: "8px double black", paddingTop: "15px", marginTop: "25px", marginLeft: "5px", backgroundColor: "#a67e36", paddingBottom: "15px", position: "absolute", left: "51%", top: "60%"}} >
                        <div style={{fontWeight: "bolder", fontSize:"xx-large", color: "white", marginTop:"6vh"}}>
                            Electronics
                        </div>
                    </div>
                </Link>
                <Link onClick = {() => setCategory("jewelery")}
                    to={{
                        pathname: "/Products",
                    }}>
                    <div style= {{width: "20%", height: "20vh", border: "8px double black", paddingTop: "15px", marginTop: "25px", marginLeft: "5px", backgroundColor: "#3c82d4", paddingBottom: "15px", position: "absolute", left: "76%", top: "60%"}} >
                        <div style={{fontWeight: "bolder", fontSize:"xx-large", color: "white", marginTop:"6vh"}}>
                            Jewelery
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home