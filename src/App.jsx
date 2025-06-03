import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import PopBrowse from './components/popups/PopBrowse/PopBrowse.jsx'
import PopExit from './components/popups/PopExit/PopExit.jsx'
import PopNewCard from './components/popups/PopNewCard/PopNewCard.jsx'

function App() {
	return (
		<>
			<div class='wrapper'>
				{/* <!-- pop-up start--> */}
				<PopExit />
				<PopNewCard />
				<PopBrowse />
				{/* <!-- pop-up end--> */}
				<Header />
				<Main />
			</div>
		</>
	)
}

export default App
