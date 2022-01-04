import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Nav from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

function SummaryPage() {

    const navigate = useNavigate();

    const user = useSelector(state => state.user.user)

    const [data, setData] = useState(null);

    useEffect(()=> {
        if(!user) navigate('/signup');

        if (user) {
            axios.get(`http://localhost:4000/favorites/${user.user_id}`)
                .then(res => setData(res.data))
        }

    }, [navigate, user]);

    console.log(data)

    return (
        <>
            <Nav />
                <div>
                    
                </div>
            <Footer />
        </>
    )
}

export default SummaryPage;