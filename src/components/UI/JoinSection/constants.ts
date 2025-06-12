import { StaticImageData } from 'next/image';
import el_triunfo from '../../../../public/images/el_triunfo.svg';
import casa_deli from '../../../../public/images/casa_deli.svg';
import ena from '../../../../public/images/ena.svg';
import latinos from '../../../../public/images/latinos.svg';
import el_paisa from '../../../../public/images/el_paisa.png';

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
    avatar: el_paisa,
  },
  {
    testimony:
      "Nuestros uniformes lucen muy geniales con una excelente propuesta visual.",
    person: 'Casa Deli',
    avatar: casa_deli,
  },
  {
    testimony:
      "Confiamos en Lias todo el tiempo, él nos ayudó a crear nuestra presencia visual y física así como nuestra imágen al público, nos ayudó desarrollando el brandbook y la marca de Ena desde el 2019",
    person: 'Ena Restaurant',
    avatar: ena,
  },
  {
    testimony:
      "Muy buenas las playeras que nos dió Lias con nuestro logos.",
    person: 'Latino Depot',
    avatar: latinos,
  },
  {
    testimony:
      "Desde que comenzamos a trabajar con Lias nuestra compañía a tomado una presencia diferente.",
    person: 'El Triunfo NordField ',
    avatar: el_triunfo,
  },
];

export const desktopHeaderPhrase = ['Que dicen nuestros clientes'];
