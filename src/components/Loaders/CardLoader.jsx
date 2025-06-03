import {
	ScardLoader,
	ScardLoaderContent,
	ScardLoaderPretitle,
} from './CardLoader.styled'
import Loader from './Loader'

const CardLoader = () => {
	return (
		<ScardLoader>
			<ScardLoaderContent>
				{/* Имитация заголовка */}
				<ScardLoaderPretitle>
					<Loader width={82} height={20} />
					<Loader width={18} height={4} />
				</ScardLoaderPretitle>
				{/* Имитация текста */}
				<Loader width={113} height={13} />
				{/* Имитация даты */}
				<Loader width={58} height={13} />
			</ScardLoaderContent>
		</ScardLoader>
	)
}

export default CardLoader
