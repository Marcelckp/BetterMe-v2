import style from './InfoCard.module.scss';
import Icon from '@mdi/react';

import { mdiFoodForkDrink } from '@mdi/js';

import { mdiNutrition } from '@mdi/js';

import { mdiShieldSearch } from '@mdi/js';

import { mdiBottleTonicPlusOutline } from '@mdi/js';

import { mdiWeightLifter } from '@mdi/js';

function InfoCard({ data }) {

    return (
        <div className={style.Card}>

            <div className={style.svgSection}>
                <div className={`${style.svgDiv} ${data.idx === 1 ? style.searchDiv : data.idx === 2 ? style.gymDiv : data.idx === 3 ? style.healthDiv : data.idx === 4 ? style.plannerDiv : style.nutritionDiv}`}>

                    <Icon path={`${data.idx === 1 ? mdiShieldSearch : data.idx === 2 ? mdiWeightLifter : data.idx === 3 ? mdiBottleTonicPlusOutline : data.idx === 4 ? mdiFoodForkDrink : mdiNutrition }`} 
                    size={1.5}
                    
                    className={`${data.idx === 1 ? style.search : data.idx === 2 ? style.gym : data.idx === 3 ? style.health : data.idx === 4 ? style.planner : style.nutrition }`} 

                    />

                </div>
            </div>

            <div className={style.info}>
                <h1>{data.title}</h1>
                <p>{data.txt}</p>
            </div>

        </div>
    )
}

export default InfoCard
