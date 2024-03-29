import styled from "styled-components";

export const MyButton = styled.button`

  align-self: center;
  background-color: ${props=>props.theme.button.backgroundColor};
  border-radius: 10px;
  box-shadow: 2px 4px 4px #0000009F;
  color: #272626;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 16px;
  width: 150px;
  
  &:active {
    background-color: ${props=>props.theme.button.activeColor};
    box-shadow: 2px 2px 4px #0000009F inset;
  }


@media screen and (min-width: 1280px) {
  
    grid-column-start: span 2;
    justify-self: center;
    width: 200px;
    font-size: 2.25rem;
}


`