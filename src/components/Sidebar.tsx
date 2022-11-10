import { getAuth } from 'firebase/auth';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import { Add, Logout } from '@mui/icons-material';
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
            content: "Click the text of this note to edit it"
        })
    }

    const signOut = () => {
        auth.signOut()
    }

    return (
        <div className='sidebar'>
            <div className='buttoncontainer'>
                <Add onClick={newNote} style={{cursor: 'pointer'}} />
                <Logout onClick={signOut} style={{cursor: 'pointer'}} />
            </div>
        </div>
  );
}
