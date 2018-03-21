import React,{Component} from 'react';
require('styles/footer.css');
import img1 from '../images/6.jpg'
import img2 from '../images/7.jpg'
import img3 from '../images/8.jpg'
import img4 from '../images/9.jpg'


class Footer extends Component{
	constructor(){
		super()
		this.state={
			arr:[
				{img:img1},{img:img2},{img:img3},{img:img4},
			]
		}
	}
	render(){
		return(
		
				<div className='footer'>
					<ul>
						{
							this.state.arr.map((ele,index)=>{
								return(
										<li key={index}>
											<a>
												<img src={ele.img} />
												<div></div>
											</a>

										</li>
									)
							})
						}
					</ul>
					<div className='bott'>
						<div className='live'>
							<p>
								<span>联系电话：023-67728163</span>
							</p>
							<p>重庆住多多科技有限责任公司  网站备案/许可证号： 渝ICP备17011499号-1</p>
						</div>
					</div>
				</div>
			)
	}
}

export default Footer