import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    min-height: 100px;
    position: center;
    bottom: 0;
    left: 100px;
    right: 0;
    top: 100px;
    z-index: 0;
    overflow: hidden;
`;

export const DashboardBtn =styled.nav`
    min-height: 100px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const DashboardBtnLink = styled(Link)` 
    border-radius: 100px;
    background: #01bf71;
    white-space: nowrap;
    padding: 5px 30px;
    color: #010600;
    font-size: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #010606
    }
`;
