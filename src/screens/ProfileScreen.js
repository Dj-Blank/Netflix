import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../component/Nav';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { List } from '../component/List';
import { Watched } from '../component/Watched';

function Profilescreen  () {
    const user = useSelector(selectUser)
    return <div className='profileScreen'> 
        
        <Nav />
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=''/>
            <div className="profileScreen_details">
                <h2>{user.email}</h2>
                <div className="profileScreen_plans">
                    <button onClick={() => auth.signOut()} className="profileScreen_signOut">Sign out</button>
                </div>
            </div>
            </div>
        </div>
        <List />
        <Watched />

    </div>
   
}

export default Profilescreen;
