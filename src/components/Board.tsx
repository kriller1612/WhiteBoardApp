import React, { useEffect, useState } from 'react';
import {Firestore, doc, onSnapshot, query, collection} from 'firebase/firestore'
import Note, {NoteType} from './Note'



type BoardProps = {
    firestore: Firestore
}

export default function Board(props: BoardProps) {
    const [notes, setNotes] = useState<NoteType[]>([])

    console.log(props.firestore)
    useEffect(() => {
        const q = query(collection(props.firestore, "notes"))
        const unsub = onSnapshot(q, (snapshot) => {
            let newNotes: NoteType[] = []
            snapshot.forEach((doc) => {
                let data = doc.data()
                console.log(data)
                let note: NoteType = {xPos: data?.xPos, yPos: data?.yPos, content: data?.content, owner: data?.owner}
                newNotes.push(note)
            })
            setNotes(notes.concat(newNotes))
        })
    },[])

    useEffect(() => {
        console.log(notes)
    }, [notes])


    return (
    <div className="board" style={{width: '200vw', height: '200vh'}}>
        {notes.map(note => <Note xPos={note.xPos} yPos={note.yPos} owner={note.owner} content={note.content} />)}
    </div>
  );
}
