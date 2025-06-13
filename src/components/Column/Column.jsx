import { Mcolumn, ScolumnTitle } from './Column.styled'

export default function Column({ title, children }) {
	return (
		<Mcolumn>
			<ScolumnTitle>
				<p>{title}</p>
			</ScolumnTitle>
			{children}
		</Mcolumn>
	)
}
