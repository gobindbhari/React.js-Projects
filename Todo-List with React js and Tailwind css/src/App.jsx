// import { useState } from 'react'   
import { useState } from "react"
import Navbar from "./assets/components/Navbar"
import { v4 as uuid } from "uuid";


function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])



  const handleedit = (e, id) => {
    console.log(e, "handleEdit")
    let t = todos.filter(e => e.id === id)
    settodo(t[0].todo)
    console.log(t)
    settodos(todos.filter(item => item.id !== id));
  }


  const handledelete = (id) => {
    // Remove the todo item by its id
    console.log("Deleted todo with id:", id);
    settodos(todos.filter(item => item.id !== id));
  };


  const handleadd = () => {
    console.log(todo)
    // genidf()
    if (todo !== "") {
      // console.log(genid,"this todo id <=")
      settodos([{ todo, isCompleted: false, id: uuid() }, ...todos])
      settodo("")
    } else {
      alert("Please enter some text")
    }
  }

  const handlechange = (e) => {
    settodo(e.target.value)
    console.log(e.target.value)
  }


  const handlecheckbox = (id) => {
    //  let id = e.target.name;  
    console.log(id)
    let newTodos = todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    settodos(newTodos);
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl min-w-[400px] px-8 py-1 bg-[#e9edc9] min-h-[80vh] w-3/5">
        <div className="addtodo my-5">
          <h2 className="text-xl font-semibold ">Add Todo</h2>
          <div className="flex justify-between align-item-middle px-1 m-2 cursor-auto ">
            <input onChange={handlechange} placeholder="Add your Todo" value={todo} type="text" className="w-2/3 p-2 px-4 border-none h-8 rounded-3xl outline-none" />
            <button onClick={handleadd} className=" h-8 font-bold p-3 py-1 mx-3 text-black bg-[#d49351] rounded-md hover:bg-[#a26b33]  ">Add</button>
          </div>
        </div>
        <h2 className="text-xl font-bold">Your Todos</h2>
        {/* {console.log("")} */}

        <div className="todos">
          {todos.map((item) => {
            // { console.log(item) }

            return <div className="todo flex w-full my-3 justify-between  ">
              <div className="flex gap-3">
                <input type="checkbox" checked={item.isCompleted} onClick={() => { handlecheckbox(item.id) }} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>

              <div className="buttons">
                {
                  <button onClick={(e) => { handleedit(e, item.id) }} className="m-1 p-3 text-center py-0 mx-4 text-black bg-[#d49351] rounded-md hover:bg-[#a26b33] ">Edit</button>
                }
                <button onClick={() => { handledelete(item.id) }} className="m-1 p-3 text-center py-0 mx-4 text-black bg-[#d49351] rounded-md hover:bg-[#a26b33] ">Delete</button>
              </div>
            </div>
          })}
        </div>


      </div>
    </>
  )
}

export default App
