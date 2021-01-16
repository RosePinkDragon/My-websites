import React from 'react'

function Home() {

    const handleClick = () => {
        console.log("hello");
    }

    return (
        <div>
            <div className="home">
                <h2>HomePage 🥳</h2>

                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    )
}

export default Home
