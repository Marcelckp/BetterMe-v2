import { useEffect } from 'react';
import foodArr from '../../images/foodAsort.jpg';
import axios from 'axios';

import style from './SearchPage.module.scss';
import Nav from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import FoodItem from '../../Components/FoodItem/FoodItem';

import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';

function SearchPage() {

    // useEffect(() => {
    //     // effect
    //     axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=a55ef03413ed41f996c002316020cdde&number=50')
    //         .then(res => {
    //             console.log(res.data)
    //             localStorage.setItem('searchFetch', JSON.stringify(res.data))
    //         })
    //         .catch(err => console.log(err))
    //     return () => {
    //         // cleanup
    //     }
    // }, []);

    const data = JSON.parse(localStorage.getItem('searchFetch')).results || null;

    console.log(data);
    return (
        <>
            <Nav transition={true} />
            <div>
                <div className={style.Hero} style={{backgroundImage: `url(${foodArr})`}}>
                    <h1>Find Your Next Meal</h1>
                    <div className={style.Bar}>
                        <input type="text" />
                        <Icon 
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
                    {data.map((item, idx) => {
                        return <FoodItem key={idx} id={item.id} name={item.title} image={item.image} />
                    })}
                </div>
            </div>
            <br />
            <br />
            <Footer />
        </>
    )
}

export default SearchPage
