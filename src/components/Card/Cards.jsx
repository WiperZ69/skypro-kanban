import { topicMapping } from '../../data'
import CardLoader from '../Loaders/cardLoader'
import Card from './Card'
import { Scards, ScardsItem } from './Cards.styled'

export default function Cards({ cards, loading }) {
	return (
		<Scards>
			{(loading ? Array(3).fill({}) : cards).map((card, index) => (
				<ScardsItem key={card._id || index}>
					{loading ? (
						<CardLoader />
					) : (
						<Card
							id={card._id}
							theme={topicMapping[card.topic] || 'default'}
							topic={card.topic}
							title={card.title}
							date={card.date}
						/>
					)}
				</ScardsItem>
			))}
		</Scards>
	)
}
