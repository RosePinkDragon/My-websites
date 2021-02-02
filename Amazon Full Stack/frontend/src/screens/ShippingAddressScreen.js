import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

export default function ShippingAddressScreen(props) {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  const cart = useSelector(state => state.cart)
  const { amazonShippingAddress } = cart;

  if(!userInfo){
    props.history.push('/signin')
  }

  const dispatch = useDispatch()

  const [fullName, setFullName] = useState(amazonShippingAddress.fullName)
  const [address, setAddress] = useState(amazonShippingAddress.address)
  const [city, setCity] = useState(amazonShippingAddress.city)
  const [postalCode, setPostalCode] = useState(amazonShippingAddress.postalCode)
  const [country, setCountry] = useState(amazonShippingAddress.country)




  const submitHandler = (e) => {
    e.preventDefault()
    
    dispatch(saveShippingAddress({fullName,address,city,postalCode,country}))

    props.history.push('/payment')

  }

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>Shipping Address</h1>
        </div>

        {/* name */}
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Enter Full Name" value={fullName} onChange={(e)=>setFullName(e.target.value)} required/>
        </div>
        {/* address */}
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)} required/>
        </div>
        {/* city */}
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="Enter City" value={city} onChange={(e)=>setCity(e.target.value)} required/>
        </div>
        {/* post code */}
        <div>
          <label htmlFor="postcode">Post Code</label>
          <input type="text" id="postcode" placeholder="Enter Postal Code" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} required/>
        </div>
        {/* country */}
        <div>
          <label htmlFor="country">Country</label>
          <input type="text" id="countrt" placeholder="Enter Country" value={country} onChange={(e)=>setCountry(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor=""/>
          <button className="primary" type="submit">Continue</button>
        </div>
      </form>
    </div>
  )
}
