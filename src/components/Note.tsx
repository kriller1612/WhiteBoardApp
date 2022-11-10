import React, { useState } from 'react';

export type NoteType = {
    xPos: number,
    yPos: number,
    content: string,
    owner: string
}

export default function Note(props: NoteType) {
    const [xPos, setXPos] = useState(props.xPos)
    const [yPos, setYPos] = useState(props.xPos)

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

    }

    return (
    <div onDragStart={dragStart} onDragOver={handleDrag} onDragEnd={dragEnd} style={{minWidth: 200, minHeight: 200, backgroundColor: "#FCF4A3",position: 'absolute', top: yPos, left: xPos, border: "1px solid black", display: 'flex', flexDirection: 'column', alignItems: 'baseline', margin: 0}} className="Note" id='note1'>
        <div draggable style={{cursor: 'pointer',width: '30px', height: '30px', backgroundColor: 'green'}}>
        </div>
        <p>{props.content}</p>
    </div>
  );
}
