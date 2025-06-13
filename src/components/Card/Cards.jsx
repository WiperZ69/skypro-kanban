import { topicMapping } from '../../data'
import CardLoader from '../Loaders/cardLoader'
import Card from './Card'
import { Scards, ScardsItem } from './Cards.styled'

export default function Cards({ cards, loading, togglePopBrowse }) {
	return (
		<Scards>
			{loading
				? cards.map((_, index) => (
						<ScardsItem key={index}>
							<CardLoader />
						</ScardsItem>
				  ))
				: cards.map((card, index) => (
						<ScardsItem key={index}>
							<Card
								theme={topicMapping[card.topic] || 'default'}
								topic={card.topic}
								title={card.title}
								date={card.date}
								togglePopBrowse={togglePopBrowse}
							/>
						</ScardsItem>
				  ))}
		</Scards>
	)
}
