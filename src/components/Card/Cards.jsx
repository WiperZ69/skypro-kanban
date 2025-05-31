import CardLoader from '../Loaders/cardLoader'
import Card from './Card'

export default function Cards({ cards, loading }) {
	const topicMapping = {
		'Web Design': 'orange',
		Research: 'green',
		Copywriting: 'purple',
	}
	return (
		<div className='cards'>
			{loading
				? cards.map((_, index) => (
						<div key={index} className='cards__item'>
							<CardLoader />
						</div>
				  ))
				: cards.map((card, index) => (
						<div key={index} className='cards__item'>
							<Card
								theme={topicMapping[card.topic] || 'default'}
								topic={card.topic}
								title={card.title}
								date={card.date}
							/>
						</div>
				  ))}
		</div>
	)
}
