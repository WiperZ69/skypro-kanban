import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { signIn, signUp } from '../../services/auth'
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
	FormLink,
	FormText,
} from './AuthForm.styled'

const AuthForm = ({ isSignUp, setIsAuth }) => {
	const navigate = useNavigate()
	const { updateUserInfo } = useContext(AuthContext)

	// состояние полей
	const [formData, setFormData] = useState({
		name: '',
		login: '',
		password: '',
	})

	// состояние ошибок
	const [errors, setErrors] = useState({
		name: '',
		login: '',
		password: '',
	})

	// состояние текста ошибки, чтобы показать её пользователю
	const [error, setError] = useState('')

	// функция валидации
	const validateForm = () => {
		const newErrors = { name: '', login: '', password: '' }
		let isValid = true

		if (isSignUp && !formData.name.trim()) {
			newErrors.name = true
			setError('Заполните все поля')
			isValid = false
		}

		if (!formData.login.trim()) {
			newErrors.login = true
			setError('Заполните все поля')
			isValid = false
		}

		if (!formData.password.trim()) {
			newErrors.password = true
			setError('Заполните все поля')
			isValid = false
		}

		setErrors(newErrors)
		return isValid
	}

	// функция, которая отслеживает в полях изменения
	// и меняет состояние компонента
	const handleChange = e => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
		setErrors({ ...errors, [name]: false })
		setError('')
	}

	// функция отправки формы
	const handleSubmit = async e => {
		e.preventDefault()
		if (!validateForm()) {
			// если у нас форма не прошла валидацию, то дальше не продолжаем
			return
		}
		try {
			// чтобы не писать две разных функции, выберем нужный запрос через
			// тернарный оператор
			const data = !isSignUp
				? await signIn({ login: formData.login, password: formData.password })
				: await signUp(formData)

			if (data) {
				updateUserInfo(data)
				setIsAuth(true)
				navigate('/')
			}
		} catch (err) {
			setError(err.message)
		}
	}

	return (
		<AuthFormContainer>
			<AuthFormModal>
				<AuthFormWrapper>
					<AuthFormTitle>{isSignUp ? 'Регистрация' : 'Вход'}</AuthFormTitle>
					<AuthFormForm id='form' onSubmit={handleSubmit}>
						<FormInputWrapper>
							{isSignUp && (
								<FormInput
									$tag='input'
									$type='text'
									name='name'
									id='formname'
									placeholder='Имя'
									value={formData.name}
									onChange={handleChange}
									$error={errors.name}
								/>
							)}
							<FormInput
								$tag='input'
								$type='text'
								name='login'
								id='formlogin'
								placeholder='Эл. почта'
								value={formData.login}
								onChange={handleChange}
								$error={errors.login}
							/>
							<FormInput
								$tag='input'
								$type='password'
								name='password'
								id='formpassword'
								placeholder='Пароль'
								value={formData.password}
								onChange={handleChange}
								$error={errors.password}
							/>
						</FormInputWrapper>
						<p style={{ color: 'red' }}>{error}</p>
						<FormButton>{isSignUp ? 'Зарегистрироваться' : 'Войти'}</FormButton>

						{!isSignUp && (
							<FormGroup>
								<FormText>Нужно зарегистрироваться?</FormText>
								<FormLink to='/sign-up'>Регистрируйтесь здесь</FormLink>
							</FormGroup>
						)}
						{isSignUp && (
							<FormGroup>
								<FormText>
									Есть аккаунт? <FormLink to='/sign-in'>Войдите здесь</FormLink>
								</FormText>
							</FormGroup>
						)}
					</AuthFormForm>
				</AuthFormWrapper>
			</AuthFormModal>
		</AuthFormContainer>
	)
}

export default AuthForm
