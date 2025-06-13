import columns from '../../data.js'
import Cards from '../Card/Cards'
import Column from '../Column/Column'
import { Scontainer, Smain, SmainBlock, SmainContent } from './Main.styled.jsx'

export default function Main({ loading, togglePopBrowse }) {
	const statuses = [...new Set(columns.map(task => task.status))]

	return (
		<Smain>
			<Scontainer>
				<SmainBlock>
					<SmainContent>
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
									togglePopBrowse={togglePopBrowse}
								/>
							</Column>
						))}
					</SmainContent>
				</SmainBlock>
			</Scontainer>
		</Smain>
	)
}
