import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

function Note({title, content, onDelete, id}) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <Button onClick={()=>onDelete(id)}>
                <DeleteIcon/>
            </Button>
        </div>
    );
}

export default Note;
