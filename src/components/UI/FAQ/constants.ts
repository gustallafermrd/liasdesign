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
    question: 'Donde estan ubicados?',
    answer:
      'Visita Nuestra oficina en 14321 Nicollet Ave, Burnsville,MN, tmambien nos puedes encontrar aqui mismo contactanos.',
  },
  {
    question: 'cuales son los precios de los estampados en las T-shirts?',
    answer:
      'tenemos una gran variedad de precios pero al dia que lees esto tenemos T-shirt full color por 10.57$ un solo estampado frente.',
  },
  {
    question: 'tu puedes visitarnos en nuestro local o tienes que venis a nuestras oficinas',
    answer:
      'Nuestra prioridad es ayudarte a rodar tu noegocio no a que pierdas tu tiempo desviandote de tus deberes asi que nosostros podemos visitarte en tu local o tu puedes visitarnos a nosotros tu eliges',
  },
  {
    question: 'que mas me puedes ayudar',
    answer:
      'si de publicidad solo dinos que necesitas porque con nuestra aliados comerciales logramos que tenfas el productos que necesitas para tu empresa.',
  },
];
