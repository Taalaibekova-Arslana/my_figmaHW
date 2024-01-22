import React from 'react';
import scss from '../homeSections/Section2.module.scss';
import arrow from '../../../assets/icons/arrow-small-right.svg';
import man from '../../../assets/images/man-photo.png';

const Section2 = () => {
	return (
		<section className={scss.container}>
			<div className={scss.introduction}>
				<div>
					<h1>
						INTRODUCTION <span>TO HYDRA VR</span>
					</h1>
					<img src={arrow} alt="" />
				</div>
				<div>
					<p>
						Vitae sapien pellentesque habitant morbi tristique senectus et netus
						et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
						amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
						aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
						in. Lectus magna fringilla urna porttitor rhoncus vitae.
					</p>
				</div>
			</div>
			<div className={scss.about}>
				<div>
					<img src={man} alt="" />
				</div>
				<div>
					<div className={scss.texting}>
						<div>
							<h1>
								ABOUT <br />
								<span>HYDRA VR</span>
							</h1>
						</div>
						<div>
							<p>
								Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
								mattis rhoncus urna neque viverra justo. Vivamus at augue eget
								arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
								Aenean et tortor at risus viverra adipiscing at in. Mattis
								aliquam faucibus purus in massa. Est placerat in egestas erat
								imperdiet sed. Consequat semper viverra nam libero justo laoreet
								sit amet. Aliquam etiam erat velit scelerisque in dictum non
								consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec
								ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet
								nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n
								tempor.
							</p>
						</div>
						<div>
							<button>LET’S GET IN TOUCH</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2;
