import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

 const [title, setTitle] = useState('')
 const [details, setDetails] = useState('')

 const [task, setTask] = useState([])

 const submitHandler = (e) =>{ 
  e.preventDefault();

  const copyTask = [...task];
  copyTask.push({title, details})
  setTask(copyTask)
  setTitle('')
  setDetails('')
 } 
const deleteNote = (idx) => {
  const copyTask = [...task];
  copyTask.splice(idx, 1);
  setTask(copyTask);
};

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form  onSubmit={(e)=>{
            submitHandler(e)
      }}
      className='flex items-start lg:w-1/2 flex-col gap-4 p-10 '>
              <h1 className='text-3xl font-bold'>Add Notes</h1>

{/* first input for heading */}
  <input
 type="text"
  placeholder="Enter your note"
  className='border border-gray-300 font-medium w-full outline-nonerounded-md px-5 py-2 text-white bg-black'
  value={title}
    onChange = {(e)=>{
      setTitle(e.target.value)
    }}
   />

{/* Detailed input */}
<textarea type="text" 
placeholder='Write Details'
className='border border-gray-300 h-32 font-medium outline-none w-full rounded-md px-5 py-2 text-white bg-black'

value={details}
    onChange = {(e)=>{
      setDetails(e.target.value)
}}
/>
<button className='bg-white text-black w-full px-4 py-2 rounded-md active:bg-gray-300'>Add Note</button>

      </form>

      <div className=' lg:w-1/2  p-10 lg:border-l-2'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>

      <div className='flex flex-wrap items-start justify-start h-[90%] overflow-auto mt-6 ' >
       {task.map(function(elem, idx){
        return <div key={idx} className='h-52 w-50 flex justify-between flex-col items-start pt-9 pb-4 relative rounded-2xl bg-cover py-6 px-11 text-black bg-[url(https://imgs.search.brave.com/XDZ7tD6dIlfy0bj3jkq9H0rY8jK8v5gDEbDJnvccgTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzMv/MTM2LzY4OS9zbWFs/bC9wYXBlci1ub3Rl/LWFuZC1ibGFuay1w/YXBlci1zdGlja3kt/bm90ZXMtaXNvbGF0/ZWQtYmFja2dyb3Vu/ZC1wbmcucG5n)] p-4'>
       <div>
         <h3 className='font-bold text-xl leading-tight'>{elem.title}</h3>
          <p className='text-gray-500 leading-tight font-medium mt-2'>{elem.details}</p>
       </div>
         <button  onClick={() => deleteNote(idx)}
          
        
         className='w-full cursor:pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
        </div>
      
       
       })}
      </div>

      </div>
    </div>
  )
}

export default App
