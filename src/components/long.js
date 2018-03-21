import React,{Component} from 'react'
require('styles/long.css');
import Nav from './nav.js'
import Loop from './loop.js'
import Img from '../images/select-reason-icon.png'
import par1 from '../images/partner1.jpg'
import par2 from '../images/partner2.jpg'
import par3 from '../images/partner3.jpg'
import par4 from '../images/partner4.jpg'
import par5 from '../images/partner5.jpg'
import par6 from '../images/partner6.jpg'
import par7 from '../images/partner7.jpg'
import par8 from '../images/partner8.jpg'
import par9 from '../images/partner9.jpg'
import par10 from '../images/partner10.jpg'
import par11 from '../images/partner11.jpg'
import par12 from '../images/partner12.jpg'
import zhudd from '../images/zhudd.png'
import Footer from './footer.js'



class Long extends Component{
	constructor(){
		super()
		this.state={
			arr:[
				{img:par1},{img:par2},{img:par3},{img:par4},
				{img:par5},{img:par6},{img:par7},{img:par8},
				{img:par9},{img:par10},{img:par11},{img:par12}
			]
		}
	}
	render(){
		return(
				<div>
					<Nav/>
					<Loop/>
					<div className='body-box'>
						<h4>选择住多多的理由</h4>
						<h5>SELECT REASON</h5>
						<ul>
							<li >
								<div className='box-img'>
									<i ></i>
									<p>品质公寓，全线进驻</p>
								</div>
							</li>
							<li >
								<div className='box-img a1'>
									<i ></i>
									<p>认证实拍，实时更新</p>
								</div>
							</li>
							<li >
								<div className='box-img a2'>
									<i ></i>
									<p>精致装修，配套服务</p>
								</div>
							</li>
							<li >
								<div className='box-img a3'>
									<i ></i>
									<p>促销秒杀，优惠多多</p>
								</div>
							</li>
						</ul>
					</div>
					<div className='body-img'>
						<div className='body-sect'>
							<ul>
								<li>
									<i className='icon icon1'></i>
									<i ></i>
								</li>
								<li>
									<i className='icon icon2'></i>
									<i ></i>
								</li>
								<li>
									<i className='icon icon3'></i>
									<i ></i>
								</li>
								<li>
									<i className='icon icon4'></i>
									<i ></i>
								</li>
								<li>
									<i className='icon icon5'></i>
									<i ></i>
								</li>
								<li>
									<i className='icon icon6'></i>
									<i ></i>
								</li>
								<li>
									<i className='icon icon7'></i>
									<i ></i>
								</li>
								<li>
									<i className='icon icon8'></i>
							
								</li>
							</ul>
						</div>
					</div>
					<div className='partner'>
						<div className='partner-sect'>
							<h4>合作品牌</h4>
							<h5>COOPERATION BRAND</h5>
							<ul className='partner-list'>
								{
									this.state.arr.map((ele,index)=>{
										return(
												<li key={index}>
													<img src={ele.img} />
												</li>
											)
									})
								}
							</ul>
						</div>
					</div>
					<div className='sponsor'>
						<div className='section'>
							<h4>行业倡议</h4>
							<h5>INDUSTRY INITIATIVE</h5>
							<ul className='section-list'>
								<li><i className='section-icon'>房屋质量问题无责换租</i></li>
								<li><i className='section-icon icon9'>退租押金3个工作日返还</i></li>
								<li><i className='section-icon icon10'>3天不满意退款</i></li>
							</ul>
						</div>
					</div>
					<div className='zhubaCode'>
						<div className='section'>
							<img src={zhudd}  className='app-code'/>
							<div >
								<a href='#' className='app'>
									<i className='icon-v4'></i>
								</a>
								<span>&nbsp;&nbsp;&nbsp;</span>
								<a href='#' className='app'>
									<i className='icon-v4'></i>
								</a>
							</div>
						</div>
					</div>
					<div id='footer'>
						<p><span>联系电话：023-67728163</span></p>
						<p>重庆住多多科技有限责任公司  网站备案/许可证号： 渝ICP备17011499号-1</p>
					</div>
				</div>
			)
	}
}

export default Long