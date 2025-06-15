import {
	addMonths,
	eachDayOfInterval,
	endOfMonth,
	format,
	isSameMonth,
	isToday,
	isWeekend,
	startOfMonth,
	subMonths,
} from 'date-fns'
import ru from 'date-fns/locale/ru'
import { useState } from 'react'
import styled from 'styled-components'
import {
	CalendarPeriod,
	CalendarPeriodText,
	DateControl,
	SCalendar,
	SCalendarBlock,
	SCalendarCells,
	SCalendarContent,
	SCalendarDaysNames,
	SCalendarMonth,
	SCalendarNav,
	SCalendarTtl,
	SNavAction,
	SNavActions,
	StyledCalendarDayName,
} from './Calendar.styled'

// Фильтрация пропсов для CalendarCell
const StyledCalendarCell = styled.div`
	${props => props.$isActive && 'background: #f0f0f0;'}
	${props => props.$isWeekend && 'color: red;'}
  ${props => props.$isOtherMonth && 'color: gray;'}
  ${props => props.$isCurrent && 'border: 1px solid blue;'}
  ${props => props.$isCellDay && 'cursor: pointer;'}
`

export const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date())
	const [selectedDay, setSelectedDay] = useState(null)

	// Генерация дней для текущего месяца
	const start = startOfMonth(currentMonth)
	const end = endOfMonth(currentMonth)
	const days = eachDayOfInterval({ start, end }).map(date => ({
		number: date.getDate(),
		isCellDay: true,
		isWeekend: isWeekend(date),
		isOtherMonth: !isSameMonth(date, currentMonth),
		isCurrent: isToday(date),
		date, // Сохраняем объект Date для удобства
	}))

	// Добавляем дни предыдущего и следующего месяца для заполнения сетки
	const firstDayOfMonth = start.getDay() === 0 ? 6 : start.getDay() - 1 // Понедельник = 0, Воскресенье = 6
	const lastDayOfMonth = end.getDay() === 0 ? 6 : end.getDay() - 1
	const prevMonthDays = []
	if (firstDayOfMonth > 0) {
		const prevMonthEnd = subMonths(start, 1)
		const prevMonthStart = new Date(
			prevMonthEnd.getFullYear(),
			prevMonthEnd.getMonth(),
			prevMonthEnd.getDate() - firstDayOfMonth + 1
		)
		prevMonthDays.push(
			...eachDayOfInterval({ start: prevMonthStart, end: prevMonthEnd }).map(
				date => ({
					number: date.getDate(),
					isCellDay: true,
					isWeekend: isWeekend(date),
					isOtherMonth: true,
					isCurrent: isToday(date),
					date,
				})
			)
		)
	}
	const nextMonthDays = []
	if (lastDayOfMonth < 6) {
		const nextMonthStart = addMonths(start, 1)
		const nextMonthEnd = new Date(
			nextMonthStart.getFullYear(),
			nextMonthStart.getMonth(),
			6 - lastDayOfMonth
		)
		nextMonthDays.push(
			...eachDayOfInterval({ start: nextMonthStart, end: nextMonthEnd }).map(
				date => ({
					number: date.getDate(),
					isCellDay: true,
					isWeekend: isWeekend(date),
					isOtherMonth: true,
					isCurrent: isToday(date),
					date,
				})
			)
		)
	}
	const allDays = [...prevMonthDays, ...days, ...nextMonthDays]

	const handleDayClick = date => {
		setSelectedDay(date)
	}

	const handlePrevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1))
		setSelectedDay(null) // Сбрасываем выбор при смене месяца
	}

	const handleNextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1))
		setSelectedDay(null) // Сбрасываем выбор при смене месяца
	}

	return (
		<SCalendar>
			<SCalendarTtl>Даты</SCalendarTtl>
			<SCalendarBlock>
				<SCalendarNav>
					<SCalendarMonth>
						{format(currentMonth, 'LLLL yyyy', { locale: ru })}
					</SCalendarMonth>
					<SNavActions>
						<SNavAction data-action='prev' onClick={handlePrevMonth}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='6'
								height='11'
								viewBox='0 0 6 11'
							>
								<path d='M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z' />
							</svg>
						</SNavAction>
						<SNavAction data-action='next' onClick={handleNextMonth}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='6'
								height='11'
								viewBox='0 0 6 11'
							>
								<path d='M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z' />
							</svg>
						</SNavAction>
					</SNavActions>
				</SCalendarNav>
				<SCalendarContent>
					<SCalendarDaysNames>
						<StyledCalendarDayName>пн</StyledCalendarDayName>
						<StyledCalendarDayName>вт</StyledCalendarDayName>
						<StyledCalendarDayName>ср</StyledCalendarDayName>
						<StyledCalendarDayName>чт</StyledCalendarDayName>
						<StyledCalendarDayName>пт</StyledCalendarDayName>
						<StyledCalendarDayName isWeekend>сб</StyledCalendarDayName>
						<StyledCalendarDayName isWeekend>вс</StyledCalendarDayName>
					</SCalendarDaysNames>
					<SCalendarCells>
						{allDays.map((day, index) => (
							<StyledCalendarCell
								key={index}
								$isCellDay={day.isCellDay}
								$isWeekend={day.isWeekend}
								$isOtherMonth={day.isOtherMonth}
								$isCurrent={day.isCurrent}
								$isActive={
									selectedDay && day.date.getTime() === selectedDay.getTime()
								}
								onClick={() => handleDayClick(day.date)}
							>
								{day.number}
							</StyledCalendarCell>
						))}
					</SCalendarCells>
				</SCalendarContent>
				<input
					type='hidden'
					id='datepick_value'
					value={selectedDay ? format(selectedDay, 'dd.MM.yyyy') : ''}
				/>
				<CalendarPeriod>
					<CalendarPeriodText className='date-end'>
						Срок исполнения:{' '}
						<DateControl>
							{selectedDay
								? format(selectedDay, 'dd.MM.yy', { locale: ru })
								: 'Не выбрано'}
						</DateControl>
					</CalendarPeriodText>
				</CalendarPeriod>
			</SCalendarBlock>
		</SCalendar>
	)
}
