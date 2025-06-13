import {
	SPopUserSet,
	SPopUserSetBtn,
	SPopUserSetMail,
	SPopUserSetName,
	SPopUserSetTheme,
} from './PopUser.styled'

export default function PopUser({ setIsAuth }) {


	return (
		<SPopUserSet id='user-set-target'>
			<SPopUserSetName>Ivan Ivanov</SPopUserSetName>
			<SPopUserSetMail>ivan.ivanov@gmail.com</SPopUserSetMail>
			<SPopUserSetTheme>
				<p>Темная тема</p>
				<input type='checkbox' className='checkbox' name='checkbox' />
			</SPopUserSetTheme>
			<SPopUserSetBtn to='/logout' setIsAuth={setIsAuth}>Выйти</SPopUserSetBtn>
		</SPopUserSet>
	)
}
