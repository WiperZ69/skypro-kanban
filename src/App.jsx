import AppRoutes from './components/AppRoutes/AppRoutes'
import AuthProvider from './context/AuthProvider'

function App() {
	return (
		<AuthProvider>
			<AppRoutes />
		</AuthProvider>
	)
}

export default App
