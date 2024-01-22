import React from 'react';
import WhyBuild from './homeSections/WhyBuild';
import JoinHydra from './homeSections/JoinHydra';
import DiveInto from './homeSections/DiveInto';
import Section2 from './homeSections/Section2';
import Texnologies from './homeSections/Texnologies';

const HomePage = () => {
	return (
		<>
			<div className="pages">
				<DiveInto />
				<Section2 />
				<WhyBuild />
				<Texnologies />

				<JoinHydra />
			</div>
		</>
	);
};
export default HomePage;

