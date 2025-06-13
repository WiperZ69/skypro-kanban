import { Link, useNavigate } from 'react-router-dom'
import {
	AuthFormContainer,
	AuthFormForm,
	AuthFormModal,
	AuthFormTitle,
	AuthFormWrapper,
	FormButton,
	FormGroup,
	FormInput,
	FormInputWrapper,
} from './AuthForm.styled'

const AuthForm = ({ isSignUp, setIsAuth }) => {
	const navigate = useNavigate()
	const handleLogin = e => {
		e.preventDefault()
		setIsAuth(true)
		navigate('/')
	}
	return (
		<AuthFormContainer>
			<AuthFormModal>
				<AuthFormWrapper>
					<AuthFormTitle>{isSignUp ? 'Регистрация' : 'Вход'}</AuthFormTitle>
					<AuthFormForm id='form' action='#'>
						<FormInputWrapper>
							{isSignUp && (
								<FormInput
									$tag='input'
									className='auth-input'
									$type='text'
									name='name'
									id='formname'
									placeholder='Имя'
								/>
							)}
							<FormInput
								$tag='input'
								className='auth-input'
								$type='text'
								name='login'
								id='formlogin'
								placeholder='Эл. почта'
							/>
							<FormInput
								$tag='input'
								$type='password'
								name='password'
								id='formpassword'
								placeholder='Пароль'
							/>
						</FormInputWrapper>

						<FormButton
							onClick={handleLogin}
							$type='secondary'
							className='button-enter'
							$text={isSignUp ? 'Зарегистрироваться' : 'Войти'}
						/>

						{!isSignUp && (
							<FormGroup>
								<p>Нужно зарегистрироваться?</p>
								<Link to='/sign-up'>Регистрируйтесь здесь</Link>
							</FormGroup>
						)}
						{isSignUp && (
							<FormGroup>
								<p>
									Есть аккаунт? <Link to='/sign-in'>Войдите здесь</Link>
								</p>
							</FormGroup>
						)}
					</AuthFormForm>
				</AuthFormWrapper>
			</AuthFormModal>
		</AuthFormContainer>
	)
}

export default AuthForm
