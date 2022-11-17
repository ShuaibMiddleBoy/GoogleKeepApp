import React, {useState} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './CreateNote.css';


const CreateNote = (props) => {
const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title : "",
    content : ""
  });

  const inputEvent = (e) => {
      //  const value = e.target.value;
      //  const name = e.target.name;

       const {value, name} = e.target;
       setNote((preVal)=>{
        return{
          ...preVal,
          [name]:value
        }
       })
  }

  const addEvent = () => {
props.passNote(note);
setNote({
  title : "",
  content : ""
});
  }

  const show = () =>{
    setExpand(true);
  }
  const hide = () =>{
    setExpand(false);
  }
  return(
    <>
      <div className="main_note">
        <form className="form">
        { expand ? <input type="text" placeholder="Title" autoComplete="off" name="title" value={note.title} onChange={inputEvent}/> : null }
            
            <textarea style={{resize:"none"}} cols="" rows="5" onClick={show} onDoubleClick={hide} placeholder="Take a note..." name="content" value={note.content} onChange={inputEvent}/>
          {expand ?  <Button className="btn" variant="contained" onClick={addEvent}>
                <AddIcon/>
            </Button> : null} 
        </form>
      </div>
    </>
  )
}


export default CreateNote;