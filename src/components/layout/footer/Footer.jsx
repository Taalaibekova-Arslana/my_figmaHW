import React from 'react';
import scss from './Footer.module.scss';
import lodo from '../../../assets/logo.png';
import linePng from '../../../assets/smooth-line-top.png';

const Footer = () => {
	return (
		<>
			<footer>
				<div className={scss.footer}>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1439"
							height="368"
							viewBox="0 0 1439 368"
							fill="none"
						>
							<path
								d="M3.5 366C45.3333 297.5 213.9 191.2 553.5 314C893.1 436.8 1285 157.833 1438.5 3"
								stroke="url(#paint0_linear_13_66)"
								stroke-opacity="0.13"
								stroke-width="6"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_13_66"
									x1="1438.5"
									y1="3.86474"
									x2="3.5"
									y2="3.86467"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#343045" />
									<stop offset="0.348958" stop-color="#C0B7E8" />
									<stop offset="0.6875" stop-color="#8176AF" />
									<stop offset="1" stop-color="#343045" />
								</linearGradient>
							</defs>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1440"
							height="270"
							viewBox="0 0 1440 270"
							fill="none"
						>
							<path
								d="M1439.5 3C1315.17 14.3333 1084.71 109.757 957 215C795 348.5 543.167 194 391 97C283.5 30 55.3 -36.3 2.5 234.5"
								stroke="url(#paint0_linear_13_65)"
								stroke-opacity="0.13"
								stroke-width="6"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_13_65"
									x1="1439.5"
									y1="3.63123"
									x2="2.5"
									y2="3.63112"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#343045" />
									<stop offset="0.348958" stop-color="#C0B7E8" />
									<stop offset="0.6875" stop-color="#8176AF" />
									<stop offset="1" stop-color="#343045" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className={scss.disply}>
						<div className={scss.logo}>
							<img src={lodo} alt="" />
						</div>
						<div className={scss.line}>
							<img src={linePng} alt="" />
						</div>
						<div className={scss.text1}>
							<p>ABOUT </p>
							<p>SERVICES</p>
							<p>TECHNOLOGIES</p>
							<p>HOW TO</p>
							<p>JOIN HYDRA</p>
						</div>
						<div className={scss.line}>
							<img src={linePng} alt="" />
						</div>
						<div className={scss.text1}>
							<p>F.A.Q</p> <p>SITEMAP</p> <p>CONDITIONS</p> <p> LICENSES</p>
						</div>
						<div className={scss.line}>
							<img src={linePng} alt="" />
						</div>
						<div className={scss.logoImg}>
							<div>
								<p>SOCIALIZE WITH HYDRA</p>
							</div>
							<div className={scss.purpleSurkle}>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z"
											fill="#C0B7E8"
										/>
									</svg>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z"
											fill="#C0B7E8"
										/>
									</svg>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z"
											fill="#C0B7E8"
										/>
									</svg>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path d="M18.6 16L14.4 13.6V18.4L18.6 16Z" fill="#C0B7E8" />
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.2 10.7C22.9 10.9 23.4 11.4 23.6 12.1C24 13.4 24 16 24 16C24 16 24 18.6 23.7 19.9C23.5 20.6 23 21.1 22.3 21.3C21 21.6 16 21.6 16 21.6C16 21.6 10.9 21.6 9.7 21.3C9 21.1 8.5 20.6 8.3 19.9C8 18.6 8 16 8 16C8 16 8 13.4 8.2 12.1C8.4 11.4 8.90001 10.9 9.60001 10.7C10.9 10.4 15.9 10.4 15.9 10.4C15.9 10.4 21 10.4 22.2 10.7Z"
											fill="#C0B7E8"
										/>
									</svg>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
											fill="#C0B7E8"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z"
											fill="#C0B7E8"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z"
											fill="#C0B7E8"
										/>
									</svg>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8 16C8 11.6 11.6 8 16 8C20.4 8 24 11.6 23.9 15.6C23.9 20 20.3 23.6 15.9 23.6C15.1 23.6 14.3 23.5 13.6 23.3C13.9 22.8 14.2 22.2 14.4 21.6C14.5 21.2 15 19.4 15 19.4C15.3 19.9 16.1 20.4 17 20.4C19.6 20.4 21.3 18 21.3 14.9C21.3 12.5 19.3 10.3 16.2 10.3C12.4 10.3 10.5 13 10.5 15.3C10.5 16.7 11 17.9 12.1 18.4C12.3 18.5 12.4 18.4 12.5 18.2C12.6 18.1 12.7 17.7 12.7 17.6C12.7707 17.4586 12.7414 17.4172 12.6828 17.3343C12.6586 17.3 12.6293 17.2586 12.6 17.2C12.3 16.8 12.1 16.3 12.1 15.6C12.1 13.6 13.6 11.8 16 11.8C18.1 11.8 19.3 13.1 19.3 14.9C19.3 17.3 18.3 19.2 16.8 19.2C15.9 19.2 15.3 18.5 15.5 17.7C15.5835 17.2826 15.7192 16.8477 15.8491 16.4318C16.0303 15.8514 16.2 15.3078 16.2 14.9C16.2 14.2 15.8 13.7 15.1 13.7C14.3 13.7 13.6 14.6 13.6 15.8C13.6 16.6 13.9 17.1 13.9 17.1C13.9 17.1 13.1 20.8 12.9 21.5C12.8 22.1 12.8 22.6999 12.8 23.2999C10 22.0999 8 19.3 8 16Z"
											fill="#C0B7E8"
										/>
									</svg>
								</div>
							</div>
							<div>
								<button>BUILD YOUR WORLD</button>
							</div>
						</div>
					</div>
				</div>
				<div className={scss.retoof}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1269"
						height="2"
						viewBox="0 0 1269 2"
						fill="none"
					>
						<path d="M0 1H1269" stroke="url(#paint0_linear_13_63)" />
						<defs>
							<linearGradient
								id="paint0_linear_13_63"
								x1="1269"
								y1="1.00238"
								x2="3.52735e-07"
								y2="0.980001"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#343045" />
								<stop offset="0.348958" stop-color="#C0B7E8" />
								<stop offset="0.6875" stop-color="#8176AF" />
								<stop offset="1" stop-color="#343045" />
							</linearGradient>
						</defs>
					</svg>
					<div>
						<p>
							2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
							RESERVED{' '}
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
