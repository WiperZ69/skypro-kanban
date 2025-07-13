import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Hover01 } from '../../styles/GlobalStyles'

export const AuthFormContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background: ${({ theme }) => theme.colors.tertiary};
	display: flex;
	justify-content: center;
	align-items: center;
`

export const AuthFormModal = styled.div`
	max-width: 368px;
	max-height: 329px;
	width: 100%;
	height: 100%;
	border: 0.7px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 10px;
	padding: 50px 60px;
	box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
	background: ${({ theme }) => theme.colors.background};
`

export const AuthFormWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 20px;
`

export const AuthFormTitle = styled.h2`
	font-weight: 700;
	font-size: 20px;
	line-height: 150%;
	letter-spacing: -0.03em;
	text-align: center;
	color: ${({ theme }) => theme.colors.text};
`

export const AuthFormForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
`

export const FormInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 7px;
	width: 100%;
`

export const FormInput = styled.input`
	border: 0.7px solid ${({ theme }) => theme.colors.secondary + '66'};
	border-radius: 8px;
	padding: 8px 10px;
	width: 100%;
	height: 30px;
	max-width: 250px;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.text};
	background-color: ${({ theme }) => theme.colors.background};
	::placeholder {
		color: ${({ theme }) => theme.colors.secondary};
	}
`

export const FormButton = styled.button`
	width: 100%;
	height: 100%;
	max-width: 272px;
	max-height: 30px;
	border-radius: 4px;
	padding: 8px 10px;
	background: ${({ theme }) => theme.colors.primary};
	font-weight: 500;
	font-size: 14px;
	text-align: center;
	color: ${({ theme }) => theme.colors.buttonText};
	cursor: pointer;
	outline: none;
	border: none;
	${Hover01}
`

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const FormText = styled.p`
	margin: 0;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	letter-spacing: -0.01em;
	text-align: center;
	color: ${({ theme }) => theme.colors.secondary + '66'};
`

export const FormLink = styled(Link)`
	color: ${({ theme }) => theme.colors.secondary + '66'};
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	letter-spacing: -0.01em;
	text-align: center;
`
