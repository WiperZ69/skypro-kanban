import styled from 'styled-components'
import { Scolumn } from '../../styles/globalStyles'

export const Mcolumn = styled.div`
	width: 20%;
	margin: 0 auto;
	display: block;
	${Scolumn}
`

export const ScolumnTitle = styled.div`
	padding: 0 10px;
	margin: 15px 0;
	p {
		color: #94a6be;
		font-size: 14px;
		font-weight: 600;
		line-height: 1;
		text-transform: uppercase;
	}
`
