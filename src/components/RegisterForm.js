import React,{useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from 'axios'
import { Link} from "react-router-dom";
export default function RegisterForm() {

    const ref = useRef(null);

    const [username,SetUsername]=useState()
    const [password,SetPassword]=useState()
    const [message,SetMessage]=useState()
  
    const submitHandler = (e) => {
        e.preventDefault();
        const element = ref.current;
        element.reset()

        let payload={
          "username":username,
          "password": password
        }

        api.post("http://localhost:8000/reg",payload)
        .then(res=>{
          if(res.status===200){
            SetMessage("Register sucess !! ")
          }
        }).catch(err=>{
          if(err.response.status===500){
            console.log(err.message)
          }
        }

        )

    }    
  return (
    <Form ref={ref} onSubmit={submitHandler}>

    <Form.Group className='md-3' controlId='formUsername'>
    <h4>REGISTER</h4>
     <Form.Label>USER NAME</Form.Label>
      <Form.Control type="text" placeholder="USER NAME" 
      onChange={(e)=>SetUsername(e.target.value)}/>
     </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>PASSWORD</Form.Label>
      <Form.Control type="password" placeholder="PASSWORD" 
      onChange={(e)=>SetPassword(e.target.value)}/>
    </Form.Group>

   
    <Button variant="primary" type="submit">
      Submit
    </Button>
   <p>{message}</p>
   <Link to='/login'>Login here</Link>
  </Form>
  )
}

