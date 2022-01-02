import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MealPage() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);

    useEffect(()=>{
        if(!user) navigate('/signup')
    });

    return (
        <div>
            <h1>Hey from the meal plan page</h1>
        </div>
    )
}

export default MealPage
