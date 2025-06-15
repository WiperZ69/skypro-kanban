import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Hover01 } from '../../styles/GlobalStyles'

export const AuthFormContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background: #eaeef6;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const AuthFormModal = styled.div`
	max-width: 368px;
	max-height: 329px;
	width: 100%;
	height: 100%;
	border: 0.7px solid #d4dbe5;
	border-radius: 10px;
	padding: 50px 60px;
	box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
	background: #fff;
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
	color: #000;
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
	border: 0.7px solid rgba(148, 166, 190, 0.4);
	border-radius: 8px;
	padding: 8px 10px;
	width: 100%;
	height: 30px;
	max-width: 250px;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	letter-spacing: -0.02em;
	color: #94a6be;
`

export const FormButton = styled.button`
	width: 100%;
	height: 100%;
	max-width: 272px;
	max-height: 30px;
	border-radius: 4px;
	padding: 8px 10px;
	background: #565eef;
	font-weight: 500;
	font-size: 14px;
	text-align: center;
	color: #fff;
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
	color: rgba(148, 166, 190, 0.4);
`

export const FormLink = styled(Link)`
	color: rgba(148, 166, 190, 0.4);
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	letter-spacing: -0.01em;
	text-align: center;
`
