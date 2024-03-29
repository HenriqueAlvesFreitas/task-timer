import styled from "styled-components";
import check from './../../Assets/Img/check-mark.svg'


export const MyList = styled.aside`

  grid-area: tarefas;
  height: 100%;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }

  ul {
    max-height: 350px;
    overflow-y: scroll;
  	scrollbar-width: thin;
  }

  @media screen and (min-width:1280px) {
    
    h2{
      text-align: center;
      font-size: 2.25rem;
      margin-bottom: 24px;
    }

    ul {
      overflow: auto;
      max-height: 500px;
    }
  }


.item {
  background-color: ${props=>props.theme.item.backgroundColor};
  border-radius: 8px;
  box-shadow: 2px 4px 4px #0000009F;
  padding: 12px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;

  h3 {
    margin-bottom: 8px;
    word-break: break-all;
  }

  span {
    color: ${props=>props.theme.item.textColor};
  }

  @media screen and (min-width:1280px) {
    font-size: 1.8rem;
  }
}

.itemSelecionado {
  background-color: ${props=>props.theme.item.selectedBackgroundColor};
  box-shadow: 2px 4px 4px #0000009F inset;
}

.itemCompletado {
  background-color: ${props=>props.theme.item.completedBackgroundColor};
  cursor: auto;

  .concluido {
    display: block;
    background-image: url(${check});
    background-repeat: no-repeat;
    background-size: 38px 38px;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 42px;
    height: 43px;
  }
}
`