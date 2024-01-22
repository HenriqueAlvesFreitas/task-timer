import styled from "styled-components";


export const Switch = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
  --light: #ffff;
  --dark: #28292c;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);


.switch-label {
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: var(--dark);
  border-radius: 2rem;
  cursor: pointer;
  border: 3px solid var(--dark);
}

.checkbox {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked ~ .slider {
  background-color: var(--light);
}

.slider::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
  box-shadow: inset 12px -4px 0px 0px var(--light);
  background-color: var(--dark);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked ~ .slider::before {
  -webkit-transform: translateX(50px);
  -ms-transform: translateX(50px);
  transform: translateX(50px);
  background-color: var(--dark);
  -webkit-box-shadow: none;
  box-shadow: none;
}


@media screen and (max-width:1280px)  {
  width: 75px;
  height: 37.5px;

  .switch-label {
    width: 100%;
    height: 37.5px;
  }

  .slider::before {
    top: 7px;
    left: 2px;
    width: 23px;
    height: 23px;
  }

  .checkbox:checked ~ .slider::before {
    transform: translateX(45px);
  }
}
`