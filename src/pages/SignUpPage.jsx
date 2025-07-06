import AuthForm from '../components/AuthForm/AuthForm'

const SignUpPage = ({ setIsAuth }) => {
	return <AuthForm setIsAuth={setIsAuth} isSignUp={true} />
}

export default SignUpPage
