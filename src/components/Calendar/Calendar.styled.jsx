import styled, { css } from 'styled-components'
import { SubTtl } from '../../styles/GlobalStyles'

const cellStyles = css`
	width: 22px;
	height: 22px;
	margin: 2px;
	border-radius: 50%;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	color: #94a6be;
	font-size: 10px;
	line-height: 1;
	letter-spacing: -0.2px;
	cursor: pointer;
`

const cellDayStyles = css`
	&:hover {
		color: #94a6be;
		background-color: #eaeef6;
	}
`

const otherMonthStyles = css`
	color: gray;
	opacity: 0.5;
`

const currentStyles = css`
	font-weight: 700;
`

const activeDayStyles = css`
	background-color: #94a6be;
	color: #ffffff;
`

const weekendStyles = css`
	background-color: #f8f9fa;
	color: green;
`

// Фильтрация пропсов для CalendarCell
export const StyledCalendarCell = styled.div.withConfig({
	shouldForwardProp: prop =>
		['children', 'onClick', 'className', 'style'].includes(prop),
})`
	${cellStyles}
	${props =>
		props.isCellDay &&
		css`
			${cellDayStyles}
		`}
	${props =>
		props.isWeekend &&
		css`
			${weekendStyles}
		`}
	${props =>
		props.isOtherMonth &&
		css`
			${otherMonthStyles}
		`}
	${props =>
		props.isCurrent &&
		css`
			${currentStyles}
		`}
	${props =>
		props.isActive &&
		css`
			${activeDayStyles}
		`}
`

// Фильтрация пропсов для SCalendarDayName (сохранено как есть)
export const StyledCalendarDayName = styled.div.withConfig({
	shouldForwardProp: prop => ['children', 'className', 'style'].includes(prop),
})`
	color: #94a6be;
	font-size: 10px;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.2px;
	${props =>
		props.isWeekend &&
		css`
			${weekendStyles}
		`}
`

export const SCalendar = styled.div`
	width: 182px;
	margin-bottom: 18px;
`

export const SCalendarTtl = styled.p`
	margin-bottom: 14px;
	padding: 0 7px;
	${SubTtl}
`

export const SCalendarBlock = styled.div`
	display: block;
`

export const SCalendarNav = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 14px;
	padding: 0 7px;
`

export const SCalendarMonth = styled.div`
	color: #94a6be;
	font-size: 14px;
	line-height: 25px;
	font-weight: 600;
`

export const SNavActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const SNavAction = styled.button`
	width: 18px;
	height: 25px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	border: none;

	svg {
		fill: #94a6be;
	}
`

export const SCalendarContent = styled.div`
	margin-bottom: 12px;
`

export const SCalendarDaysNames = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	margin: 7px 0;
	padding: 0 7px;
`

export const SCalendarCells = styled.div`
	width: 182px;
	height: 126px;
	display: flex;
	flex-wrap: wrap;
`

export const CalendarPeriod = styled.div`
	padding: 0 7px;
`

export const CalendarPeriodText = styled.p`
	color: #94a6be;
	font-size: 10px;
	line-height: 1;
	margin: 0;
	&.date-end {
		color: #94a6be;
	}
`

export const DateControl = styled.span`
	color: #000000;
`
