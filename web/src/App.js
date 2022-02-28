import './App.css';
import axios from 'axios';

const calladdAPI = async() =>{
  let result = await axios.get('http://localhost:8080/add')
  console.log(result.data)
}

const callResetAPT = async() =>{
  let result = await axios.get('http://localhost:8080/reset')
  console.log(result.data)
}

function App() {
  return (
    <div>
    <button onClick={calladdAPI}>Add</button><br></br>
    <button onClick={callResetAPT}>reset</button>
    </div>
  );
}

export default App;
