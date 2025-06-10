import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Excelente trabajo estos chicos nos ayudaron con nuestra idea de tener nuestro foodtruck con un mejor menu, nuestro uniformes y página web, los recomendamos 100%",
    person: 'El Paisa Foodtruck',
    avatar: robert_fox,
  },
  {
    testimony:
      "Nuestros uniformes lucen muy geniales con una excelente propuesta visual.",
    person: 'Casa Deli',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Confiamos en Lias todo el tiempo, él nos ayudó a crear nuestra presencia visual y física así como nuestra imágen al público, nos ayudó desarrollando el brandbook y la marca de Ena desde el 2019",
    person: 'Ena Restaurant',
    avatar: esther_howard,
  },
  {
    testimony:
      "Muy buenas las playeras que nos dió Lias con nuestro logos.",
    person: 'Latino Depot',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Desde que comenzamos a trabajar con Lias nuestra compañía a tomado una presencia diferente.",
    person: 'El Triunfo NordField ',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Que dicen nuestros clientes'];
