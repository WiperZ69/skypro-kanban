import { useLayoutEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import PopBrowse from './components/popups/PopBrowse/PopBrowse.jsx'
import PopExit from './components/popups/PopExit/PopExit.jsx'
import PopNewCard from './components/popups/PopNewCard/PopNewCard.jsx'
import PopUser from './components/popups/PopUser/PopUser.jsx'
import { GlobalStyles } from './styles/GlobalStyles.jsx'

const Wrapper = styled.div`
	max-width: 100%;
	width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	background-color: #f1f1f1;
`

const theme = {
	textColor: '#000000',
}

function App() {
	const [loading, setLoading] = useState(true)
	const [isPopExitOpen, setIsPopExitOpen] = useState(false)
	const [isPopNewCardOpen, setIsPopNewCardOpen] = useState(false)
	const [isPopBrowseOpen, setIsPopBrowseOpen] = useState(false)
	const [isPopUserOpen, setIsPopUserOpen] = useState(false)
	const [selectedCard, setSelectedCard] = useState(null)

	useLayoutEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])

	const togglePopExit = () => {
		setIsPopExitOpen(!isPopExitOpen)
		setIsPopUserOpen(false)
		setIsPopNewCardOpen(false)
		setIsPopBrowseOpen(false)
	}

	const togglePopNewCard = () => {
		setIsPopNewCardOpen(!isPopNewCardOpen)
		setIsPopExitOpen(false)
		setIsPopUserOpen(false)
		setIsPopBrowseOpen(false)
	}

	const togglePopBrowse = card => {
		setIsPopBrowseOpen(!isPopBrowseOpen)
		setSelectedCard(card)
		setIsPopExitOpen(false)
		setIsPopUserOpen(false)
		setIsPopNewCardOpen(false)
	}

	const togglePopUser = () => {
		setIsPopUserOpen(!isPopUserOpen)
		setIsPopExitOpen(false)
		setIsPopNewCardOpen(false)
		setIsPopBrowseOpen(false)
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Wrapper>
				{isPopExitOpen && <PopExit togglePopExit={togglePopExit} />}
				{isPopNewCardOpen && <PopNewCard togglePopNewCard={togglePopNewCard} />}
				{isPopBrowseOpen && (
					<PopBrowse togglePopBrowse={togglePopBrowse} card={selectedCard} />
				)}
				<Header
					togglePopNewCard={togglePopNewCard}
					togglePopUser={togglePopUser}
				/>
				{isPopUserOpen && (
					<PopUser
						togglePopUser={togglePopUser}
						togglePopExit={togglePopExit}
					/>
				)}
				<Main loading={loading} togglePopBrowse={togglePopBrowse} />
			</Wrapper>
		</ThemeProvider>
	)
}

export default App
