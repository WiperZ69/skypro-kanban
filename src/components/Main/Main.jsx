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

	// группируем карты по статусу
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
						{Object.entries(cardsByStatus).map(([status, cards]) => (
							<Column
								key={status}
								title={status}
								loading={loading}
								cards={cards}
							/>
						))}
					</SmainContent>
				</SmainBlock>
			</Scontainer>
		</Smain>
	)
}
