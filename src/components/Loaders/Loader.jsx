import { Cloader } from './Loader.styled'

const Loader = ({
	width = 220,
	height = 130,
	colorStart = '#c1cddc',
	colorEnd = '#e9eef7',
}) => {
	return (
		<Cloader
			className='loader'
			style={{
				width: `${width}px`,
				height: `${height}px`,
				background: `linear-gradient(90deg, ${colorStart}, ${colorEnd})`,
			}}
		></Cloader>
	)
}

export default Loader
