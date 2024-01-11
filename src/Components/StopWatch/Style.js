import styled from "styled-components";

export const MyStopWatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: cronometro;

  .relogioWrapper {
    align-items: center;
    background-color: #7687A1;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    box-sizing: border-box;
    display: flex;
    font-size: 5rem;
    justify-content: center;
    margin-bottom: 24px;
    padding: 16px 12px;
    width: 100%;
    
    .number {
      background-color: #5D677C;
      box-shadow: 2px 2px 4px #2B2B2B inset;
      height: 3.4rem;
      width: 3rem;
      padding: 8px 4px;
      border-radius: 10px;

        @media screen and (min-width:1280px) {
          height: 10.8rem;
          width: 9rem;
        }
      }

    .division {
      height: 4.2rem;

      @media screen and (min-width:1280px) {
        height: 12.6rem;
      }
    }
  }

  .titulo {
    font-size: 2rem;
  }

  button {
    background-color: #88bcd1;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    color: #272626;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 16px;
    width: 150px;
    
    &:active {
      background-color: #7CA6B7;
      box-shadow: 2px 2px 4px #0000009F inset;
      cursor: auto;
    }
  }

  @media screen and (min-width:1280px) {
    
    .relogioWrapper{
      font-size: 15rem;
    }

    p {
      font-size: 2rem;
    }

    button {
      grid-column-start: span 2;
      justify-self: center;
      width: 200px;
      font-size: 2.25rem;
    }
  }

`