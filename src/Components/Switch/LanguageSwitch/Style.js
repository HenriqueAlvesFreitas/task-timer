import styled from "styled-components";

import brazilFlag from "./../../../assets/img/brazil-flag.svg"
import unitedFlag from "./../../../assets/img/us-flag.svg"

export const MySwitch = styled.label`


  --toggle-size: 30px;
  /* the size is adjusted using font-size,
     this is not transform scale,
     so you can choose any size */
  --container-width: 5.625em;
  --container-height: 2.5em;
  --container-radius: 6.25em;
  /* radius 0 - minecraft mode :) */
  --circle-container-diameter: 3.375em;
  --sun-moon-diameter: 2.125em;
  --sun-bg: #ECCA2F;
  --moon-bg: #C4C9D1;
  --spot-color: #959DB1;
  --circle-container-offset: calc((var(--circle-container-diameter) - var(--container-height)) / 2 * -1);
  --stars-color: #fff;
  --clouds-color: #F3FDFF;
  --back-clouds-color: #AACADF;
  --transition: .5s cubic-bezier(0, -0.02, 0.4, 1.25);
  --circle-transition: .3s cubic-bezier(0, -0.02, 0.35, 1.17);


.theme-switch, .theme-switch *, .theme-switch *::before, .theme-switch *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: var(--toggle-size);
}

.theme-switch__container {
  width: 100px;
  height: 50px;
  background-color: ${props=>props.theme.switch.backgroundColor};
  border-radius: 2em;
  border-style:solid;
  border-width:3px;
  border-color:#28292c;
  overflow: hidden;
  cursor: pointer;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
  position: relative;
}

.theme-switch__container::before {
  content: "";
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: var(--container-radius)
}

.theme-switch__checkbox {
  display: none;
}

.theme-switch__circle-container {
  width: var(--circle-container-diameter);
  height: var(--circle-container-diameter);
  position: absolute;
  left: 0px;
  top: -2px;
  border-radius: var(--container-radius);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: var(--circle-transition);
  -o-transition: var(--circle-transition);
  transition: var(--circle-transition);
  pointer-events: none;
}

.theme-switch__sun-moon-container {
  pointer-events: auto;
  position: relative;
  width: var(--sun-moon-diameter);
  height: var(--sun-moon-diameter);
  margin: auto;
  border-radius: var(--container-radius);
  background-color: red;
  background-image: url(${brazilFlag});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
}

.theme-switch__moon {
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);
  width: 100%;
  height: 100%;
  background-color: var(--moon-bg);
  background-image: url(${unitedFlag});
  background-size: cover;
  background-position: center;
  border-radius: inherit;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
  position: relative;
}



/* actions */


.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
  left: calc(100% - 0px - var(--circle-container-diameter));
}



.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__moon {
  -webkit-transform: translate(0);
  -ms-transform: translate(0);
  transform: translate(0);
}

@media screen and (max-width:1280px)  {
  .theme-switch__container {
  width: 75px;
  height: 37.5px;
  }

  .theme-switch__circle-container {
  left: -3px;
  top: -7.5px;
  }
}


`