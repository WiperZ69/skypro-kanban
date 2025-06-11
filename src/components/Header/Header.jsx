import { useRef } from 'react'
import { Scontainer } from '../Main/Main.styled'
import { Hblock, Hbtn, Hnav, Huser, Sheader } from './Header.styled'

export default function Header({ togglePopNewCard, togglePopUser }) {
	const userBtnRef = useRef(null)
	return (
		<Sheader>
			<Scontainer>
				<Hblock>
					<div className='header__logo _show _light'>
						<a href='' target='_self'>
							<img src='images/logo.png' alt='logo' />
						</a>
					</div>
					<div className='header__logo _dark'>
						<a href='' target='_self'>
							<img src='images/logo_dark.png' alt='logo' />
						</a>
					</div>
					<Hnav>
						<Hbtn id='btnMainNew' onClick={togglePopNewCard}>
							Создать новую задачу
						</Hbtn>
						<Huser
							ref={userBtnRef}
							onClick={e => {
								e.preventDefault()
								togglePopUser()
							}}
						>
							Ivan Ivanov
							<div id='pop-user-portal' />
						</Huser>
					</Hnav>
				</Hblock>
			</Scontainer>
		</Sheader>
	)
}
