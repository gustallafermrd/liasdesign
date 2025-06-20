"use client";
import Image from 'next/image';
import lias_footer_logo from '../../../../public/svgs/lias_footer_logo.svg';
import React, { useState } from 'react';
import AboutModal from './AboutModal';

const linksArr = [
	{
		title: 'Quienes somos',
		links: ['Sobre nosotros', 'Colabora con nosotros', 'Contactanos'],
	},
	{
		title: 'Legal',
		links: ['Terminos de uso', 'Politica de privacidad'],
	},
	/* {
		title: 'About us',
		links: ['Contactanos', 'FAQ'],
	}, */
];

import {
	Wrapper,
	Inner,
	FooterLogo,
	FooterMainContent,
	FooterMiddle,
	FooterNavigation,
	GridColumn,
	LinksContainer,
	FooterBottom,
	CopyRight,
} from './styles';

const Footer = () => {
	const [aboutOpen, setAboutOpen] = useState(false);
	return (
		<Wrapper>
			<Inner>
				<FooterMainContent>
					<FooterMiddle>
						<FooterLogo>
							<Image src={lias_footer_logo} alt="Lias Design logo" />
						</FooterLogo>
						<FooterNavigation>
							{linksArr.map((l, i) => (
								<GridColumn key={i}>
									<h3>{l.title}</h3>
									<LinksContainer>
										{l.links.map((link, j) => (
											<li
												key={j}
												onClick={() =>
													link === 'Sobre nosotros'
														? setAboutOpen(true)
														: undefined
												}
											>
												{link}
											</li>
										))}
									</LinksContainer>
								</GridColumn>
							))}
						</FooterNavigation>
					</FooterMiddle>
					<FooterBottom></FooterBottom>
				</FooterMainContent>
				<AboutModal
					isOpen={aboutOpen}
					onClose={() => setAboutOpen(false)}
				/>
			</Inner>
		</Wrapper>
	);
};

export default Footer;
