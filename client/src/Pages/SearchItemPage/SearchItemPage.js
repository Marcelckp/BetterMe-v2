import style from './SearchItemPage.module.scss';
import Nav from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function SearchItemPage() {

    const { id } = useParams();

    // useEffect(() => {
    //     axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=a55ef03413ed41f996c002316020cdde`)
    //         .then(res => localStorage.setItem('item', JSON.stringify(res.data)))
    // }, [])

    const item = JSON.parse(localStorage.getItem('item'));
    console.log(item.spoonacularSourceUrl)
    return (
        <>
            <Nav transition={true} />
            <div style={{color: 'white', backgroundImage: `url(${item.image})` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'contain'}} className={style.SearchItemPage}>
                <h1>Food item ----> { id }</h1>
            </div>
            <Footer />
        </>
    )
}

export default SearchItemPage;
