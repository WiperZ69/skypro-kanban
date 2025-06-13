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

export default function PopNewCard({
	activeCategory,
	onCategoryClick,
	onSubmit,
	onClose
}) {
	return (
		<SPopNewCard id='popNewCard'>
			<SPopNewCardContainer onClick={onClose}>
				<SPopNewCardBlock onClick={e => e.stopPropagation()}>
					<SPopNewCardClose onClick={onClose}>✖</SPopNewCardClose>
					<SPopNewCardContent>
						<SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
						<SPopNewCardWrap>
							<SPopNewCardForm id='formNewCard' onSubmit={onSubmit}>
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
									$isActive={activeCategory === 'orange'}
									onClick={() => onCategoryClick('orange')}
								>
									<CategoryText>Web Design</CategoryText>
								</CategoryTheme>
								<CategoryTheme
									color='green'
									$isActive={activeCategory === 'green'}
									onClick={() => onCategoryClick('green')}
								>
									<CategoryText>Research</CategoryText>
								</CategoryTheme>
								<CategoryTheme
									color='purple'
									$isActive={activeCategory === 'purple'}
									onClick={() => onCategoryClick('purple')}
								>
									<CategoryText>Copywriting</CategoryText>
								</CategoryTheme>
							</CategoriesThemes>
						</Categories>
						<FormNewCreate id='btnCreate' onClick={onSubmit}>
							Создать задачу
						</FormNewCreate>
					</SPopNewCardContent>
				</SPopNewCardBlock>
			</SPopNewCardContainer>
		</SPopNewCard>
	)
}
