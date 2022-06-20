import React from "react";


const Button = () => {
    const Clicked = (e,değer) => {
        console.log(e,değer)
    }
    function Clicked1 (değer) {
        console.log(değer)
    }
    return(
        <button onClick={(e) => {
            Clicked(e,"Mert")
        }}>Butona Tıklanılır</button>
    )
}

export default Button