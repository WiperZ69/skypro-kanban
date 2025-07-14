import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import AppRoutes from './components/AppRoutes/AppRoutes'
import AuthProvider from './context/AuthProvider'

function App() {
	return (
		<AuthProvider>
			<DndProvider backend={HTML5Backend}>
				<AppRoutes />
			</DndProvider>
		</AuthProvider>
	)
}

export default App
