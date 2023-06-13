import react,{useState,useEffect} from 'react'
import api from 'axios'
import Table from 'react-bootstrap/Table';
export default function Layout() 
{   const [isLoading,SetLoading]=useState(true)
    const [data,SetData]=useState('')
    const token=localStorage.getItem("token")
    useEffect(() => {
      api.get('http://localhost:8000/payout',{
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
      },
      }).then((response) => {
        SetData(response.data)
        console.log(response.data)
        SetLoading(false)
      })
    },[])
    return(
        <>
       {
        isLoading?<p>loading</p>
        :
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#ID</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {
  data.map((i)=>(<tr> <td>{i.id}</td> <td>{i.amount}</td> <td>{i.status}</td> </tr>))
          }
        </tbody>
      </Table>
       }
        </>
    )
}
