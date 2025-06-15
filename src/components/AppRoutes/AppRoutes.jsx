import { useLayoutEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import BrowseCardPage from '../../pages/BrowseCardPage'
import LogOutPage from '../../pages/LogOutPage'
import MainPage from '../../pages/MainPage'
import NewCardPage from '../../pages/NewCardPage'
import NotFoundPage from '../../pages/NotFoundPage'
import PrivateRoute from '../../pages/PrivateRoute'
import SignInPage from '../../pages/SignInPage'
import SignUpPage from '../../pages/SignUpPage'

function AppRoutes() {
	const [loading, setLoading] = useState(true)
	const [isAuth, setIsAuth] = useState(false)

	useLayoutEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])

	return (
		<Routes>
			<Route element={<PrivateRoute isAuth={isAuth} />}>
				<Route
					path='/'
					element={<MainPage setIsAuth={setIsAuth} loading={loading} />}
				>
					<Route path='/card/add' element={<NewCardPage />} />
					<Route path='/card/:id' element={<BrowseCardPage />} />
					<Route
						path='/logout'
						element={<LogOutPage setIsAuth={setIsAuth} />}
					/>
				</Route>
			</Route>
			<Route path='/sign-in' element={<SignInPage setIsAuth={setIsAuth} />} />
			<Route path='/sign-up' element={<SignUpPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}

export default AppRoutes
