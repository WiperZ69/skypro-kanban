import { createContext } from 'react'

export const CardContext = createContext({
	cards: [],
	loading: false,
	error: '',
})
