import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'
import { CardContext } from '../context/CardContext'
import { fetchCards, postCard } from '../services/api'

const NewCardPage = () => {
	const [selectedDate, setSelectedDate] = useState(null)
	const [activeCategory, setActiveCategory] = useState('')
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()
	const { setCards } = useContext(CardContext)

	const handleCategoryClick = color => {
		setActiveCategory(color)
	}

	const categoryMap = {
		orange: 'Web Design',
		green: 'Research',
		purple: 'Copywriting',
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)

		const formData = new FormData(e.currentTarget)

		const card = {
			title: formData.get('name') || 'Новая задача',
			description: formData.get('text') || '',
			topic: categoryMap[activeCategory] || 'Research',
			status: 'Без статуса',
			date: selectedDate
				? selectedDate.toISOString()
				: new Date().toISOString(),
		}

		try {
			await postCard(card)
			const updatedCards = await fetchCards()
			setCards(updatedCards)
			navigate('/')
		} catch (error) {
			console.error('Ошибка при создании карточки:', error)
		} finally {
			setLoading(false)
		}
	}

	const handleClose = () => {
		navigate('/')
	}

	return (
		<PopNewCard
			activeCategory={activeCategory}
			onCategoryClick={handleCategoryClick}
			onSubmit={handleSubmit}
			onClose={handleClose}
			selectedDate={selectedDate}
			onDateSelect={setSelectedDate}
			loading={loading}
		/>
	)
}

export default NewCardPage
