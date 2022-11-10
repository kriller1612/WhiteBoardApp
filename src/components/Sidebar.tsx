import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const auth = getAuth();
    const navigate = useNavigate();

    return (
        <div className='sidebar' style={{display: 'flex', flexDirection: "column", height: "100vh", width: "50px", position: 'fixed', zIndex: 1000, backgroundColor: "lightgrey", margin: 'auto'}}>
            <div className='buttonContainer' style={{display: 'flex', flexDirection: 'column', height: 'fit-content', margin: 'auto', gap: '20px'}}>
                <button>+</button>
                <button onClick={() => {auth.signOut().then(() => navigate('/login')); }}>Log out</button>
            </div>
        </div>
  );
}
