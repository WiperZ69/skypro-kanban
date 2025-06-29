import Column from '../Column/Column'
import { Scontainer, Smain, SmainBlock, SmainContent } from './Main.styled.jsx'

export default function Main({ loading, cards, error }) {
	if (error) {
		return (
			<Smain>
				<Scontainer>
					<p>Ошибка: {error}</p>
				</Scontainer>
			</Smain>
		)
	}

	const allStatuses = [
		'Без статуса',
		'Нужно сделать',
		'В работе',
		'Тестирование',
		'Готово',
	]

	const cardsByStatus = cards.reduce((acc, card) => {
		if (!acc[card.status]) acc[card.status] = []
		acc[card.status].push(card)
		return acc
	}, {})

	return (
		<Smain>
			<Scontainer>
				<SmainBlock>
					<SmainContent>
						{allStatuses.map(status => (
							<Column
								key={status}
								title={status}
								loading={loading}
								cards={cardsByStatus[status] || []}
							/>
						))}
					</SmainContent>
				</SmainBlock>
			</Scontainer>
		</Smain>
	)
}
