import React from 'react'
import "./styles/Home.css"
import thumb1 from './images/thumb1.png'
import Product from './Product'
{/*import imgName from './images/imageName.png'
the above step is to import our own images
{/* <img className="class_Name" src={imgName} /> */ }



function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="nothing to see here" />
            {/* product using props */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="Its A ME, Mario"
                    price={11.99}
                    rating={5}
                    image={thumb1} />
                <Product
                    id="12321341"
                    title="Its A ME, Luigi"
                    price={10}
                    rating={4}
                    image={thumb1} />
            </div>

            <div className="home__row">
                <Product
                    id="12321341"
                    title="It's not A ME, Mario"
                    price={11}
                    rating={1}
                    image={thumb1} />
                <Product
                    id="12321341"
                    title="Its A ME, Tiara"
                    price={11.99}
                    rating={5}
                    image={thumb1} />
                <Product
                    id="12321341"
                    title="Its A ME, Baby Lumas"
                    price={11.99}
                    rating={5}
                    image={thumb1} />
            </div>

            <div className="home__row">
                <Product
                    id="12321341"
                    title="Its A ME, Perry"
                    price={11.99}
                    rating={5}
                    image={thumb1} />
            </div>

        </div>

    )
}

export default Home
