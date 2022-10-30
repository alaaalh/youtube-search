import "./App.css";
import { useDispatch} from "react-redux";
import { storeData } from "./redux/action";
import { useState } from 'react';
import { GetData } from "./api";

function App() {
  const dispatch = useDispatch()
  const [data , setData] = useState('')
  
  function handleSearchResult(e) {
    setData(e.target.value); 
  }

  function handleGetData(){
    GetData.get(data).then(res => {
      dispatch(storeData(res.data.item));
      console.log(res)
    });
  }

  return <div className="App">
    <input onChange={e => handleSearchResult(e)}/>
    <button onClick={handleGetData}>get</button>
  </div>;
}

export default App;
