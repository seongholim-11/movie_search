import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    font-size: 20px;
    padding: 10px 40px;
    box-sizing: border-box;
    background: rgba(255, 255, 255);
    user-select: none;
    color: #000;
    letter-spacing: 2px;
    h1 {
        flex-grow: 1;
    }
    nav {
        flex-grow: 1;
        ul {
            display: flex;
            justify-content: end;
            li {
                list-style: none;
                padding: 0 20px;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderStyle>
            <h1>TMU</h1>
            <nav>
                <ul>
                    <li>boxoffice</li>
                    <li>movie</li>
                    <li>theater</li>
                </ul>
            </nav>
        </HeaderStyle>
    );
};

export default Header;
