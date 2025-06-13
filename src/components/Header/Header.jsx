import { useRef, useState } from 'react'
import { Scontainer } from '../Main/Main.styled'
import PopUser from '../popups/PopUser/PopUser'
import { Hblock, Hbtn, Hnav, Huser, Sheader } from './Header.styled'

export default function Header({ togglePopUser, setIsAuth }) {
	const userBtnRef = useRef(null)
	const [isPopUserOpen, setIsPopUserOpen] = useState(false)
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
						<Hbtn id='btnMainNew' to='/card/add'>
							Создать новую задачу
						</Hbtn>
						<Huser
							ref={userBtnRef}
							onClick={e => {
								e.preventDefault()
								setIsPopUserOpen(!isPopUserOpen)
							}}
						>
							Ivan Ivanov
							<div id='pop-user-portal' />
						</Huser>
						{isPopUserOpen && (
							<PopUser
								togglePopUser={togglePopUser}
								togglePopExit={() => setIsPopUserOpen(false)}
								setIsAuth={setIsAuth}
							/>
						)}
					</Hnav>
				</Hblock>
			</Scontainer>
		</Sheader>
	)
}
