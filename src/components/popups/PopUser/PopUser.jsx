import { useNavigate } from 'react-router-dom'
import {
	SPopUserSet,
	SPopUserSetBtn,
	SPopUserSetMail,
	SPopUserSetName,
	SPopUserSetTheme,
} from './PopUser.styled'

export default function PopUser({ setIsAuth }) {
	const navigate = useNavigate()

	function handleLogout(e) {
		e.preventDefault()
		setIsAuth(false)
		navigate('/sign-in')
	}

	return (
		<SPopUserSet id='user-set-target'>
			<SPopUserSetName>Ivan Ivanov</SPopUserSetName>
			<SPopUserSetMail>ivan.ivanov@gmail.com</SPopUserSetMail>
			<SPopUserSetTheme>
				<p>Темная тема</p>
				<input type='checkbox' className='checkbox' name='checkbox' />
			</SPopUserSetTheme>
			<SPopUserSetBtn onClick={handleLogout}>Выйти</SPopUserSetBtn>
		</SPopUserSet>
	)
}
