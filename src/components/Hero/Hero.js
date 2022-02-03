import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hello There! <br /> I am Eric Santos
			</SectionTitle>
			<SectionText>
				Full Stack Developer focusing on Front-End Development
			</SectionText>
		</LeftSection>
		<Button
			onClick={() => (window.location = 'mailto:eric.santos.dev@gmail.com')}
		>
			Learn More
		</Button>
	</Section>
);

export default Hero;
