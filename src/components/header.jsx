import React, { useState } from "react";

const Header = () =>{
    const [number, setNumber] = useState(0)

    return (
        <>
        <div style={{textAlign:"center"}}>
        <h1>Hello react</h1>
        <h5>{number}</h5>
        <button onClick={()=> setNumber(number + 1)} style={{padding:20, margin:20}}>Click to add number(+)</button>
        <button onClick={()=> setNumber(number - 1)} style={{padding:20, margin:20}}>Click to minus number (-)</button>
        
        </div>
        </>
    )
}

export default Header;