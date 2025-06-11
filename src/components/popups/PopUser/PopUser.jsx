import { createPortal } from 'react-dom'

import {
	SPopUserSet,
	SPopUserSetBtn,
	SPopUserSetMail,
	SPopUserSetName,
	SPopUserSetTheme,
} from './PopUser.styled'

export default function PopUser({ togglePopUser, togglePopExit }) {
	const portalContainer = document.getElementById('pop-user-portal')

	if (!portalContainer) {
		console.warn('Portal container #pop-user-portal not found')
		return null
	}
	return createPortal(
		<SPopUserSet id='user-set-target'>
			<SPopUserSetName>Ivan Ivanov</SPopUserSetName>
			<SPopUserSetMail>ivan.ivanov@gmail.com</SPopUserSetMail>
			<SPopUserSetTheme>
				<p>Темная тема</p>
				<input type='checkbox' className='checkbox' name='checkbox' />
			</SPopUserSetTheme>
			<SPopUserSetBtn
				className='_hover03'
				onClick={() => {
					togglePopUser() // Close PopUser
					togglePopExit() // Open PopExit
				}}
			>
				<a href='#'>Выйти</a>
			</SPopUserSetBtn>
		</SPopUserSet>,
		portalContainer
	)
}
