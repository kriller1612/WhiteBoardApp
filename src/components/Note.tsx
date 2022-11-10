import React, { useEffect, useState } from 'react';
import {deleteDoc, DocumentReference, query, setDoc} from 'firebase/firestore'
import '../styles/Note.css'
import {DragHandle, Delete, DragIndicator} from '@mui/icons-material';
import { getAuth } from 'firebase/auth';

export type NoteType = {
    xPos: number,
    yPos: number,
    content: string,
    owner: string
    doc: DocumentReference
}

export default function Note(props: NoteType) {
    const auth = getAuth()
    const [xPos, setXPos] = useState(props.xPos)
    const [yPos, setYPos] = useState(props.xPos)
    const [content, setContent] = useState(props.content)
    const [newContent, setNewContent] = useState(props.content)
    const [edit, setEdit] = useState<boolean>(false)

    useEffect(() => {
        setXPos(props.xPos)
        setYPos(props.yPos)
        setContent(props.content)
    }, [props.xPos, props.yPos, props.content])

    function dragStart(e: React.DragEvent) {
        e.dataTransfer.dropEffect = 'move'
        var img = new Image(1, 1);
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='
        e.dataTransfer.setDragImage(img, 0, 0)
    }

    function handleDrag(e: React.DragEvent) {
        e.preventDefault();
        if (e.clientX !== 0 ) {
            setXPos(e.pageX-15)
        }

        if (e.clientY !== 0 ) {
            setYPos(e.pageY-15)
        }
    }

    function dragEnd(e: React.DragEvent) {
        saveNote()
    }

    function deleteNote() {
        if (window.confirm("Are you sure you wish to delete this note?") === true) {
            deleteDoc(props.doc)
        }
    }

    function saveNote() {
        let data = {
            content: content, owner: props.owner, xPos, yPos
        }
        setDoc(props.doc, data)
    }
    function editText() {
        if (auth.currentUser?.email === props.owner) {
            setEdit(true)
        }
    }
    function cancelEdit() {
        setEdit(false)
    }

    function saveEdit() {
        let data = {
            content: newContent, owner: props.owner, xPos, yPos
        }
        setDoc(props.doc, data)
        setEdit(false)
    }

    return (
    <div className='note' onDragStart={dragStart} onDragOver={handleDrag} onDragEnd={dragEnd} style={{top: yPos, left: xPos}} >
        <div className='noteheader'>
            <div draggable className='drag'><DragIndicator style={{marginLeft: '-10px', marginTop: '3px'}}/></div>
            {auth.currentUser?.email === props.owner ?
            <div className='delete' onClick={deleteNote}><Delete style={{marginTop: '3px'}} /></div> : <></>
            }
        </div>
        {edit === true ? 
            <div className='editdiv'>
                <textarea className='textinput' defaultValue={content} onChange={(e) => setNewContent(e.target.value)}/>
                <div className='editbuttons'>
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </div>
            </div>
        : 
            <p className='textfixed' onClick={editText}>{content}</p>}
    </div>
  );
}
