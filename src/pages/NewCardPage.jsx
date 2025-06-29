import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'
import { postCard } from '../services/api'

const NewCardPage = ({ fetchCards }) => {
	const [activeCategory, setActiveCategory] = useState('')
	const navigate = useNavigate()

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
			await postCard(card)
			await fetchCards()
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
