import styled from "styled-components";

export const MyAside = styled.div`

display: flex;
grid-area: switch;
justify-content:space-between;

@media screen and (min-width:1280px)  {
    flex-direction: column;
    gap: 15px;
    justify-content:start;
}
   

`