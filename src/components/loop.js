import React,{Component} from 'react';
require('styles/loop.css');
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import Footer from './footer.js'
import Nav from './nav'
class Btn extends Component{
	constructor(){
		super()
		this.state={
			arr:['','','','','']
		}
	}
	render(){
		return(
				<div className='btn'>
					<ul>
						{
							this.state.arr.map((ele,index)=>{
								return (
										<li key={index} style={{opacity:index==this.props.index?'1':'0.6'}} onClick={this.props.change.bind(this,index)}>{ele}</li>
									)
							})
						}
					</ul>
					
				</div>
			)
	}
}
class Loop extends Component{
	constructor(){
		super()
		this.state={
			img:[{img:one},{img:two},{img:three},{img:four},{img:five}],
			index:0,
			t:setInterval(()=>{
                this.setState({
                    index:this.state.index+1
                })
                if(this.state.index>4){
                    this.setState({
                        index:0
                    })
                }
            },2000)
		}
		this.change=this.change.bind(this)
	}
	change(index){
		this.setState({
			index:index
		})
	}
	render(){
		return(
					<div className='Loop'>
						<ul>
							{
								this.state.img.map((ele,index)=>{
									return(
											<li key={index} style={{opacity:this.state.index==index?'1':'0'}}>
												<img src={ele.img} />
											</li>
										)
								})
							}
							<Btn index={this.state.index}
							 change={this.change}

						/>
						</ul>
						

					</div>
			)
	}
	 componentWillUnmount(){
        clearInterval(this.state.t)
    }
}


export default Loop;