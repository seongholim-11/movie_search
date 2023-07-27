import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Typed from "typed.js";

const ScreenDesign = styled.div`
    width: 350px;
    height: 150px;
    border-radius: 10px;
    background-color: #fff;
    transform: perspective(200px) rotateX(-10deg);
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    user-select: none;
    font-weight: 700;
    color: black;
`;

const Screen = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["🎥 Go Main ▶"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 500,
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 100,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <ScreenDesign>
            <span ref={el}></span>
        </ScreenDesign>
    );
};

export default Screen;
