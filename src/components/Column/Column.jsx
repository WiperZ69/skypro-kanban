import PropTypes from 'prop-types'

export default function Column({ title, children }) {
	return (
		<div className='main__column column'>
			<div className='column__title'>
				<p>{title}</p>
			</div>
			{children}
		</div>
	)
}

Column.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}
