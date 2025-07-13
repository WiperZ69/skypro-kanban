import { Outlet } from 'react-router-dom'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import { CardProvider } from '../context/CardProvider'

const MainPage = () => {
	return (
		<CardProvider>
			<Container>
				<Header />
				<Main />
				<Outlet />
			</Container>
		</CardProvider>
	)
}

export default MainPage
