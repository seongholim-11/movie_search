import React from "react";
import Screen from "../components/Beginning/Screen";
import Seat from "../components/Beginning/Seat";
import styled from "styled-components";
import { Link } from "react-router-dom";

import bg from "../assets/space.mp4";

const BeginningDesign = styled.video`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const Wrap = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Wrapseat = styled.div`
    width: 160px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    float: left;
    margin: 20px;
`;

const Beginning = () => {
    return (
        <div>
            <BeginningDesign muted autoPlay loop>
                <source src={bg} type="video/mp4" />
            </BeginningDesign>
            <Wrap>
                <Link to="/main">
                    <Screen />
                </Link>
                <Wrapseat>
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                </Wrapseat>
                <Wrapseat>
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                </Wrapseat>
            </Wrap>
        </div>
    );
};

export default Beginning;
