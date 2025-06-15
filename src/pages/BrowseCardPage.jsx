import { useNavigate, useParams } from 'react-router-dom'
import PopBrowse from '../components/popups/PopBrowse/PopBrowse'

const BrowseCardPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	// TODO: сделать запрос к серверу: const card = fetchCard(id)
	const card = {
		id: id,
		title: 'Тестовая задача',
		topic: 'Web Design',
	}

	const handleClose = () => {
		navigate('/') // переход на главную
	}

	return <PopBrowse card={card} onClose={handleClose} />
}

export default BrowseCardPage
