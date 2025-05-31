import Cards from '../Card/Cards'
import Column from '../Column/Column'

export default function Main() {
	const columns = [
		{
			title: 'Без статуса',
			cards: [
				{
					theme: 'orange',
					themeText: 'Web Design',
					title: 'Название задачи',
					date: '30.10.23',
				},
				{
					theme: 'green',
					themeText: 'Research',
					title: 'Название задачи',
					date: '30.10.23',
				},
				{
					theme: 'orange',
					themeText: 'Web Design',
					title: 'Название задачи',
					date: '30.10.23',
				},
				{
					theme: 'purple',
					themeText: 'Copywriting',
					title: 'Название задачи',
					date: '30.10.23',
				},
				{
					theme: 'orange',
					themeText: 'Web Design',
					title: 'Название задачи',
					date: '30.10.23',
				},
			],
		},
		{
			title: 'Нужно сделать',
			cards: [
				{
					theme: 'green',
					themeText: 'Research',
					title: 'Название задачи',
					date: '30.10.23',
				},
			],
		},
		{
			title: 'В работе',
			cards: [
				{
					theme: 'green',
					themeText: 'Research',
					title: 'Название задачи',
					date: '30.10.23',
				},
				{
					theme: 'purple',
					themeText: 'Copywriting',
					title: 'Название задачи',
					date: '30.10.23',
				},
				{
					theme: 'orange',
					themeText: 'Web Design',
					title: 'Название задачи',
					date: '30.10.23',
				},
			],
		},
		{
			title: 'Тестирование',
			cards: [
				{
					theme: 'green',
					themeText: 'Research',
					title: 'Название задачи',
					date: '30.10.23',
				},
			],
		},
		{
			title: 'Готово',
			cards: [
				{
					theme: 'green',
					themeText: 'Research',
					title: 'Название задачи',
					date: '30.10.23',
				},
			],
		},
	]

	return (
		<main className='main'>
			<div className='container'>
				<div className='main__block'>
					<div className='main__content'>
						{columns.map((column, index) => (
							<Column key={index} title={column.title}>
								<Cards cards={column.cards} />
							</Column>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}
