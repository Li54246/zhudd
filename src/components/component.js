import React,{Component} from 'react'
import Footer from './footer.js'
import Loop from './loop.js'
import Nav from './nav'


class Com extends Component{
	render(){
		return(
				<div>
					<Nav/>
					<Loop/>
		        	<Footer/>
				</div>
			)
	}
}

export default Com