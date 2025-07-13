import Cards from '../Card/Cards'
import { Scolumn, ScolumnTitle } from './Column.styled'

export default function Column({ title, cards }) {
	return (
		<Scolumn>
			<ScolumnTitle>
				<p>{title}</p>
			</ScolumnTitle>
			<Cards cards={cards} />
		</Scolumn>
	)
}
