import { createGlobalStyle, css } from 'styled-components'

export const Hover01 = css`
	&:hover {
		background-color: #33399b;
	}
`

export const Hover02 = css`
	&:hover {
		color: #33399b;
	}
	&:hover::after {
		border-left-color: #33399b;
		border-bottom-color: #33399b;
	}
`

export const Hover03 = css`
	&:hover {
		background-color: #33399b;
		color: #ffffff;
		a {
			color: #ffffff;
		}
	}
`

export const SubTtl = css`
	color: #000;
	font-size: 14px;
	font-weight: 600;
	line-height: 1;
`

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  textarea {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }
`
