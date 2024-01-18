import styled from "styled-components";

export const MyApp = styled.div`

  color: ${props => props.theme.textColor};
	
  display: grid;
  grid-template-rows: min-content min-content ;
  grid-template-areas: 
  "nova-tarefa"
  "cronometro"
  "tarefas"
  "switch"
  ;
  row-gap: 24px;
  min-width: 320px;
  min-height: calc(100vh - 32px);
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${props=>props.theme.appBackgroundColor};

  @media screen and (min-width:1280px)  {
    grid-template-areas: 
    "nova-tarefa tarefas switch"
    "cronometro tarefas switch"
    ;
    column-gap: 64px;
    grid-template-rows: min-content min-content;
    grid-template-columns: 750px 300px;
    justify-content: center;
    align-content: center;
    padding: 64px;
  }

`

export const MyBody = styled.div`


	display: flex;
	justify-content: flex-start;
	font-family: 'Manjari', sans-serif;
	background-color: ${props=>props.theme.bodyBackgroundColor};
	height: 100%;
	width: 100%;
	padding: 16px;
	box-sizing: border-box;


`