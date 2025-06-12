import { useState } from 'react'
import { Calendar } from '../../Calendar/Calendar'
import {
	Categories,
	CategoriesP,
	CategoriesThemes,
	CategoryText,
	CategoryTheme,
	FormNewArea,
	FormNewBlock,
	FormNewCreate,
	FormNewInput,
	FormNewLabel,
	SPopNewCard,
	SPopNewCardBlock,
	SPopNewCardClose,
	SPopNewCardContainer,
	SPopNewCardContent,
	SPopNewCardForm,
	SPopNewCardTtl,
	SPopNewCardWrap,
} from './PopNewCard.styled'

export default function PopNewCard({ togglePopNewCard }) {
	const [activeCategory, setActiveCategory] = useState('orange')

	const handleCategoryClick = color => {
		setActiveCategory(color)
	}

	const handleSubmit = e => {
		e.preventDefault()
		// Логика отправки формы (например, API-запрос)
		togglePopNewCard() // Закрываем попап после создания задачи
	}

	return (
		<SPopNewCard id='popNewCard'>
			<SPopNewCardContainer onClick={togglePopNewCard}>
				<SPopNewCardBlock onClick={e => e.stopPropagation()}>
					<SPopNewCardContent>
						<SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
						<SPopNewCardClose onClick={togglePopNewCard}>✖</SPopNewCardClose>
						<SPopNewCardWrap>
							<SPopNewCardForm id='formNewCard' onSubmit={handleSubmit}>
								<input type='hidden' name='category' value={activeCategory} />
								<FormNewBlock>
									<FormNewLabel htmlFor='formTitle'>
										Название задачи
									</FormNewLabel>
									<FormNewInput
										type='text'
										name='name'
										id='formTitle'
										placeholder='Введите название задачи...'
										autoFocus
									/>
								</FormNewBlock>
								<FormNewBlock>
									<FormNewLabel htmlFor='textArea'>
										Описание задачи
									</FormNewLabel>
									<FormNewArea
										name='text'
										id='textArea'
										placeholder='Введите описание задачи...'
									/>
								</FormNewBlock>
							</SPopNewCardForm>
							<Calendar />
						</SPopNewCardWrap>
						<Categories>
							<CategoriesP>Категория</CategoriesP>
							<CategoriesThemes>
								<CategoryTheme
									color='orange'
									isActive={activeCategory === 'orange'}
									onClick={() => handleCategoryClick('orange')}
								>
									<CategoryText>Web Design</CategoryText>
								</CategoryTheme>
								<CategoryTheme
									color='green'
									isActive={activeCategory === 'green'}
									onClick={() => handleCategoryClick('green')}
								>
									<CategoryText>Research</CategoryText>
								</CategoryTheme>
								<CategoryTheme
									color='purple'
									isActive={activeCategory === 'purple'}
									onClick={() => handleCategoryClick('purple')}
								>
									<CategoryText>Copywriting</CategoryText>
								</CategoryTheme>
							</CategoriesThemes>
						</Categories>
						<FormNewCreate id='btnCreate' onClick={handleSubmit}>
							Создать задачу
						</FormNewCreate>
					</SPopNewCardContent>
				</SPopNewCardBlock>
			</SPopNewCardContainer>
		</SPopNewCard>
	)
}
