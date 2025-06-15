import styled from 'styled-components'

export const Scards = styled.div`
	width: 100%;
	display: block;
	position: relative;
	@media screen and (max-width: 1200px) {
		width: 100%;
		display: flex;
		overflow-y: auto;
	}
`

export const ScardsItem = styled.div`
	padding: 5px;
`
