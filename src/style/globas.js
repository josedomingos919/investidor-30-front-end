import { createGlobalStyle } from "styled-components";
import { colors } from "../util/colors";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Zen+Kaku+Gothic+Antique:wght@300&display=swap');

 *{
    user-select: none;
    border: none;
    padding: 0px;
    margin: 0px;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
    font-size: 12.5px; 
    font-family: 'Zen Kaku Gothic Antique', sans-serif;
 }

 body{
   background-color: ${colors.background};
 }
`;
