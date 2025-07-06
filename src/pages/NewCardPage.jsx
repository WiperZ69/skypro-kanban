import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'
import { CardContext } from '../context/CardContext'
import { postCard } from '../services/api'

const NewCardPage = () => {
	const [activeCategory, setActiveCategory] = useState('')
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

		const formData = new FormData(e.currentTarget)

		const card = {
			title: formData.get('name') || 'Новая задача',
			description: formData.get('text') || '',
			topic: categoryMap[activeCategory] || 'Research',
			status: 'Без статуса',
			date: new Date().toISOString(),
		}

		try {
			const newCard = await postCard(card)
			setCards(prev => [...prev, newCard])
			navigate('/')
		} catch (error) {
			console.error('Ошибка при создании карточки:', error)
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
		/>
	)
}

export default NewCardPage
