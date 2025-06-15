import { Outlet } from 'react-router-dom'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

const MainPage = ({ loading }) => {
	return (
		<Container>
			<Header />
			<Main loading={loading} />
			<Outlet />
		</Container>
	)
}

export default MainPage
