import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'

const NewCardPage = () => {
	const [activeCategory, setActiveCategory] = useState('orange')
	const navigate = useNavigate()

	const handleCategoryClick = color => {
		setActiveCategory(color)
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log('Задача создана')
		// TODO: API-запрос
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
