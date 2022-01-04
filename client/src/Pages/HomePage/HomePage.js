import React, { useEffect, useState } from 'react';
import BoringGreenFood from '../../images/boringGreenFood.jpeg';

import style from './HomePage.module.scss';
import Nav from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

import img from '../../images/Berrys.jpg';
import photo from '../../images/mongo.jpg';
import pitch from '../../images/pitch.jpg';

import InfoCard from '../../Components/InfoCard/InfoCard';
import data from '../../Components/InfoCard/text';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

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
                <div className={style.main}>
                    <div className={style.container}>
                        <div className={style.headTitle}>
                            <h1>Want to find some </h1>
                            <h1>pretty cool recipes</h1>
                            <button onClick={() => navigate('/search')}>Find More</button>
                        </div>
                        <div className={style.headBlur}>
                            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magnam doloremque odit similique alias! Nisi iste modi sed similique accusantium odit, nam eum dolorem cum ipsam eligendi dicta molestias unde!</h1>
                        </div>
                    </div>

                    <div className={style.imageContainer}>
                        <div className={style.imageInfo}>
                            <h3>What makes us different</h3>
                            <p>we provide a free means to get you </p>
                            <p>to your health goals</p>
                            <h2>stay active with use to get some cool benefits</h2>
                            <h2>you'll have to sign up to find out what they are</h2>
                            <button onClick={() => navigate('/signup')}>Join us</button>
                        </div>
                        <div style={{backgroundImage: `url(${photo})`}} className={style.imageContent} />
                    </div>

                    <div className={style.pitch}>
                        <div className={style.pitchContent}>
                            <div style={{ backgroundImage: `url(${pitch})`}} className={style.pitchImg}>

                            </div>
                            <div className={style.pitch1}>
                                <h1>About Us</h1>
                                <br /><br />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo alias eaque voluptate accusamus, laborum repellat iusto tempore iure cupiditate eius sed laboriosam quis ea? Non rerum fugiat culpa natus quam?</p>
                                <br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nesciunt quasi. A optio earum expedita, cumque nemo vero velit asperiores pariatur laborum! Magni voluptates tenetur maiores quia ut dicta dolore?</p>
                                <br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta in laudantium explicabo dignissimos facilis culpa fugit ullam. Molestias assumenda fugiat aliquam neque debitis dolores id similique eligendi iusto quibusdam!</p>
                                <br />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum sunt odio assumenda itaque. Rem, veniam ipsum molestiae in voluptatibus est eius ab sapiente laudantium excepturi rerum itaque sed possimus!</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infoDiv}>
                        <h1>What makes us special</h1>
                        <p>We provide all you need to achieve your</p>
                        <p>fitness and health goals in one singular place</p>
                        <br /><br /><br /><br />
                        <div className={style.infoContent}>

                            <InfoCard data={data.data1} />
                            <InfoCard data={data.data2} />
                            <InfoCard data={data.data3} />
                            <InfoCard data={data.data4} />
                            <InfoCard data={data.data5} />

                        </div>
                    </div>

                    <div className={style.teamContainer}>
                        <h1> Our Team </h1>
                        <p>Follow there lins to stay up to date with them</p>

                        <div className={style.team}>

                            <div className={style.teamCol1}>
                                <h1>Marcel Palmer</h1>
                                <h1>Nicholas Gonzalez</h1>
                            </div>
                            <div className={style.teamCol2}>
                                <h1>Evan Preedy</h1>
                                <h1>Sercan Tuna</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottomHero} style={{backgroundImage: `url(${img})`}} />
            <Footer />
        </>
    )
}

export default HomePage;
