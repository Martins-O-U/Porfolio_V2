import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { PojectInfo, TechStack } from './PojectInformation';
import { withRouter } from "react-router-dom";
import { imageBank } from "../utils/data";
import Navigation from "../components/Website/Navigation";



const SingleUserStory = (props) => {

    const [currentStory, setCurrentStory] = useState([]);
    const [image, setImage] = useState("");

    useEffect(() => {
        setCurrentStory(PojectInfo.filter(item => item.id === Number(props.match.params.id)))
        setImage(imageBank.filter((item, index) => index === (Number(props.match.params.id) - 1))[0] || "https://source.unsplash.com/1600x900/?refugees,refugee")
    }, []) // eslint-disable-line

    return (
        <StyledContainer>
            <Navigation noheader />
            {
                currentStory.length !== 0 ? (
                    <main>
                        <h1>{currentStory[0].name}</h1>
                        <div className="featured-image">
                            <img src={image} alt={currentStory[0].name} />
                        </div>
                        <p>{currentStory[0].workedOn}</p>
                    </main>
                ) : (
                        <h1>Hiiii</h1>
                    )
            }
        </StyledContainer>
    )
}

export default withRouter(SingleUserStory);

const StyledContainer = styled.main`
    padding: 2rem;

    main {
        max-width: ${props => props.theme.mediumMaxWidth};
        margin: 7rem auto 5rem;

        h1 {
            font-size: 5rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        p {
            font-size: 1.7rem;
            line-height: 1.58;
            margin: 0 auto;
            margin-top: 3rem;
            max-width: 500px;
        }

        .featured-image {
            height: 500px;
            position: relative;

            img {
                object-position: center;
            }
        }
    }
`