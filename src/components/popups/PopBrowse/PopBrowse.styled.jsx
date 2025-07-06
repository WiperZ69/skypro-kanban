import styled from 'styled-components'

export const PopBrowse = styled.div`
	position: fixed;
	inset: 0;
	z-index: 50;
	background-color: rgba(0, 0, 0, 0.5);
`

export const PopBrowseContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const PopBrowseBlock = styled.div`
	width: 630px;
	max-height: 90vh;
	overflow-y: auto;
	background-color: #fff;
	border-radius: 16px;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
	padding: 40px 30px 48px 30px;
`

export const PopBrowseContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
`

export const PopBrowseTopBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
`

export const PopBrowseTtl = styled.h2`
	flex-grow: 1;
	font-size: 20px;
	font-weight: 600;
`

export const PopBrowseClose = styled.button`
	background: none;
	border: none;
	font-size: 20px;
	cursor: pointer;
`

export const StatusBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const StatusTitle = styled.h3`
	font-size: 14px;
	font-weight: 600;
`

export const StatusThemes = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`

export const PopBrowseWrap = styled.div`
	display: flex;
	gap: 32px;
`

export const PopBrowseForm = styled.form`
	flex: 1;
`

export const BrowseFormBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const BrowseFormLabel = styled.label`
	font-size: 14px;
	font-weight: 600;
`

export const BrowseFormArea = styled.textarea`
	resize: vertical;
	min-height: 200px;
	font-size: 14px;
	padding: 14px;
	border-radius: 8px;
	background-color: ${({ $isEditing }) => ($isEditing ? '#ffffff' : '#eaeef6')};
	border: ${({ $isEditing }) =>
		$isEditing ? '0.70px solid rgba(148, 166, 190, 0.4)' : 'none'};
	:focus {
		border: 0 none #fff;
		overflow: hidden;
		outline: none;
	}
`

export const ThemeDownCategories = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const CategoriesTitle = styled.h3`
	font-size: 18px;
	font-weight: 600;
`

export const Theme = styled.div`
	padding: 6px 12px;
	border-radius: 20px;
	font-size: 14px;
	background-color: ${({ theme }) => {
		switch (theme) {
			case 'gray':
				return '#94A6BE'
			case 'orange':
				return '#ffe4c2'
			case 'purple':
				return '#e9d4ff'
			case 'green':
				return '#b4fdd1'
			default:
				return 'transparent'
		}
	}};
	color: ${({ theme }) => {
		switch (theme) {
			case 'gray':
				return '#fff'
			case 'orange':
				return '#ff6d00'
			case 'purple':
				return '#9a48f1'
			case 'green':
				return '#06b16e'
			default:
				return '#94A6BE'
		}
	}};
	border: ${({ theme }) => {
		switch (theme) {
			case 'gray':
				return '0.7px solid #94A6BE'
			case 'orange':
				return 'none'
			case 'purple':
				return 'none'
			case 'green':
				return 'none'
			default:
				return '0.7px solid #94A6BE'
		}
	}};
	cursor: pointer;
	opacity: ${({ $isActive }) => ($isActive ? 1 : 0.6)};
	transition: 0.2s;
`

export const BtnBlock = styled.div`
	display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
	justify-content: space-between;
`

export const BtnGroup = styled.div`
	display: flex;
	gap: 12px;
`

export const Button = styled.button`
	padding: 10px 14px;
	font-size: 14px;
	border-radius: 4px;
	cursor: pointer;
	background-color: ${({ $variant }) =>
		$variant === 'primary' ? '#565eef' : 'transparent'};
	color: ${({ $variant }) => ($variant === 'primary' ? '#fff' : '#565eef')};
	border: ${({ $variant }) =>
		$variant === 'primary' ? '0.70px solid #fff' : '0.70px solid #565eef'};
	transition: background-color 0.3s;

	&:hover {
		background-color: ${({ $variant }) =>
			$variant === 'primary' ? '#303f9f' : '#565eef'};
		color: ${({ $variant }) => ($variant === 'primary' ? '#fff' : '#fff')};
	}
`

export const LoadingMessage = styled.div`
	padding: 40px;
	text-align: center;
	font-size: 16px;
	color: #999;
	font-style: italic;
`

export const ErrorMessage = styled.div`
	padding: 40px;
	text-align: center;
	font-size: 16px;
	color: red;
	font-weight: bold;
`
