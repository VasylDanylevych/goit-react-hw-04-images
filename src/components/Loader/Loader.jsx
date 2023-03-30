import { ThreeCircles } from 'react-loader-spinner';

export default function Loader() {
	return (
		<ThreeCircles
			height='100'
			width='100'
			color='#3f51b5'
			wrapperStyle={{ justifyContent: 'center' }}
			wrapperClass=''
			visible={true}
			ariaLabel='three-circles-rotating'
			outerCircleColor=''
			innerCircleColor=''
			middleCircleColor=''
		/>
	);
}
