
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

function App() {
    
  const[Amount,setAmount]=useState(0)
  const[dispercentage,setDispercentage]=useState(0)
   
  console.log(Amount,dispercentage);

  
  const calculateDiscount =(e)=>{

    let discount= (dispercentage/100)*Amount

    let finalPrice= Amount-discount
  
    console.log(finalPrice);


    document.getElementById('result').innerHTML=`${finalPrice}`


  }


  const resetdisc=(e)=>{
     document.getElementById('result').innerHTML=""
     setAmount(0)
     setDispercentage(0)
  }

  return (
    <>
          <div id='row' className="container p-5 ">
                <Row  className='p-5 ms-3 mt-5 bg-body'>
                     <Col lg={5}>
                        <img style={{width:"100%"}} src="https://calconcalculator.com/wp-content/uploads/2021/10/discount-calculator.jpg" alt="" />
                     </Col>
                     <Col lg={5}>
                     <FloatingLabel
        controlId="floatingInput"
        label="Enter Amount"
        className="mb-3 mt-5 ms-5"
      >
        <Form.Control value={Amount||""} onChange={(e)=>setAmount(e.target.value)} style={{backgroundColor:"lightblue"}} type="text" placeholder="Enter Amount" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Enter Discount Percentage" className='mt-3 ms-5 ' >
        <Form.Control value={dispercentage||""} onChange={(e)=>setDispercentage(e.target.value)} style={{backgroundColor:"lightblue"}} type="text" placeholder="Percentage" />
      </FloatingLabel>

          
      <MDBBtn onClick={(e)=> calculateDiscount(e)} color='info' className='mt-3 ms-5 '>
        Calculate
      </MDBBtn>

      
          
      <MDBBtn   onClick={(e)=> resetdisc(e)} color='info' className='mt-3 ms-5 btns'>
        Reset
      </MDBBtn>

                     </Col>


           <h1 id='result' className='text-center text-success mt-3'></h1>

                </Row>
          </div>
    </>
  )
}

export default App
