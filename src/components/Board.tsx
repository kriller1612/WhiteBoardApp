import React, { useState } from 'react';
import Note from './Note'

type NoteType = {
    xPos: number,
    yPos: number,
    content: string,
    owner: string
}

type BoardProps = {
    notes: Array<NoteType>
}

export default function Board(props: BoardProps) {
    return (
    <div className="board" style={{width: '100vw', height: '100vh'}}>
        {props.notes.map(note => <Note xPos={note.xPos} yPos={note.yPos} owner={note.owner} content={note.content} />)}
    </div>
  );
}
