import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function WorkoutPage() {

    const navigate = useNavigate();

    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (!user) navigate('/signup');
    })

    return (
        <div>
            <h1>Hey from the Workout Page</h1>
        </div>
    )
}

export default WorkoutPage;
