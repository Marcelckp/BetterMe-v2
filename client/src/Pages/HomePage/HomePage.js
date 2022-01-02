import React from 'react';
import BoringGreenFood from '../../images/boringGreenFood.jpeg';

import style from './HomePage.module.scss';
import Nav from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

function HomePage() {
    return (
        <>
            <Nav transition={true} />
            <div>
                <div className={style.Hero} style={{backgroundImage: `url(${BoringGreenFood})`}}>
                    <div className={style.titleBlock}>
                        <h1 className={style.title}>Better Me</h1>
                        <h2>the only nutrition app you'll ever need</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage
