import Image from 'next/image';
import raft_footer_logo from '../../../../public/svgs/raft_footer_logo.svg';

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
  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <FooterMiddle>
            <FooterLogo>
              <Image src={raft_footer_logo} alt="raft_footer_logo" />
            </FooterLogo>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
