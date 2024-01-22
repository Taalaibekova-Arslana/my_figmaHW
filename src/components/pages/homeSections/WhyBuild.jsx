import React from 'react';
import scss from '../Style.module.scss';
import { data } from '../../../data/whyBuildData';
import ButtonBG from '../../../components/ui/buttons/ButtonBG';
import arrow from '../../../assets/icons/arrow-small-right.svg';

const WhyBuild = () => {
	return (
		<div className={scss.WhyBuildContainer}>
			<section className={scss.why_build}>
				<div className={scss.text}>
					<div>
						<h1>
							ABOUT <span>HYDRA VR</span>
						</h1>
						<img src={arrow} alt="" />
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
				<div className={scss.cards}>
					{data.map((item, index) => (
						<div key={index} className={scss.card}>
							<div className={scss.cardes}>
								<img src={item.image} alt={item.tittle} />
								<h1>{item.tittle}</h1>
								<hr />
								<p>{item.text}</p>
								<ButtonBG>TRY IT NOW</ButtonBG>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default WhyBuild;
