import { Calendar } from '../../Calendar/Calendar'
import * as S from './PopNewCard.styled'

const categories = [
	{ color: 'orange', label: 'Web Design' },
	{ color: 'green', label: 'Research' },
	{ color: 'purple', label: 'Copywriting' },
]

export default function PopNewCard({
	activeCategory,
	onCategoryClick,
	onSubmit,
	onClose,
}) {
	return (
		<S.PopNewCard>
			<S.PopNewCardContainer onClick={onClose}>
				<S.PopNewCardBlock onClick={e => e.stopPropagation()}>
					<S.PopNewCardClose onClick={onClose}>✖</S.PopNewCardClose>
					<S.PopNewCardContent>
						<S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
						<S.PopNewCardWrap>
							<S.PopNewCardForm onSubmit={onSubmit}>
								<input type='hidden' name='category' value={activeCategory} />
								<S.FormNewBlock>
									<S.FormNewLabel htmlFor='formTitle'>
										Название задачи
									</S.FormNewLabel>
									<S.FormNewInput
										type='text'
										name='name'
										id='formTitle'
										placeholder='Введите название задачи...'
										autoFocus
										required
									/>
								</S.FormNewBlock>
								<S.FormNewBlock>
									<S.FormNewLabel htmlFor='textArea'>
										Описание задачи
									</S.FormNewLabel>
									<S.FormNewArea
										name='text'
										id='textArea'
										placeholder='Введите описание задачи...'
										required
									/>
								</S.FormNewBlock>
								<S.Categories>
									<S.CategoriesP>Категория</S.CategoriesP>
									<S.CategoriesThemes>
										{categories.map(({ color, label }) => (
											<S.CategoryTheme
												key={color}
												color={color}
												$isActive={activeCategory === color}
												onClick={() => onCategoryClick(color)}
											>
												<S.CategoryText>{label}</S.CategoryText>
											</S.CategoryTheme>
										))}
									</S.CategoriesThemes>
								</S.Categories>
								<S.FormNewCreate type='submit'>Создать задачу</S.FormNewCreate>
							</S.PopNewCardForm>
							<Calendar />
						</S.PopNewCardWrap>
					</S.PopNewCardContent>
				</S.PopNewCardBlock>
			</S.PopNewCardContainer>
		</S.PopNewCard>
	)
}
