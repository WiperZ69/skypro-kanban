import { useState } from 'react'
import { topicMapping } from '../../../data'
import { Calendar } from '../../Calendar/Calendar'
import {
	BrowseFormArea,
	BrowseFormBlock,
	BrowseFormLabel,
	BtnBrowseBlock,
	BtnBrowseClose,
	BtnBrowseDelete,
	BtnBrowseEdit,
	BtnEditBlock,
	BtnEditCancel,
	BtnEditClose,
	BtnEditDelete,
	BtnEditSave,
	BtnGroup,
	CategoriesTheme,
	CategoriesThemeText,
	CategoriesTitle,
	SPopBrowse,
	SPopBrowseBlock,
	SPopBrowseClose,
	SPopBrowseContainer,
	SPopBrowseContent,
	SPopBrowseForm,
	SPopBrowseTopBlock,
	SPopBrowseTtl,
	SPopBrowseWrap,
	StatusBlock,
	StatusTheme,
	StatusThemes,
	StatusThemeText,
	StatusTitle,
	ThemeDownCategories,
} from './PopBrowse.styled'

export default function PopBrowse({ card, onClose }) {
	const [isEditing, setIsEditing] = useState(false)
	const theme = card?.topic ? topicMapping[card.topic] : 'orange'

	const handleEdit = () => setIsEditing(true)
	const handleCancel = () => setIsEditing(false)
	const handleSave = () => {
		setIsEditing(false)
	}
	const handleDelete = () => {
		// Тут возможно удаление с сервера
		onClose()
	}

	return (
		<SPopBrowse id='popBrowse'>
			<SPopBrowseContainer onClick={onClose}>
				<SPopBrowseBlock onClick={e => e.stopPropagation()}>
					<SPopBrowseContent>
						<SPopBrowseTopBlock>
							<SPopBrowseTtl>{card?.title || 'Название задачи'}</SPopBrowseTtl>
							<CategoriesTheme theme={theme} isActive>
								<CategoriesThemeText theme={theme}>
									{card?.topic || 'Web Design'}
								</CategoriesThemeText>
							</CategoriesTheme>
							<SPopBrowseClose onClick={onClose}>✖</SPopBrowseClose>
						</SPopBrowseTopBlock>
						<StatusBlock>
							<StatusTitle>Статус</StatusTitle>
							<StatusThemes>
								<StatusTheme isHidden>
									<StatusThemeText>Без статуса</StatusThemeText>
								</StatusTheme>
								<StatusTheme theme='gray'>
									<StatusThemeText theme='gray'>Нужно сделать</StatusThemeText>
								</StatusTheme>
								<StatusTheme isHidden>
									<StatusThemeText>В работе</StatusThemeText>
								</StatusTheme>
								<StatusTheme isHidden>
									<StatusThemeText>Тестирование</StatusThemeText>
								</StatusTheme>
								<StatusTheme isHidden>
									<StatusThemeText>Готово</StatusThemeText>
								</StatusTheme>
							</StatusThemes>
						</StatusBlock>
						<SPopBrowseWrap>
							<SPopBrowseForm id='formBrowseCard' action='#'>
								<BrowseFormBlock>
									<BrowseFormLabel htmlFor='textArea01'>
										Описание задачи
									</BrowseFormLabel>
									<BrowseFormArea
										name='text'
										id='textArea01'
										readOnly={!isEditing}
										placeholder='Введите описание задачи...'
									></BrowseFormArea>
								</BrowseFormBlock>
							</SPopBrowseForm>
							<Calendar />
						</SPopBrowseWrap>
						<ThemeDownCategories>
							<CategoriesTitle>Категория</CategoriesTitle>
							<CategoriesTheme theme='orange' isActive>
								<CategoriesThemeText theme='orange'>
									Web Design
								</CategoriesThemeText>
							</CategoriesTheme>
						</ThemeDownCategories>
						<BtnBrowseBlock isHidden={isEditing}>
							<BtnGroup>
								<BtnBrowseEdit onClick={handleEdit}>
									Редактировать задачу
								</BtnBrowseEdit>
								<BtnBrowseDelete onClick={handleDelete}>
									Удалить задачу
								</BtnBrowseDelete>
							</BtnGroup>
							<BtnBrowseClose onClick={onClose}>Закрыть</BtnBrowseClose>
						</BtnBrowseBlock>
						<BtnEditBlock isHidden={!isEditing}>
							<BtnGroup>
								<BtnEditSave onClick={handleSave}>Сохранить</BtnEditSave>
								<BtnEditCancel onClick={handleCancel}>Отменить</BtnEditCancel>
								<BtnEditDelete id='btnDelete' onClick={handleDelete}>
									Удалить задачу
								</BtnEditDelete>
							</BtnGroup>
							<BtnEditClose onClick={onClose}>Закрыть</BtnEditClose>
						</BtnEditBlock>
					</SPopBrowseContent>
				</SPopBrowseBlock>
			</SPopBrowseContainer>
		</SPopBrowse>
	)
}
