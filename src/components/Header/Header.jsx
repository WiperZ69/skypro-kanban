import { useState } from 'react'
import { Scontainer } from '../Main/Main.styled'
import PopUser from '../popups/PopUser/PopUser'
import { Hblock, Hnav, Sheader } from './Header.styled'

export default function Header() {
	const [isPopUserOpen, setIsPopUserOpen] = useState(false)

	const togglePopUser = () => {
		setIsPopUserOpen(!isPopUserOpen)
	}

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
						<button className='header__btn-main-new _hover01' id='btnMainNew'>
							<a href='#popNewCard'>Создать новую задачу</a>
						</button>
						<a
							href='#user-set-target'
							className='header__user _hover02'
							onClick={e => {
								e.preventDefault()
								togglePopUser()
							}}
						>
							Ivan Ivanov
						</a>
						{isPopUserOpen && <PopUser />}
					</Hnav>
				</Hblock>
			</Scontainer>
		</Sheader>
	)
}
