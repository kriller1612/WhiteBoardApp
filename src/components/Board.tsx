import React, { useEffect, useState } from 'react';
import {Firestore, doc, onSnapshot, query, collection} from 'firebase/firestore'
import Note, {NoteType} from './Note'

type BoardProps = {
    firestore: Firestore
}

export default function Board(props: BoardProps) {
    const [notes, setNotes] = useState<NoteType[]>([])
    useEffect(() => {
        const q = query(collection(props.firestore, "notes"))
        onSnapshot(q, (snapshot) => {
            let newNotes: NoteType[] = []
            snapshot.forEach((doc) => {
                let data = doc.data()
                let note: NoteType = {xPos: data?.xPos, yPos: data?.yPos, content: data?.content, owner: data?.owner, doc: doc.ref}
                newNotes.push(note)
            })
            setNotes(notes.concat(newNotes))
        })
    },[])

    return (
    <div className="board" style={{width: '200vw', height: '200vh'}}>
        {notes.map((note, index, arr) => <Note key={"Note"+index} xPos={note.xPos} yPos={note.yPos} owner={note.owner} content={note.content} doc={note.doc} />)}
    </div>
  );
}
