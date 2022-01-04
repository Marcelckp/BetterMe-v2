import React, { useEffect, useRef, useState } from 'react';
import style from './Exercise.module.scss';
import axios from 'axios';

import Nav from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import ExerciseItem from '../../Components/ExerciseItem/ExerciseItem';

// import exercise from '../../images/exercise.jpg';
import lifeStyle from '../../images/lifecycle.jpg';

import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';

function ExercisePage() {

    let biscuit;
    if (localStorage.getItem('exercises')) biscuit = JSON.parse(localStorage.getItem('exercises'));

    const [data, setData] = useState(biscuit || null);

    const [exerciseList, setExerciseList] = useState(["back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"]);

    const Search = useRef(null);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': '659185169emshb2c68193fe619efp1a3fe1jsndd22216599fa'
            }
        };

        if (!localStorage.getItem('exercises')) {
            axios.request(options)
                .then((res) => {
                    setData(res.data.slice(0, 100));
                    localStorage.setItem('exercises', JSON.stringify(res.data.slice(0, 100)));
                })
                .catch(err => {
                    
                    console.log(err);
                })
        }

    },[]);

    const newSearch = async () => {

        var options2 = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${Search.current.value}`,
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': '659185169emshb2c68193fe619efp1a3fe1jsndd22216599fa'
            }
        };

        axios.request(options2)
            .then(res => {
                localStorage.setItem('exercises', JSON.stringify(res.data.slice(0, 100)));
                setData(res.data.slice(0,100));
            })
            .catch(err => console.log(err));

    };

    console.log(data);

    return (
        <>
            <Nav transition={true} />
            <div>
                <div className={style.Hero} style={{backgroundImage: `url(${lifeStyle})`}}>
                    <h1>Find Your Next Gym Routine</h1>
                    <div className={style.Bar}>
                        <input ref={Search} type="text" placeholder='Enter The Name Of muscle you which to target...' />
                        <Icon 
                            onClick={newSearch}
                            className={style.search}
                            path={mdiMagnify}
                            size={1.5}
                        />
                    </div>
                </div>
            </div>
            <br />
            <div className={style.content}>
                <div className={style.container}>
                    {data && data.map((item, idx) => {
                        return <ExerciseItem key={idx} id={item.id} name={item.name} bodyPart={item.bodyPart} target={item.target} equipment={item.equipment} image={item.gifUrl} />
                    })}
                </div>
            </div>
            <br />
            <br />
        <Footer />
        </>
    )
}

export default ExercisePage
