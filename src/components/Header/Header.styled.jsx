import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Hover01, Hover02 } from '../../styles/GlobalStyles'

export const Sheader = styled.header`
	width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
`
export const Hblock = styled.div`
	height: 70px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	top: 0;
	left: 0;
	padding: 0 10px;
`
export const Hnav = styled.nav`
	max-width: 290px;
	position: relative;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Huser = styled.a`
	height: 20px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	user-select: none;
	font-size: 14px;
	line-height: 20px;
	color: #565eef;
	${Hover02}
	&::after {
		content: '';
		display: block;
		width: 6px;
		height: 6px;
		border-radius: 1px;
		border-left: 1.9px solid #565eef;
		border-bottom: 1.9px solid #565eef;
		transform: rotate(-45deg);
		margin: -6px 0 0 5px;
		padding: 0;
	}
`

export const Hbtn = styled(Link)`
	max-width: 178px;
	text-align: center;
	padding: 10px 14px;
	border-radius: 4px;
	background-color: #565eef;
	color: #ffffff;
	border: none;
	font-size: 14px;
	font-weight: 500;
	margin-right: 20px;
	transition: all 0.3s;
	${Hover01}
`
