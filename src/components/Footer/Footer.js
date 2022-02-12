import React from 'react';
import {
	AiFillGithub,
	AiFillTwitterSquare,
	AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href="tel:915-400-1670">915-400-1670</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:eric.santos.dev@gmail.com">
						eric.santos.dev@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/Eric-Santos">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/ericsantos01/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://twitter.com/ericsantosdev">
						<AiFillTwitterSquare size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialContainer>
		</FooterWrapper>
	);
};

export default Footer;
