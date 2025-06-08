import Image from 'next/image';
import raft_footer_logo from '../../../../public/svgs/raft_footer_logo.svg';
import qr_code from '../../../../public/svgs/qr_code.svg';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';

const linksArr = [
  {
    title: 'Quienes somos',
    links: ['Historia', 'Colabora con nosotros', 'Quien habla de nosotros'],
  },
  {
    title: 'Legal',
    links: ['Terminos de uso', 'Politica de privacidad', 'Sobre nosotros'],
  },
  {
    title: 'About us',
    links: ['Contactacnos', 'FAQ'],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
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
