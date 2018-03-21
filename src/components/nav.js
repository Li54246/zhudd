require('styles/nav.css');
import React,{Component} from 'react'
import Logo from '../images/logo.png';
import Loop from './loop.js'
import {
   
    NavLink
} from 'react-router-dom'


class Nav extends Component {
	constructor(){
		super()
		this.state={
			arr:[
				{item:'首    页',path:'/home'},
				{item:'了解APP',path:'/knowApp'},
				{item:'长租公寓',path:'/longrent'},
				{item:'短租民宿',path:'/shortRent'},
				{item:'招募房东',path:'/recruit'},
				{item:'品牌商入口',path:'/pinpai'}
			]
		}
	}

	render(){
		return(
				<div className='nav'>
						<div className='nav-box'>
							<a href=''>
							<img src={Logo} alt='' />
						</a>
						<ul className='nav-right'>
							{
								this.state.arr.map((ele,index)=>{
									return(
											<li key={index} >
												<NavLink to={ele.path} activeClassName='top'>
													{ele.item}
												</NavLink>
											</li>
										)
								})
							}
						</ul>
						</div>
					</div>
					
			)
	}
}
export default Nav;
