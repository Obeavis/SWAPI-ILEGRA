import React from "react";
import "./BB8Loader.scss";

const BB8Loader = () => (
	<div className="artboard">
		<div className="bb8">
			<div className="bb8-body">
				<div className="dot dot-1">
					<div className="line line-1"></div>
					<div className="line line-2"></div>
					<div className="line line-3"></div>
				</div>
				<div className="dot dot-2"></div>
				<div className="circle circle-1"></div>
				<div className="circle circle-2"></div>
				<div className="circle circle-3"></div>
			</div>
			<div className="body-shadow-crop">
				<div className="body-shadow"></div>
			</div>
			<div className="bb8-head">
				<div className="head-bottom">
					<div className="head-side-1"></div>
					<div className="head-side-2"></div>
					<div className="head-bottom-base"></div>
				</div>
				<div className="head-top-crop">
					<div className="head-top"></div>
				</div>
				<div className="lens"></div>
				<div className="freckle"></div>
			</div>
			<div className="speedlines">
				<div className="one tail"></div>
				<div className="two tail"></div>
				<div className="three"></div>
				<div className="four"></div>
				<div className="five tail"></div>
			</div>
			<div className="sparkles">
				<div className="one small pulse-1"></div>
				<div className="two blue small pulse-2"></div>
				<div className="three blue med pulse-3"></div>
				<div className="four orange pulse-2"></div>
				<div className="five orange pulse-1"></div>
				<div className="six blue small pulse"></div>
				<div className="seven blue small pulse"></div>
				<div className="eight small pulse-3"></div>
				<div className="nine pulse"></div>
				<div className="ten orange small-1 pulse"></div>
				<div className="eleven small pulse"></div>
				<div className="twelve small pulse-2"></div>
				<div className="thirteen orange small pulse"></div>
				<div className="fourteen orange med pulse-3"></div>
				<div className="fifteen small pulse-1"></div>
				<div className="sixteen small pulse"></div>
			</div>
			<div className="ground">
				<div className="one">
					<div className="bump move-1"></div>
				</div>
				<div className="two"></div>
				<div className="three">
					<div className="bump move-2"></div>
				</div>
				<div className="four">
					<div className="bump"></div>
				</div>
				<div className="five"></div>
				<div className="six">
					<div className="bump move-2"></div>
				</div>
				<div className="seven">
					<div className="bump"></div>
				</div>
				<div className="eight">
					<div className="bump move-1"></div>
				</div>
			</div>
		</div>
	</div>
);
export default BB8Loader;
