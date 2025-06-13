import { useState } from 'react'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'

const NewCardPage = () => {
	const [activeCategory, setActiveCategory] = useState('orange')

	const handleCategoryClick = color => {
		setActiveCategory(color)
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log('Задача создана')
		// TODO: API-запрос
	}

	return (
		<PopNewCard
			activeCategory={activeCategory}
			onCategoryClick={handleCategoryClick}
			onSubmit={handleSubmit}
		/>
	)
}

export default NewCardPage
