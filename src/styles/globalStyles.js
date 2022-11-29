import { createGlobalStyle } from 'styled-components'

import { smooth, v } from './variables'
export const GblStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    html {
  font-size: 62.5%;
}
@media only screen and (max-width: 85.375em) {
  html {
    font-size: 58%;
  }
}

@media only screen and (max-width: 78.12em) {
  html {
    font-size: 56.25%;
  }
}

@media only screen and (max-width: 56.25em) {
  html {
    font-size: 50%;
  }
}

@media only screen and (min-width: 112.5em) {
  html {
    font-size: 75%;
  }
}


    body {
  background-color: #021431;
  color: ${({ theme }) => theme.text};
  box-sizing: border-box;
  padding: 0;
  font-family: DM Sans;
  

}

input{
    padding: ${v.smSpace};
    height: 4.1rem;
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-weight: 400;
    color: inherit;
}

::selection {
  color: #0072bc;
  background-color: #d6e9f5;
}
*::-webkit-scrollbar {
  width: 0.5rem;
}
*::-webkit-scrollbar-track {
  width: 1rem !important;
  border-radius: 10px;
  background: #f1f0fb;
}
*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: 2px 2px 12px #ccc inset, -1px -1px 12px #ddd9d9 inset;
}
*::-webkit-scrollbar-thumb:hover {
  cursor: grab;
  box-shadow: 2px 2px 12px #ddd9d9 inset, -1px -1px 12px #747474 inset;
}
*::-webkit-scrollbar-thumb:active {
  cursor: grabbing;
}
`
