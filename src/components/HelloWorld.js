import React from "react"

import './HelloWorld.css'

const hello_world1 = () => {
    return (
        <div className='helloWorldWrapper'>
            <img alt ="" className="helloWorldImage" 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80" />
            <button className='HelloWorldButton'>Button</button>
            <p className='helloWorldP'>Hello World Componentinden Merhaba</p>
        </div>
    )
}

export default hello_world1