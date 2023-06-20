import axios from 'axios';
import './App.css';
import { useEffect ,useState} from 'react';
function App() {
  const [pin,setPin]=useState(0);
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async()=>{
    try{
      const response=await axios.get('https://flamesbackend.onrender.com/user/');
      setData(response.data);
    }
    catch(er){
      console.log(er);
    }
    
  }
  return (
    <div className="App">
      {pin!=2428?<label htmlFor='pin'>Pin</label>:null}
      {pin!=2428?<input type='number' name='pin' onChange={(e)=>setPin(e.target.value)}></input>:null}
      {pin==2428?<table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name 1</th>
          <th>Name 2</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name1}</td>
            <td>{item.name2}</td>
            <td>{item.result}</td>
          </tr>
        ))}
      </tbody>
      </table>:null}
    </div>
  );
}

export default App;




  


