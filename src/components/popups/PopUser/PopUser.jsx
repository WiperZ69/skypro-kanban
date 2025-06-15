import {
	SPopUserSet,
	SPopUserSetBtn,
	SPopUserSetMail,
	SPopUserSetName,
	SPopUserSetTheme,
} from './PopUser.styled'

export default function PopUser() {
	return (
		<SPopUserSet id='user-set-target'>
			<SPopUserSetName>Ivan Ivanov</SPopUserSetName>
			<SPopUserSetMail>ivan.ivanov@gmail.com</SPopUserSetMail>
			<SPopUserSetTheme>
				<p>Темная тема</p>
				<input type='checkbox' name='checkbox' />
			</SPopUserSetTheme>
			<SPopUserSetBtn to='/logout'>Выйти</SPopUserSetBtn>
		</SPopUserSet>
	)
}
