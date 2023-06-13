import {Auth,Main} from './routes'
import { BrowserRouter} from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const token=localStorage.getItem("token")
  const auth = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
    {auth.value || token?<Main/>:<Auth/>} 
   </BrowserRouter>
  );
}

export default App;
