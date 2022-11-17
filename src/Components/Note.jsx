import React from "react";
import './Note.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const Note = (props) => {

  const deletEvent = () => {
       props.deleteNote(props.id);
  }

  return(
    <>

      <div className="note">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <Button className="btn" onClick={deletEvent} variant="text">
<DeleteIcon style={{color:"red"}} />
        </Button>
      </div>
    </>
  )
}


export default Note;