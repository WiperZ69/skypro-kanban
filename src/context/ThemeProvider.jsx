import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../themes'
import { ThemeContext } from './ThemeContext'

export const ThemeProviderCustom = ({ children }) => {
	const [themeName, setThemeName] = useState('light')

	// сохраняем тему в localStorage
	useEffect(() => {
		const storedTheme = localStorage.getItem('app-theme')
		if (storedTheme) setThemeName(storedTheme)
	}, [])

	const toggleTheme = () => {
		const newTheme = themeName === 'light' ? 'dark' : 'light'
		setThemeName(newTheme)
		localStorage.setItem('app-theme', newTheme)
	}

	const themeObject = themeName === 'light' ? lightTheme : darkTheme

	return (
		<ThemeContext.Provider value={{ themeName, toggleTheme }}>
			<ThemeProvider theme={themeObject}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	)
}
