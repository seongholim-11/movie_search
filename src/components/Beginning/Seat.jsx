import React from "react";
import styled from "styled-components";

const SeatDesign = styled.div`
    width: 30px;
    height: 45px;
    border-radius: 20px 20px 0 0;
    background-color: rgb(51, 97, 20);
    box-shadow: 0 0 30px 1px rgba(51, 97, 20, 0.7);
    margin: 5px;
    cursor: pointer;
    &:hover {
        background-color: rgb(129, 67, 9);
        box-shadow: 0 0 30px 1px rgba(129, 67, 9, 0.9);
    }
`;

const Seat = () => {
    return <SeatDesign></SeatDesign>;
};

export default Seat;
