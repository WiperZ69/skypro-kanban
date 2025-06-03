import PropTypes from 'prop-types'
import Card from './Card'

export default function Cards({ cards }) {
	return (
		<div className='cards'>
			{cards.map((card, index) => (
				<div key={index} className='cards__item'>
					<Card
						theme={card.theme}
						themeText={card.themeText}
						title={card.title}
						date={card.date}
					/>
				</div>
			))}
		</div>
	)
}

Cards.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			theme: PropTypes.string.isRequired,
			themeText: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
		})
	).isRequired,
}
