import { useEffect, useRef, useState } from 'react';
import foodArr from '../../images/foodAsort.jpg';
import axios from 'axios';

import style from './SearchPage.module.scss';
import Nav from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import FoodItem from '../../Components/FoodItem/FoodItem';

import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';

function SearchPage() {

    let biscuit; 
    if (localStorage.getItem('searchFetch')) biscuit = JSON.parse(localStorage.getItem('searchFetch')).results

    const [data, setData] = useState(biscuit || null);

    useEffect(() => {
        // effect
        if (!localStorage.getItem('searchFetch')) {
            axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=a55ef03413ed41f996c002316020cdde&number=50')
                .then(res => {
                    console.log(res.data)
                    localStorage.setItem('searchFetch', JSON.stringify(res.data));
                    setData(res.data.results);
                })
                .catch(err => console.log(err))
            return () => {
                // cleanup
            }
        }
    }, []);

    // console.log(biscuit, data)

    const Search = useRef(null);
    
    const createSearch = async () => {
        console.log('let get your data')
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a55ef03413ed41f996c002316020cdde&number=50&query=${Search.current.value}`)
            .then((res) => {
                localStorage.setItem('searchFetch', JSON.stringify(res.data));
                // console.log(res.data)
                setData(res.data.results)
            })
            .catch((err) => console.log(err));

        // return () => {

        // }
    }

    console.log(data);
    return (
        <>
            <Nav transition={true} />
            <div>
                <div className={style.Hero} style={{backgroundImage: `url(${foodArr})`}}>
                    <h1>Find Your Next Meal</h1>
                    <div className={style.Bar}>
                        <input ref={Search} type="text" placeholder='Enter A Name And We Will help you to your next meal...' />
                        <Icon 
                            onClick={createSearch}
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
