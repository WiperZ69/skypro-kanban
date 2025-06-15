import styled, { css, keyframes } from 'styled-components'
import { Hover01, SubTtl } from '../../../styles/GlobalStyles'

// Анимация для фона
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

// Анимация для попапа
const scaleIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`

const defaultStyles = css`
	background-color: #ffe4c2;
	color: #3e3e3e;
`

const orangeStyles = css`
	background-color: #ffe4c2;
	color: #ff6d00;
`

const greenStyles = css`
	background-color: #b4fdd1;
	color: #06b16e;
`

const purpleStyles = css`
	background-color: #e9d4ff;
	color: #9a48f1;
`

const grayStyles = css`
	background-color: #94a6be;
	color: #ffffff;
`

const activeCategoryStyles = css`
	opacity: 1 !important;
`

export const SPopNewCard = styled.div`
	display: block;
	width: 100%;
	min-width: 375px;
	height: 100%;
	min-height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 6;
	animation: ${fadeIn} 0.3s ease-in;
`

export const SPopNewCardContainer = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding: 0 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.4);
`

export const SPopNewCardBlock = styled.div`
	background-color: #ffffff;
	max-width: 600px;
	width: 100%;
	padding: 24px;
	border-radius: 10px;
	border: 0.7px solid #cccccc;
	position: relative;
	animation: ${scaleIn} 0.3s ease-out;
`

export const SPopNewCardContent = styled.div`
	display: block;
	text-align: left;
`

export const SPopNewCardTtl = styled.div`
	color: #000;
	font-size: 20px;
	font-weight: bold;
	line-height: 24px;
	margin-bottom: 20px;
`

export const SPopNewCardClose = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
	color: #94a6be;
	cursor: pointer;
	font-size: 20px;
	&:hover {
		color: #000000;
	}
`

export const SPopNewCardWrap = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`

export const SPopNewCardForm = styled.form`
	max-width: 370px;
	width: 100%;
	display: block;
	margin-bottom: 20px;
`

export const FormNewBlock = styled.div`
	display: flex;
	flex-direction: column;
`

export const FormNewLabel = styled.label`
	${SubTtl}
`

const NewInput = styled.input`
	margin: 20px 0;
`

export const FormNewInput = styled.input`
	width: 100%;
	outline: none;
	padding: 14px;
	background: transparent;
	border: 0.7px solid rgba(148, 166, 190, 0.4);
	border-radius: 8px;
	font-size: 14px;
	line-height: 1;
	letter-spacing: -0.14px;
	margin-bottom: 14px;
	&::-moz-placeholder {
		font-weight: 400;
		font-size: 14px;
		line-height: 1px;
		color: #94a6be;
		letter-spacing: -0.14px;
	}
	&::placeholder {
		font-weight: 400;
		font-size: 14px;
		line-height: 1px;
		color: #94a6be;
		letter-spacing: -0.14px;
	}
	${NewInput}
`

export const FormNewArea = styled.textarea`
	${FormNewInput}
	padding: 4px;
	max-width: 370px;
	height: 200px;
`

export const FormNewCreate = styled.button`
	width: 132px;
	height: 30px;
	background-color: #565eef;
	border-radius: 4px;
	border: 0;
	outline: none;
	font-size: 14px;
	font-weight: 500;
	line-height: 1;
	color: #ffffff;
	float: right;
	${Hover01}
`

export const Categories = styled.div`
	margin-bottom: 20px;
`

export const CategoriesThemes = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: flex-start;
	justify-content: flex-start;
`

export const CategoriesP = styled.p`
	${SubTtl}
	margin-bottom: 14px;
`

export const CategoryTheme = styled.div`
	display: inline-block;
	width: auto;
	height: 30px;
	padding: 8px 20px;
	border-radius: 24px;
	cursor: pointer;
	margin-right: 7px;
	opacity: 0.4;
	${props =>
		props.color === 'default' &&
		css`
			${defaultStyles}
		`}
	${props =>
		props.color === 'orange' &&
		css`
			${orangeStyles}
		`}
  ${props =>
		props.color === 'green' &&
		css`
			${greenStyles}
		`}
  ${props =>
		props.color === 'purple' &&
		css`
			${purpleStyles}
		`}
  ${props =>
		props.color === 'gray' &&
		css`
			${grayStyles}
		`}
  ${props =>
		props.isActive &&
		css`
			${activeCategoryStyles}
		`}
`

export const CategoryText = styled.p`
	font-size: 14px;
	font-weight: 600;
	line-height: 14px;
	white-space: nowrap;
`
