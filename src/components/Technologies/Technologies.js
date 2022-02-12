import React from 'react';
import { DiReact, DiMongodb } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I work with a wide range of technologies in Web Development. From
			Frontend, and Backend to Design.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Frontend</ListTitle>
					<ListParagraph>
						Experience with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiMongodb size="3rem" />
				<ListContainer>
					<ListTitle>Backend</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FiFigma size="3rem" />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						Tools like Figma
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
