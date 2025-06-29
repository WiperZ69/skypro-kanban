import styled, { css, keyframes } from 'styled-components'
import { Hover01, SubTtl } from '../../../styles/GlobalStyles'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const scaleIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`

const categoryStyles = {
	orange: css`
		background-color: #ffe4c2;
		color: #ff6d00;
	`,
	green: css`
		background-color: #b4fdd1;
		color: #06b16e;
	`,
	purple: css`
		background-color: #e9d4ff;
		color: #9a48f1;
	`,
	default: css`
		background-color: #94a6be;
		color: #ffffff;
	`,
}

export const PopNewCard = styled.div`
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

export const PopNewCardContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.4);
`

export const PopNewCardBlock = styled.div`
	background-color: #ffffff;
	max-width: 600px;
	width: 100%;
	padding: 24px;
	border-radius: 10px;
	border: 0.7px solid #cccccc;
	position: relative;
	animation: ${scaleIn} 0.3s ease-out;
`

export const PopNewCardContent = styled.div`
	display: block;
	text-align: left;
`

export const PopNewCardTtl = styled.div`
	color: #000;
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20px;
`

export const PopNewCardClose = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
	color: #94a6be;
	cursor: pointer;
	font-size: 20px;
	&:hover {
		color: #000;
	}
`

export const PopNewCardWrap = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`

export const PopNewCardForm = styled.form`
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
	margin-bottom: 14px;
`

export const FormNewInput = styled.input`
	width: 100%;
	outline: none;
	padding: 14px;
	border: 0.7px solid rgba(148, 166, 190, 0.4);
	border-radius: 8px;
	font-size: 14px;
	margin-bottom: 20px;
	color: #3e3e3e;

	&::placeholder {
		color: #94a6be;
	}
`

export const FormNewArea = styled.textarea`
	${FormNewInput}
	height: 200px;
	padding: 14px;
	border: 0.7px solid rgba(148, 166, 190, 0.4);
	border-radius: 8px;
	resize: vertical;
	min-height: 200px;
	margin-bottom: 20px;
`

export const FormNewCreate = styled.button`
	width: 132px;
	height: 30px;
	background-color: #565eef;
	border-radius: 4px;
	border: none;
	font-size: 14px;
	font-weight: 500;
	color: #ffffff;
	cursor: pointer;
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
	height: 30px;
	padding: 8px 20px;
	border-radius: 24px;
	cursor: pointer;
	margin-right: 7px;
	opacity: ${props => (props.isActive ? 1 : 0.4)};
	${props => categoryStyles[props.color] || categoryStyles.default}
`

export const CategoryText = styled.p`
	font-size: 14px;
	font-weight: 600;
	white-space: nowrap;
`
