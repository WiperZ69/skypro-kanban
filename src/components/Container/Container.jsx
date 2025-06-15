import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { theme } from '../../styles/Theme'
import { Wrapper } from './Container.styled'

const Container = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Wrapper>{children}</Wrapper>
		</ThemeProvider>
	)
}

export default Container
