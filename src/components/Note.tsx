import React, { useEffect, useState } from 'react';
import {DocumentReference, setDoc} from 'firebase/firestore'
import '../styles/Note.css'

export type NoteType = {
    xPos: number,
    yPos: number,
    content: string,
    owner: string
    doc: DocumentReference
}

export default function Note(props: NoteType) {
    const [xPos, setXPos] = useState(props.xPos)
    const [yPos, setYPos] = useState(props.xPos)
    const [content, setContent] = useState(props.content)
    const [owner, setOwner] = useState(props.owner)

    useEffect(() => {
        setXPos(props.xPos)
        setYPos(props.yPos)
    }, [props.xPos, props.yPos])

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

    function saveNote() {
        let data = {
            content, owner, xPos, yPos
        }
        setDoc(props.doc, data)
    }

    return (
    <div className='note' onDragStart={dragStart} onDragOver={handleDrag} onDragEnd={dragEnd} style={{top: yPos, left: xPos}} >
        <div className='noteheader'>
            <div draggable className='drag'></div>
            <div className='delete'></div>
        </div>
        <p>{props.content}</p>
    </div>
  );
}
