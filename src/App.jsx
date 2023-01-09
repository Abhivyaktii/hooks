import { useState } from "react";


const NameList=()=>{
  const[list,setList]=useState(['jack','jill','john'])
  const [name,setName]=useState(()=>"name")

  const addName=()=>{
    console.log(list);
    list.push(name)
    setList([...list])   
    console.log(list);
    setName('')
  }

  return(
    <div>
      <ul>
        {
          list.map((name)=>(
            <li key={name}>{name}</li>
          ))
        }
      </ul>
      <input
      type='text'
      value={name}
      onChange={(event)=>setName(event.target.value)}
      />
      <button onClick={addName}>Add name</button>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}



export default function App(){
  return (
    <div className="App">

      <Counter/>
      <NameList/>
    </div>
  )
}