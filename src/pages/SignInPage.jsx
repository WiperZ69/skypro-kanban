import AuthForm from '../components/AuthForm/AuthForm'

const SignInPage = ({ setIsAuth }) => {
	return <AuthForm setIsAuth={setIsAuth} isSignUp={false} />
}

export default SignInPage
