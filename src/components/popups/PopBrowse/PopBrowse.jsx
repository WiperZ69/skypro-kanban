import { useContext, useEffect, useState } from 'react'
import { CardContext } from '../../../context/CardContext'
import { topicMapping } from '../../../data'
import { deleteCard, editCard, fetchCards } from '../../../services/api'
import { Calendar } from '../../Calendar/Calendar'
import * as S from './PopBrowse.styled'

const STATUSES = [
	'Без статуса',
	'Нужно сделать',
	'В работе',
	'Тестирование',
	'Готово',
]

export default function PopBrowse({ loading, error, card, onClose }) {
	const { setCards } = useContext(CardContext)
	const [isEditing, setIsEditing] = useState(false)
	const [editedCard, setEditedCard] = useState(null)

	useEffect(() => {
		if (card) {
			setEditedCard(card)
		}
	}, [card])
	const handleEdit = () => setIsEditing(true)

	const handleCancel = () => {
		setEditedCard(card)
		setIsEditing(false)
	}

	const handleSave = async () => {
		try {
			await editCard(card._id, editedCard)
			const updatedCards = await fetchCards()
			setCards(updatedCards)
			setIsEditing(false)
		} catch (error) {
			console.error('Ошибка при сохранении:', error.message)
		}
	}

	const handleDelete = async () => {
		try {
			await deleteCard(card._id)
			const updatedCards = await fetchCards()
			setCards(updatedCards)
			onClose()
		} catch (error) {
			console.error('Ошибка при удалении:', error.message)
		}
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setEditedCard(prev => ({ ...prev, [name]: value }))
	}

	const handleStatusChange = status => {
		setEditedCard(prev => ({ ...prev, status }))
	}

	if (loading || !editedCard) {
		return (
			<S.PopBrowse>
				<S.PopBrowseContainer onClick={onClose}>
					<S.PopBrowseBlock onClick={e => e.stopPropagation()}>
						<S.PopBrowseContent>
							<S.LoadingMessage>Загрузка карточки...</S.LoadingMessage>
						</S.PopBrowseContent>
					</S.PopBrowseBlock>
				</S.PopBrowseContainer>
			</S.PopBrowse>
		)
	}

	if (error) {
		return (
			<S.PopBrowse>
				<S.PopBrowseContainer onClick={onClose}>
					<S.PopBrowseBlock onClick={e => e.stopPropagation()}>
						<S.PopBrowseContent>
							<S.ErrorMessage>Ошибка: {error}</S.ErrorMessage>
						</S.PopBrowseContent>
					</S.PopBrowseBlock>
				</S.PopBrowseContainer>
			</S.PopBrowse>
		)
	}

	return (
		<S.PopBrowse>
			<S.PopBrowseContainer onClick={onClose}>
				<S.PopBrowseBlock onClick={e => e.stopPropagation()}>
					<S.PopBrowseContent>
						<S.PopBrowseTopBlock>
							<S.PopBrowseTtl>
								{editedCard?.title || 'Название задачи'}
							</S.PopBrowseTtl>
							<S.Theme
								theme={topicMapping[editedCard?.topic] || 'orange'}
								$isActive
							>
								{editedCard?.topic || 'Web Design'}
							</S.Theme>
						</S.PopBrowseTopBlock>

						<S.StatusBlock>
							<S.StatusTitle>Статус</S.StatusTitle>
							<S.StatusThemes>
								{isEditing ? (
									STATUSES.map(status => (
										<S.Theme
											key={status}
											theme={status === editedCard.status ? 'gray' : 'default'}
											$isActive={status === editedCard.status}
											onClick={() => handleStatusChange(status)}
										>
											{status}
										</S.Theme>
									))
								) : (
									<S.Theme theme='gray' $isActive>
										{editedCard.status}
									</S.Theme>
								)}
							</S.StatusThemes>
						</S.StatusBlock>

						<S.PopBrowseWrap>
							<S.PopBrowseForm onSubmit={e => e.preventDefault()}>
								<S.BrowseFormBlock>
									<S.BrowseFormLabel htmlFor='textArea01'>
										Описание задачи
									</S.BrowseFormLabel>
									<S.BrowseFormArea
										name='description'
										id='textArea01'
										value={editedCard.description || ''}
										onChange={handleInputChange}
										readOnly={!isEditing}
										$isEditing={isEditing}
										placeholder='Описание задачи'
									/>
								</S.BrowseFormBlock>
							</S.PopBrowseForm>
							<Calendar />
						</S.PopBrowseWrap>
						<S.BtnBlock $isVisible={!isEditing}>
							<S.BtnGroup>
								<S.Button $variant='secondary' onClick={handleEdit}>
									Редактировать задачу
								</S.Button>
								<S.Button $variant='secondary' onClick={handleDelete}>
									Удалить задачу
								</S.Button>
							</S.BtnGroup>
							<S.Button $variant='primary' onClick={onClose}>
								Закрыть
							</S.Button>
						</S.BtnBlock>

						<S.BtnBlock $isVisible={isEditing}>
							<S.BtnGroup>
								<S.Button $variant='primary' onClick={handleSave}>
									Сохранить
								</S.Button>
								<S.Button $variant='secondary' onClick={handleCancel}>
									Отменить
								</S.Button>
								<S.Button $variant='secondary' onClick={handleDelete}>
									Удалить задачу
								</S.Button>
							</S.BtnGroup>
							<S.Button $variant='primary' onClick={onClose}>
								Закрыть
							</S.Button>
						</S.BtnBlock>
					</S.PopBrowseContent>
				</S.PopBrowseBlock>
			</S.PopBrowseContainer>
		</S.PopBrowse>
	)
}
