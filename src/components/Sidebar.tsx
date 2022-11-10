import { getAuth } from 'firebase/auth';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import '../styles/Sidebar.css'

export default function Sidebar() {
    const auth = getAuth();
    const firestore = getFirestore()
    const notesRef = collection(firestore, 'notes')

    const newNote = () => {
        addDoc(notesRef, {
            xPos: 200,
            yPos: 200,
            owner: auth.currentUser?.email,
            content: "Insert text"
        })
    }

    const signOut = () => {
        auth.signOut()
    }

    return (
        <div className='sidebar'>
            <div className='buttoncontainer'>
                <button onClick={newNote}>+</button>
                <button onClick={signOut}>Log out</button>
            </div>
        </div>
  );
}
