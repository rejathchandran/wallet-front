import React,{useEffect,useState,useRef} from 'react'
import './Card.css'
import api from 'axios'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Wallet() {
  const ref = useRef(null);
  const [isLoading,SetLoading]=useState(true)
  const [data,SetData]=useState('')
  const [money,setMoney]=useState('')
  const [message,SetMessage]=useState(true)
  const token=localStorage.getItem("token")
  useEffect(() => {
    api.get('http://localhost:8000/mywallet',{
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
    },
    }).then((response) => {
      SetData(response.data.amount)
      SetLoading(false)
    })
  },[message])


  return (
    <>
    {
      isLoading?<p>loading</p>
      :
   <div>
       <div className='custom-card'>
        
        <div className='image-container' style={{background:'primary'}}>
           <img className='image' src={'https://png.pngtree.com/png-clipart/20190904/original/pngtree-orange-wallet-icon-png-image_4462385.jpg'} alt="" />
        </div>

      <div >
         <h2 style={{fontSize:"1rem"}}>MY WALLET BALANCE</h2>
         <h4>${data}</h4>
      </div>
    
 </div>

   <div>
     <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" 
        onChange={(e)=>{setMoney(e.target.value)}}
        ref={ref}/>
      </InputGroup>

    <Button variant="primary" type="submit" onClick={()=>{
   let  data=  {
        "amount":money
    }
    
    api.post('http://localhost:8000/payout',data,{ 
      headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
  }
  }).then(()=>{
    const element = ref.current;
    element.value=""
    alert("request have been sent ")
   SetMessage(!message)
  
  })

    }}>
      REQUEST
    </Button>
    
   </div>


   </div>
    }
    </>
  )
}
