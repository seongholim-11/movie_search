import React, {useState} from "react";
import styled from "styled-components";
import solar from "../../assets/solar.jpg"
import earth from "../../assets/earth.jpg"
import galaxy from "../../assets/galaxy.jpg"
import wormhole from "../../assets/wormhole.jpg"
import stars from "../../assets/stars.jpg"

const SeatDesign = styled.div`
    width: 30px;
    height: 45px;
    border-radius: 20px 20px 0 0;
    background-color: rgb(7, 0, 58);
    box-shadow: 0 0 30px 1px rgba(104, 94, 178, 0.7);
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        box-shadow: 0 0 30px 1px rgba(134, 120, 200, 0.9);
    }
`;

const randomImages = ["", solar, earth, galaxy, wormhole, stars];

const Seat = () => {
    const [backgroundImage, setBackgroundImage] = useState(randomImages[0]);

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        setBackgroundImage(randomImages[randomIndex]);
    };

    return (
        <SeatDesign
            style={{ backgroundImage: `url(${backgroundImage})` }}
            onMouseEnter={getRandomImage} onMouseLeave={() => setBackgroundImage(randomImages[0])}
        />
    );
};

export default Seat;