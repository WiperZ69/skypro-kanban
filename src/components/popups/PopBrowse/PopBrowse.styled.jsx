import styled, { css } from 'styled-components'
import { Hover01, Hover03, SubTtl } from '../../../styles/GlobalStyles'

export const SPopBrowse = styled.div`
	display: block;
	width: 100%;
	height: 100%;
	min-width: 375px;
	min-height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 7;
`

export const SPopBrowseContainer = styled.div`
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

export const SPopBrowseBlock = styled.div`
	display: block;
	margin: 0 auto;
	background-color: #ffffff;
	max-width: 630px;
	width: 100%;
	padding: 40px 30px 38px;
	border-radius: 10px;
	border: 0.7px solid #d4dbe5;
	position: relative;
`

export const SPopBrowseContent = styled.div`
	display: block;
	text-align: left;
`

export const SPopBrowseTopBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 18px;
`

export const SPopBrowseTtl = styled.h3`
	color: #000;
	font-size: 20px;
	font-weight: 600;
	line-height: 24px;
`

export const SPopBrowseClose = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 20px;
	cursor: pointer;
	color: #000;
	&:hover {
		color: #666;
	}
`

export const SPopBrowseWrap = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`

export const SPopBrowseForm = styled.form`
	max-width: 370px;
	width: 100%;
	display: block;
	margin-bottom: 20px;
`

export const BrowseFormBlock = styled.div`
	display: flex;
	flex-direction: column;
`

export const BrowseFormLabel = styled.label`
	${SubTtl}
`

export const BrowseFormArea = styled.textarea`
	max-width: 370px;
	width: 100%;
	outline: none;
	padding: 14px;
	background: #eaeef6;
	border: 0.7px solid rgba(148, 166, 190, 0.4);
	border-radius: 8px;
	font-size: 14px;
	line-height: 1;
	letter-spacing: -0.14px;
	margin-top: 14px;
	height: 200px;
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
`

// Стили для тем
const themeStyles = {
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
	gray: css`
		background-color: #94a6be;
		color: #ffffff;
	`,
}

// Категории
export const CategoriesTheme = styled.div`
	display: inline-block;
	width: auto;
	height: 30px;
	padding: 8px 20px;
	border-radius: 24px;
	margin-right: 7px;
	opacity: 0.4;
	${props =>
		props.isActive &&
		css`
			opacity: 1;
		`}
	${props => themeStyles[props.theme]}
`

export const CategoriesThemeText = styled.p`
	font-size: 14px;
	font-weight: 600;
	line-height: 14px;
	white-space: nowrap;
	${props => themeStyles[props.theme]}
`

// Статус
export const StatusBlock = styled.div`
	margin-bottom: 11px;
`

export const StatusTitle = styled.p`
	${SubTtl}
	margin-bottom: 14px;
`

export const StatusThemes = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
`

export const StatusTheme = styled.div`
	border-radius: 24px;
	border: 0.7px solid rgba(148, 166, 190, 0.4);
	color: #94a6be;
	padding: 11px 14px 10px;
	margin-right: 7px;
	margin-bottom: 7px;
	${props =>
		props.isHidden &&
		css`
			display: none;
		`}
	${props => props.theme && themeStyles[props.theme]}
`

export const StatusThemeText = styled.p`
	font-size: 14px;
	line-height: 1;
	letter-spacing: -0.14px;
	${props => props.theme && themeStyles[props.theme]}
`

// Категория внизу
export const ThemeDownCategories = styled.div`
	display: none;
	margin-bottom: 20px;
`

export const CategoriesTitle = styled.p`
	${SubTtl}
	margin-bottom: 14px;
`

// Кнопки (Browse)
export const BtnBrowseBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
	opacity: ${props => (props.isHidden ? 0 : 1)};
	transition: opacity 0.3s;
	${props =>
		props.isHidden &&
		css`
			display: none;
		`}
`

export const BtnGroup = styled.div`
	display: flex;
	button {
		margin-right: 8px;
	}
`

const btnBorStyles = css`
	border: 0.7px solid #565eef;
	background: transparent;
	color: #565eef;
	border-radius: 4px;
`

const btnBgStyles = css`
	background: #565eef;
	color: #ffffff;
	border: none;
`

export const BtnBrowseEdit = styled.button`
	${btnBorStyles}
	${Hover03}
  height: 30px;
	padding: 0 14px;
	margin-bottom: 10px;
`

export const BtnBrowseDelete = styled.button`
	${btnBorStyles}
	${Hover03}
  height: 30px;
	padding: 0 14px;
	margin-bottom: 10px;
`

export const BtnBrowseClose = styled.button`
	${btnBgStyles}
	${Hover01}
  height: 30px;
	padding: 0 14px;
	margin-bottom: 10px;
	border-radius: 4px;
`

// Кнопки (Edit)
export const BtnEditBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
	opacity: ${props => (props.isHidden ? 0 : 1)};
	transition: opacity 0.3s;
	${props =>
		props.isHidden &&
		css`
			display: none;
		`}
`

export const BtnEditSave = styled.button`
	${btnBgStyles}
	${Hover01}
  height: 30px;
	padding: 0 14px;
	margin-bottom: 10px;
	border-radius: 4px;
`

export const BtnEditCancel = styled.button`
	${btnBorStyles}
	${Hover03}
  height: 30px;
	padding: 0 14px;
	margin-bottom: 10px;
	border-radius: 4px;
`

export const BtnEditDelete = styled.button`
	${btnBorStyles}
	${Hover03}
  height: 30px;
	padding: 0 14px;
	margin-bottom: 10px;
`

export const BtnEditClose = styled.button`
	${btnBgStyles}
	${Hover01}
  height: 30px;
	padding: 0 14px;
	margin-bottom: 10px;
	border-radius: 4px;
`
