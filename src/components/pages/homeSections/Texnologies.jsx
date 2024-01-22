import React from 'react';
import scss from '../homeSections/Texnologies.module.scss';
import imageLast from '../../../assets/images/last-photo.png';
import img1 from '../../../assets/images/hydra-tech-1.png';
import img2 from '../../../assets/images/hydra-tech-2.png';
import img3 from '../../../assets/images/hydra-tech-3.png';
import img4 from '../../../assets/images/hydra-tech-4.png';
import line from '../../../assets/wavy-line.png';
import arrow from '../../../assets/icons/arrow-small-right.svg';

const Texnologies = () => {
	return (
		<div>
			<section className={scss.container}>
				<div className={scss.texnologi}>
					<div className={scss.card}>
						<img src={imageLast} alt="" />
						<h1>
							TECHNOLOGIES & HARDWARES <br /> <span>USED BY HYDRA VR</span>
						</h1>
						<svg
							className={scss.circle}
							xmlns="http://www.w3.org/2000/svg"
							width="100"
							height="100"
							viewBox="0 0 100 100"
							fill="none"
						>
							<circle
								cx="50"
								cy="50"
								r="50"
								fill="#0E0E0E"
								fill-opacity="0.32"
							/>
						</svg>
						<svg
							className={scss.circle2}
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							viewBox="0 0 60 60"
							fill="none"
						>
							<path
								d="M17.5 25L30 37.5L42.5 25"
								stroke="#433D60"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<svg
							className={scss.circle1}
							xmlns="http://www.w3.org/2000/svg"
							width="70"
							height="70"
							viewBox="0 0 70 70"
							fill="none"
						>
							<circle
								cx="35"
								cy="35"
								r="35"
								fill="url(#paint0_linear_11_114)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_11_114"
									x1="72"
									y1="37.5"
									x2="1.62848e-06"
									y2="40.5"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#C0B7E8" />
									<stop offset="1" stop-color="#8176AF" />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
				<div className={scss.unreal}>
					<div>
						<img src={img1} alt="" />
					</div>
					<div>
						<img src={img2} alt="" />
					</div>
					<div>
						<img src={img3} alt="" />
					</div>
					<div>
						<img src={img4} alt="" />
					</div>
				</div>
				{/*  */}
				<div className={scss.build}>
					<div>
						<h1>
							HOW WE BUILD <span>WITH HYDRA VR?</span>
						</h1>
					</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="100"
							height="100"
							viewBox="0 0 100 100"
							fill="none"
						>
							<path
								d="M70.8333 49.9999L29.1667 49.9999M70.8333 49.9999L54.1667 66.6666M70.8333 49.9999L54.1667 33.3333"
								stroke="#C0B7E8"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div>
						<p>
							Vitae sapien pellentesque habitant morbi tristique senectus et
							netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
							lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
							nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
							est placerat in. Lectus magna fringilla urna porttitor rhoncus
							vitae.
						</p>
					</div>
				</div>
				{/*  */}
				<div className={scss.numbers}>
					<div>
						<img src={line} alt="" />
					</div>
					<div className={scss.krugi}>
						<div className={scss.krug1Black}>
							{/*  */}
							<div>
								<svg
									className={scss.black1}
									xmlns="http://www.w3.org/2000/svg"
									width="198"
									height="198"
									viewBox="0 0 198 198"
									fill="none"
								>
									<circle
										cx="99"
										cy="99"
										r="99"
										fill="#0D0D0D"
										fill-opacity="0.32"
									/>
								</svg>
							</div>
							<div>
								<svg
									className={scss.black1}
									xmlns="http://www.w3.org/2000/svg"
									width="198"
									height="198"
									viewBox="0 0 198 198"
									fill="none"
								>
									<circle
										cx="99"
										cy="99"
										r="99"
										fill="#0D0D0D"
										fill-opacity="0.32"
									/>
								</svg>
							</div>
							<div>
								<svg
									className={scss.black1}
									xmlns="http://www.w3.org/2000/svg"
									width="198"
									height="198"
									viewBox="0 0 198 198"
									fill="none"
								>
									<circle
										cx="99"
										cy="99"
										r="99"
										fill="#0D0D0D"
										fill-opacity="0.32"
									/>
								</svg>
							</div>
							<div>
								<svg
									className={scss.black1}
									xmlns="http://www.w3.org/2000/svg"
									width="198"
									height="198"
									viewBox="0 0 198 198"
									fill="none"
								>
									<circle
										cx="99"
										cy="99"
										r="99"
										fill="#0D0D0D"
										fill-opacity="0.32"
									/>
								</svg>
							</div>
						</div>
						<div className={scss.purpleKrug}>
							<div>
								<svg
									className={scss.purple1}
									xmlns="http://www.w3.org/2000/svg"
									width="159"
									height="159"
									viewBox="0 0 159 159"
									fill="none"
								>
									<circle
										cx="79.5"
										cy="79.5"
										r="79.5"
										fill="url(#paint0_linear_11_129)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_11_129"
											x1="146"
											y1="42.5"
											x2="-3.89567e-06"
											y2="92"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#C0B7E8" />
											<stop offset="1" stop-color="#8176AF" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div>
								<svg
									className={scss.purple1}
									xmlns="http://www.w3.org/2000/svg"
									width="159"
									height="159"
									viewBox="0 0 159 159"
									fill="none"
								>
									<circle
										cx="79.5"
										cy="79.5"
										r="79.5"
										fill="url(#paint0_linear_11_129)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_11_129"
											x1="146"
											y1="42.5"
											x2="-3.89567e-06"
											y2="92"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#C0B7E8" />
											<stop offset="1" stop-color="#8176AF" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div>
								<svg
									className={scss.purple1}
									xmlns="http://www.w3.org/2000/svg"
									width="159"
									height="159"
									viewBox="0 0 159 159"
									fill="none"
								>
									<circle
										cx="79.5"
										cy="79.5"
										r="79.5"
										fill="url(#paint0_linear_11_129)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_11_129"
											x1="146"
											y1="42.5"
											x2="-3.89567e-06"
											y2="92"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#C0B7E8" />
											<stop offset="1" stop-color="#8176AF" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div>
								<svg
									className={scss.purple1}
									xmlns="http://www.w3.org/2000/svg"
									width="159"
									height="159"
									viewBox="0 0 159 159"
									fill="none"
								>
									<circle
										cx="79.5"
										cy="79.5"
										r="79.5"
										fill="url(#paint0_linear_11_129)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_11_129"
											x1="146"
											y1="42.5"
											x2="-3.89567e-06"
											y2="92"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#C0B7E8" />
											<stop offset="1" stop-color="#8176AF" />
										</linearGradient>
									</defs>
								</svg>
							</div>
						</div>
						{/*  */}
						<div className={scss.numberPurple}>
							<div>
								<h1>01</h1>
							</div>
							<div>
								<h1>02</h1>
							</div>
							<div>
								<h1>03</h1>
							</div>
							<div>
								<h1>04</h1>
							</div>
						</div>
						{/*  */}
						<div className={scss.textNumber}>
							<div className={scss.texting1}>
								<div>
									<img src={arrow} alt="" />
								</div>
								<div>
									<h1>3D Conception & Design</h1>
								</div>
							</div>
							<div className={scss.texting1}>
								<div>
									<img src={arrow} alt="" />
								</div>
								<div>
									<h1>Interaction Design</h1>
								</div>
							</div>
							<div className={scss.texting1}>
								<div>
									<img src={arrow} alt="" />
								</div>
								<div>
									<h1>Interaction Design</h1>
								</div>
							</div>
							<div className={scss.texting1}>
								<div>
									<img src={arrow} alt="" />
								</div>
								<div>
									<h1>Hydra VR Deploy</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Texnologies;
