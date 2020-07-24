import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { PojectInfo, TechStack } from './PojectInformation';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { slides } from '../utils/data';
import Slider from '../components/Website/Slider';
import Navigation from "../components/Website/Navigation";
import Roller from "../components/LoadingIndicator/roller";


const Home = () => {

    const [isLoading, setLoader] = useState(true);

    return (
        <ParallaxContainer>
            <header className="is-home-page">
                <Navigation ishome />
                <Slider
                    options={{
                        autoPlay: 8000,
                        lazyLoad: true,
                        pauseAutoPlayOnHover: false,
                        wrapAround: true,
                        pageDots: false,
                        prevNextButtons: false
                    }}
                >
                    {
                        slides.map(({ image, title, story }, index) => (
                            <div style={{ width: '100%', height: '100%' }} key={index}>
                                <div className="slider-image">
                                    <img src={image} data-flickity-lazyload={image} alt="" />
                                </div>
                                <div className="slider-content">
                                    <h1>{title}</h1>
                                    <p>{story}</p>
                                    <Link to="/stories">See all stories <span>&#62;</span></Link>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </header>
            <main>
                <section className="about-section">
                    <h3>Who I Am</h3>
                    <p>I had my first real exposure to how Information Technology works about a year and six months ago, and it was a life-defining moment for me. At first, I explored Computer Networking and some aspects of Network Security, within which period I also got introduced to Web Development. Here, I knew I had found my path and began some self-study sessions. By August 2019, I quit all else (which included my Maintenance Supervisor job as a Mechanical Engineer) and joined Lambda School as a Full Stack Web Development student.</p>
                    <p>To this very day, my love for coding never wavered, while learning daily I developed great interpersonal skills as well as skills required of a Software Engineer, be it the Front-End or Back-End/Database Management. My goal is to contribute towards making life easier using smart technology.</p>
                    <p>When I am not working on a project, I am either volunteering, spending time with family and friends or playing board games.</p>
                </section>
                <section className="blog-section">
                    <div className="statistics">
                        <h3>What I Use</h3>
                        <p className="stats-summary">I had my first real exposure to how Information Technology works about a year and six months ago, and it was a life-defining moment for me. At first, I explored Computer Networking and some aspects of Network Security, within which period I also got introduced to Web Development. Here, I knew I had found my path and began some self-study sessions. By August 2019, I quit all else (which included my Maintenance Supervisor job as a Mechanical Engineer) and joined Lambda School as a Full Stack Web Development student.</p>
                        <p className="stats-summary">To this very day, my love for coding never wavered, while learning daily I developed great interpersonal skills as well as skills required of a Software Engineer, be it the Front-End or Back-End/Database Management. My goal is to contribute towards making life easier using smart technology.</p>
                        <p className="stats-summary">When I am not working on a project, I am either volunteering, spending time with family and friends or playing board games.</p>
                    </div>
                </section>
            </main>
        </ParallaxContainer>
    )
}

export default Home;


const ParallaxContainer = styled.div`
    height: 100vh;
    max-height: 50%;
    overflow-x: hidden;
    perspective: 1px;
    perspective-origin: center top;
    transform-style: preserve-3d;

    header.is-home-page {
        width: 100vw;
        transform-origin: center top;
        transform: 
            translateZ(-1px) 
            scale(2);

        nav {
            z-index: 3;
            padding: 2rem calc((100vw - 1140px)/2);
    
            @media (max-width: 1140px) {
                padding: 2rem;
            }
        }

        .slider-image {
            width: 100%;
            height: 100%;

            &:before {
                content: "";
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                top: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                transition: 0.4s ease-out;
                z-index: 2;
            }

            @media (max-width: 768px) {
                &:before {
                    background: rgba(0, 0, 0, 0.85);
                }
            }
        }

        .slider-content {
            position: absolute;
            top: 0;
            z-index: 3;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 100%;
            color: #fff;
            padding: 2rem calc((100vw - 1140px)/2) 20rem;
    
            @media (max-width: 1140px) {
                padding: 2rem;
                padding-bottom: 15rem;
            }
    
            h1 {
                font-size: 7rem;
                margin-bottom: 1rem;

                @media (max-width: 768px) {
                    font-size: 4rem;
                }
            }
    
            p {
                font-size: 2rem;
                max-width: 600px;
                line-height: 1.58;
                width: 100%;

                @media (max-width: 768px) {
                    font-size: 1.7rem;
                    max-width: 500px;
                }
            }

            a {
                font-size: 2rem;
                margin-top: 2rem;
                color: ${props => props.theme.primaryColor};
                width: fit-content;
                display: inline-block;
                border-bottom: 3px solid transparent;

                &:hover {
                    border-bottom: 3px solid ${props => props.theme.primaryColor};
                }
            }
        }
    }

    main {
        min-height: 100vh;
        background: white;
        transform: translateZ(0);
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        @media (max-width: 650px) {
            height: auto;
        }

        .about-section {
            width: 100%;
            height: 40%;
            padding: 2rem 2rem 1rem 2rem;
            margin: auto;

            h3 {
                font-size: 2.8rem;
                margin-right: 2rem; 
                margin-down: 2rem;          
            }

            p {
                font-size: 1.6rem;
                line-height: 1.6;
                margin-bottom: 8px;
                margin-top: 8px;
            }

            @media (max-width: 650px) {
                height: auto;
                flex-direction: column;
                max-width: 500px;
                margin: 0 auto;

                h3 {
                    width: 100%; 
                    margin-right: 0;
                    margin-bottom: .5rem;          
                }
    
                p {
                    width: 100%;
                }
            }
        }

        .blog-section {
            display: flex;
            flex: 1 1 auto;

            & > div {
                background: #f2f6f5;
                height: 70%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 3rem 2rem 5rem 2rem;

                &.recent-posts {
                    background: rgba(244, 244, 244, .24);

                    ul {
                        max-width: 300px;
                        width: 100%;
                        text-align: left;

                        li {
                            margin-bottom: 3rem;
        
                            h3 {
                                font-size: 2.4rem;
                                margin-bottom: .5rem;                    
                            }
        
                            p {
                                font-size: 1.55rem;
                                line-height: 1.3;
                            }
        
                            a {
                                font-size: 1.4rem;
                                margin-top: 1rem;
                                display: inline-block;
                                color: ${props => props.theme.primaryColor};
                                width: fit-content;
                                display: inline-block;
                                border-bottom: 3px solid transparent;
        
                                &:hover {
                                    border-bottom: 3px solid ${props => props.theme.primaryColor};
                                }
                            }
                        }
                    }
                }

                &.statistics {
                    & > div {
                        width: 100%;
                        text-align: left;
                    }
                    h3 {
                        font-size: 2.8rem;
                        margin-right: 2rem; 
                        margin-down: 2rem;          
                    }

                    .stats {
                        font-size: 7rem;
                        letter-spacing: -5px;
                        font-family: ${props => props.theme.headingFont};
                    }

                    .stats-summary {
                        font-size: 1.7rem;
                        line-height: 1.5;
                        margin: 2px 5px 5px 5px;
                    }

                    a {
                        color: ${props => props.theme.primaryColor};
                        margin-top: 2rem;
                        font-size: 1.7rem;
                        width: fit-content;
                        display: inline-block;
                        border-bottom: 3px solid transparent;

                        &:hover {
                            border-bottom: 3px solid ${props => props.theme.primaryColor};
                        }
                    }
                }
            }


            @media (max-width: 650px) {
                flex-direction: column;

                & > div {
                    width: 100%;

                    &.statistics {
                        padding: 3rem 2rem 4.5rem;

                        & > div {
                            max-width: 300px;
                            width: 100%;
                            text-align: center;

                            .stats {
                                font-size: 6rem;
                                letter-spacing: -5px;                        
                            }
                        }
                    }
                }
            }

            @media (max-width: 400px) {
                & > div {
                    &.statistics {
                        .stats,
                        .stats-summary {
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
`