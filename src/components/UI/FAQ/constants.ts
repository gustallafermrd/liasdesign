type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Preguntas', 'frecuentes'];
export const mobileHeaderPhrase = ['Preguntas', 'frecuentes'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: '¿Dónde están ubicados?',
    answer:
      'Visita nuestra oficina en 14321 Nicollet Ave, Burnsville,MN, también nos puedes encontrar aqui mismo contáctanos.',
  },
  {
    question: '¿Cuales son los precios de los estampados en las T-shirts?',
    answer:
      'Tenemos una gran variedad de precios pero al día que lees esto tenemos T-shirt full color por 10.57$ un solo estampado frente.',
  },
  {
    question: '¿Te puedo visitar en tú local o puedes venir nuestras oficinas?',
    answer:
      'Nuestra prioridad es ayudarte con tu negocio no a que pierdas tu tiempo desviandote de tus deberes asi que nosostros podemos visitarte en tu local o tú puedes visitarnos a nosotros tu eliges.',
  },
  {
    question: '¿Qué mas me puedes ayudar?',
    answer:
      'Sí, de publicidad solo dinos que necesitas porque con nuestras alianzas comerciales logramos que tengas los productos que necesitas para tu empresa.',
  },
];
