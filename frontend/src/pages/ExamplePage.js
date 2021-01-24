import React from 'react'
import exampleImg from '../static/smoke640360.jpg' 
const ExamplePage = () => {
	return (
		<div style={{
				width: '100%',
				height: '100%',
				backgroundColor: 'white',
				display: 'inline-block',
				height: 'auto',
			}}>
			<img src={exampleImg}/>
			<img src={exampleImg}/>
			<img src={exampleImg}/>
			<img src={exampleImg}/>
			<img src={exampleImg}/>
			<h1>Example Page</h1>
		</div>
	)
}

export default ExamplePage
