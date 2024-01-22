import React from 'react';
import scss from './JoinHydra.module.scss';
import InputBG from '../../ui/inputs/InputBG';
import ButtonBG from '../../ui/buttons/ButtonBG';

const JoinHydra = () => {
	return (
		<section className={scss.JoinHydra}>
			<div className={scss.container}>
				<div className={scss.nameTitle}>
					<div className={scss.title}>
						<h1>JOIN HYDRA</h1>
					</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="414"
							height="2"
							viewBox="0 0 414 2"
							fill="none"
						>
							<path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
							<defs>
								<linearGradient
									id="paint0_linear_13_46"
									x1="414"
									y1="1.00238"
									x2="0"
									y2="1"
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
					<div>
						<h1>Let’s Build Your VR Experience</h1>
					</div>
				</div>
				<div className={scss.inputs}>
					<div className={scss.inputs1}>
						<InputBG className={scss.inputFirst} placeholder="First Name" />
						<InputBG className={scss.inputLast} placeholder="Last Name" />
					</div>
					<div className={scss.inputs2}>
						<InputBG className={scss.inputEmail} placeholder="Email" />
						<InputBG className={scss.inputPhone} placeholder="Phone Number" />
					</div>
					<div className={scss.inputs3}>
						<InputBG className={scss.inputSub} placeholder="Subject" />
						<InputBG
							className={scss.inputTell}
							placeholder="Tell Us Something..."
						/>
					</div>
					<div className={scss.buttons}>
						<ButtonBG>SEND TO HYDRA</ButtonBG>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JoinHydra;
