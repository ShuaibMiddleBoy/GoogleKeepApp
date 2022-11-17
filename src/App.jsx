import React, { useState } from "react";
import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";
import Footer from "./Components/Footer";


const App = () => {
  const [item, setItem] = useState([]);
  const addNote = (note) => {
    setItem((preData)=>{
      return [...preData, note];
    })
  }

  const deleteEvent = (id) => {
    console.log(id);
    setItem((oldData)=> {
      return oldData.filter((curData, indx)=> {
        return indx !== id;
      })
    })
  }
  return(
    <>
      <Header/>
      <CreateNote passNote={addNote}/>
 
 <div style={{display:"flex", flexWrap:"wrap"}}>

  {item.map((data,index)=>{
    return <Note key={index} id={index} title={data.title} deleteNote={deleteEvent} content={data.content}/>
  })}
  </div>
      <Footer/>
    </>
  )
}


export default App;