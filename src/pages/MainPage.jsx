import { useCallback, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import { fetchCards } from '../services/api'

const MainPage = () => {
	const [loading, setLoading] = useState(false)
	const [cards, setCards] = useState([])
	const [error, setError] = useState('')

	// Получаем карточки
	const getCards = useCallback(async () => {
		setLoading(true)
		try {
			const data = await fetchCards()
			setCards(data.tasks)
		} catch (err) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		getCards()
	}, [getCards])

	return (
		<Container>
			<Header />
			<Main loading={loading} cards={cards} error={error} />
			<Outlet />
		</Container>
	)
}

export default MainPage
