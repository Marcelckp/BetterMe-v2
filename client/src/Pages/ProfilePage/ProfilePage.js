import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);

    useEffect(()=> {
        if(!user) navigate('/signup')
    });

    return (
        <div>
            <h1>Hi from the profile page</h1>
        </div>
    )
}

export default ProfilePage
