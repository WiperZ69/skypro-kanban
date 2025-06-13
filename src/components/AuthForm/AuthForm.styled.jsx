import styled from 'styled-components'

export const AuthFormContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background: #eaeef6;
`

export const AuthFormModal = styled.div`
	width: 368px;
	height: 329px;
	border: 0.7px solid #d4dbe5;
	border-radius: 10px;
	padding: 50px 60px;
	box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
	background: #fff;
`

export const AuthFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
`

export const AuthFormTitle = styled.h2`
	font-weight: 700;
	font-size: 20px;
	line-height: 150%;
	letter-spacing: -0.03em;
	text-align: center;
	color: #000;
`

export const AuthFormForm = styled.form``

export const FormInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 7px;
`

export const FormInput = styled.input`
	border: 0.7px solid rgba(148, 166, 190, 0.4);
	border-radius: 8px;
	padding: 8px 10px;
	width: 100%;
	height: 30px;
`

export const FormButton = styled.button`
	border-radius: 4px;
	padding: 8px 10px;
	background: #565eef;
	font-weight: 500;
	font-size: 14px;
	line-height: 150%;
	letter-spacing: -0.01em;
	text-align: center;
	color: #fff;
`

export const FormGroup = styled.div`
	p {
		font-weight: 400;
		font-size: 14px;
		line-height: 150%;
		letter-spacing: -0.01em;
		text-align: center;
		color: rgba(148, 166, 190, 0.4);
	}
	Link {
		text-decoration: underline;
		text-decoration-skip-ink: none;
	}
`

export const FormText = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	letter-spacing: -0.01em;
	text-align: center;
	color: rgba(148, 166, 190, 0.4);
`
