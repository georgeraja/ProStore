import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap' 
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer.js'

const ShippingScreen = ({history}) => {
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')
    const [postalCode,setPostalCode]=useState('')
    const [country,setCountry]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault()

        console.log('submit')
    }
    return (
        <FormContainer>
            <h1>
                Shipping
            </h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                    <Form.Label>
                        Address
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>
                        city
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter a city" value={city} onChange={(e)=>setCity(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='postalcode'>
                    <Form.Label>
                        Postal Code
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter a postalcode" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>
                        Country
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter your country" value={country} onChange={(e)=>setCountry(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
