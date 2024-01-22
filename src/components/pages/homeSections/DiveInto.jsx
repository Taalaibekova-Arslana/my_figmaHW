import React from 'react';
import image from '../../../assets/images/girl-photo.png';
import location from '../../../assets/icons/location.svg';
import phone from '../../../assets/icons/phone-call.svg';
import mail from '../../../assets/icons/mail.svg';
import line from '../../../assets/smooth-line-top.png';
import scss from '../../pages/homeSections/DiveInto.module.scss';

const DiveInto = () => {
	return (
		<section className={scss.container}>
			<div className={scss.diveInto}>
				<div className={scss.text}>
					<h1>
						Dive Into The Depths <br />
						Of Virtual Reality
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
						Lectus mauris eros in vitae.
					</p>
					<button>BUILD YOUR WORLD</button>
				</div>
				<div className={scss.image}>
					<img src={image} alt="image" />
					{/* <svg
						className={scss.svg1}
						xmlns="http://www.w3.org/2000/svg"
						width="736"
						height="423"
						viewBox="0 0 736 423"
						fill="none"
					>
						<path
							d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5"
							stroke="url(#paint0_linear_2_33)"
							stroke-width="6"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_2_33"
								x1="700.5"
								y1="-3.99998"
								x2="14.5"
								y2="361"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#343045" />
								<stop offset="0.213542" stop-color="#C0B7E8" />
								<stop offset="0.71875" stop-color="#8176AF" />
								<stop offset="1" stop-color="#343045" />
							</linearGradient>
						</defs>
					</svg>

					<svg
						className={scss.svg2}
						xmlns="http://www.w3.org/2000/svg"
						width="383"
						height="846"
						viewBox="0 0 383 846"
						fill="none"
					>
						<path
							d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845"
							stroke="url(#paint0_linear_1_24)"
							stroke-width="6"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1_24"
								x1="16.5"
								y1="39.5"
								x2="363"
								y2="814"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.0104167" stop-color="#343045" />
								<stop offset="0.229167" stop-color="#C0B7E8" />
								<stop offset="0.776042" stop-color="#8176AF" />
								<stop offset="1" stop-color="#343045" />
							</linearGradient>
						</defs>
					</svg>

					<svg
						className={scss.svg3}
						xmlns="http://www.w3.org/2000/svg"
						width="416"
						height="675"
						viewBox="0 0 416 675"
						fill="none"
					>
						<path
							d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672"
							stroke="url(#paint0_linear_1_23)"
							stroke-width="6"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1_23"
								x1="365.5"
								y1="28"
								x2="110"
								y2="594"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#343045" />
								<stop offset="0.276042" stop-color="#8176AF" />
								<stop offset="0.739583" stop-color="#C0B7E8" />
								<stop offset="1" stop-color="#343045" />
							</linearGradient>
						</defs>
					</svg> */}
				</div>
			</div>
			{/* content */}
			<div>
				<div className={scss.content}>
					<div className={scss.locations}>
						<div className={scss.content1}>
							<div>
								<img src={location} alt="" />
							</div>
							<div>
								<h3>Pay Us a Visit</h3>
								<p>Union St, Seattle, WA 98101, United States</p>
							</div>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1"
								height="117"
								viewBox="0 0 1 117"
								fill="none"
							>
								<path d="M0.5 116.5V0" stroke="#C0B7E8" stroke-opacity="0.33" />
							</svg>
						</div>
						<div className={scss.content1}>
							<div>
								<img src={phone} alt="" />
							</div>
							<div>
								<h3>Give Us a Call</h3>
								<p>0504 80 10 88</p>
							</div>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1"
								height="117"
								viewBox="0 0 1 117"
								fill="none"
							>
								<path d="M0.5 116.5V0" stroke="#C0B7E8" stroke-opacity="0.33" />
							</svg>
						</div>
						<div className={scss.content1}>
							<div>
								<img src={mail} alt="" />
							</div>
							<div>
								<h3>Send Us a Message</h3>
								<p>arslanataalaibekova@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DiveInto;
