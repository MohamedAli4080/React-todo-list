import logo from './logo.svg';
import './App.css';
import Header from './header';
import { useEffect, useState } from 'react';

function App() {
  
const [Todoinput,setTodoInput]=useState('');
const [Todolist,setTodoList]=useState([]);
const [Checkeditems,setCheckeditems]=useState([]);


const handleOnClick=()=>{
setTodoList([...Todolist,Todoinput]);
setTodoInput('');



}

const handleonDelete=(deleteitem)=>{
  const updateTodo=Todolist.filter(item=>item  !=deleteitem)
setTodoList(updateTodo)
}



const handleChecked=(event,item)=>{
 
if (event.target.checked) {
    console.log(event.target.checked,item);
    setCheckeditems([...Checkeditems,item]);  
}else{
  const updateCheckedItems=Checkeditems.filter(f=>f !=item);
  setCheckeditems(updateCheckedItems);
  }

}









const isChecked=(item)=>{
  const isChecked=Checkeditems.find(ck=>ck==item);
if (isChecked){
  const style={
    textDecoration:'line-through'
  }
  return style;
}

  return {};

}
useEffect(() => {
  
},[Todolist])

  return (
    <div className="App">
      <Header />

      <div className='Controll'>
        <input id="Todoinput" value={Todoinput} onChange={(e)=>setTodoInput(e.target.value)}   type='text' />
        <button className='btn btn-primary' onClick={handleOnClick}>Add</button>
      </div>

      <div className='To-do-list'>
        
          <ul> 

          {
               
               Todolist.map((item,index)=>
                  
                  
                    <li key={index}>
                      <input type='checkbox'  onChange={(event)=>handleChecked(event,item)} ></input>
                      <span style={isChecked(item)}>{index} {item}</span>                    
                      <button className='btn btn-danger' onClick={()=>handleonDelete(item)}>delete</button>
                    </li>
                  )
                } 
             
            <li ></li>
          </ul>
      
      </div>
    </div>
  );
}

export default App;
