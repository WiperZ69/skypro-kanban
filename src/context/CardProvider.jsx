import { useContext, useEffect, useState } from 'react'
import {
	editCard as apiEditCard,
	fetchCards as apiFetchCards,
} from '../services/api'
import { AuthContext } from './AuthContext'
import { CardContext } from './CardContext'

export const CardProvider = ({ children }) => {
	const [cards, setCards] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const { user } = useContext(AuthContext)

	useEffect(() => {
		if (!user?.token) return

		const loadCards = async () => {
			setLoading(true)
			try {
				const data = await apiFetchCards({ token: user.token })
				if (data) {
					setCards(data)
				} else {
					console.warn('Ожидался массив карточек, получено:', data)
				}
			} catch (error) {
				setError(error.message)
				console.error('❌ Ошибка загрузки карточек:', error.message)
			} finally {
				setLoading(false)
			}
		}

		loadCards()
	}, [user?.token])

	const editTask = async (id, newData) => {
		setCards(prevCards =>
			prevCards.map(card => (card._id === id ? { ...card, ...newData } : card))
		)
		try {
			await apiEditCard(id, newData)
		} catch (error) {
			console.error('❌ Ошибка обновления карточки:', error.message)
		}
	}

	return (
		<CardContext.Provider value={{ cards, setCards, error, loading, editTask }}>
			{children}
		</CardContext.Provider>
	)
}
