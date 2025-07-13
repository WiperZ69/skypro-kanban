import { useContext } from 'react'
import { CardContext } from '../../context/CardContext'
import { topicMapping } from '../../data'
import CardLoader from '../Loaders/cardLoader'
import Card from './Card'
import { EmptyMessage, Scards, ScardsItem } from './Cards.styled'

export default function Cards({ cards }) {
	const { loading } = useContext(CardContext)
	if (loading) {
		return (
			<Scards>
				{Array(3)
					.fill(null)
					.map((_, index) => (
						<ScardsItem key={index}>
							<CardLoader />
						</ScardsItem>
					))}
			</Scards>
		)
	}

	if (cards.length === 0) {
		return <EmptyMessage>Задач пока нет</EmptyMessage>
	}

	return (
		<Scards>
			{cards.map(card => (
				<ScardsItem key={card._id}>
					<Card
						id={card._id}
						theme={topicMapping[card.topic] || 'default'}
						topic={card.topic}
						title={card.title}
						date={card.date}
					/>
				</ScardsItem>
			))}
		</Scards>
	)
}
