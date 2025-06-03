import columns from '../../data.js'
import Cards from '../Card/Cards'
import Column from '../Column/Column'

export default function Main({ loading }) {
	const statuses = [...new Set(columns.map(task => task.status))]

	return (
		<main className='main'>
			<div className='container'>
				<div className='main__block'>
					<div className='main__content'>
						{statuses.map((status, index) => (
							<Column loading={loading} key={index} title={status}>
								<Cards
									loading={loading}
									cards={columns
										.filter(task => task.status === status)
										.map(task => ({
											topic: task.topic,
											title: task.title,
											date: task.date,
										}))}
								/>
							</Column>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}
