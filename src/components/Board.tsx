import { useEffect, useState } from 'react';
import {onSnapshot, query, collection, getFirestore} from 'firebase/firestore'
import Note, {NoteType} from './Note'
import Sidebar from './Sidebar';
import {getAuth} from 'firebase/auth'
import { Navigate } from 'react-router-dom';
import '../styles/Board.css'




export default function Board() {
    const firestore = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;
    const [notes, setNotes] = useState<NoteType[]>([])
    useEffect(() => {
        const q = query(collection(firestore, "notes"))
        onSnapshot(q, (snapshot) => {
            let newNotes: NoteType[] = []
            snapshot.forEach((doc) => {
                let data = doc.data()
                let note: NoteType = {xPos: data?.xPos, yPos: data?.yPos, content: data?.content, owner: data?.owner, doc: doc.ref}
                newNotes.push(note)
            })
            setNotes(newNotes)
        })
    },[firestore])
    if (user === null) {
        return <Navigate to={'/login'} />
    } else {
    return (
    <div className="board">
        <Sidebar />
        {notes.map((note, index, arr) => <Note key={"Note"+index} xPos={note.xPos} yPos={note.yPos} owner={note.owner} content={note.content} doc={note.doc} />)}
    </div>
    );
    }
}
