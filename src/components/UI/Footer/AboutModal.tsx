import React from 'react';

const AboutModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(87, 87, 87, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
    <div style={{
      background: '#71bf44',
      borderRadius: '1rem',
      padding: '2rem',
      minWidth: '320px',
      maxWidth: '60%',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      position: 'relative',
    }}>
    <button onClick={onClose} style={{
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
    }}>&times;</button>
      <h2 style={{ paddingBottom: '1.5rem' }}>¿Quiénes somos?</h2>
      <p style={{ paddingBottom: '1rem' }}>
        <strong>Lias Design</strong> es el estudio creativo fundado por <strong>Mizrrain Lias</strong>, con sede en Burnsville, Minnesota. Junto a su socio <strong>Gustavo Tallaferro</strong>, combinamos diseño, tecnología y estrategia para desarrollar soluciones visuales y publicitarias que conectan con las personas y elevan el valor de las marcas.
      </p>

      <p>
        Trabajamos de forma <strong>colaborativa e independiente</strong>, adaptándonos a las necesidades de cada proyecto y cliente. Creemos en la creación de <strong>narrativas auténticas</strong> que reflejen la esencia de cada marca, utilizando herramientas del diseño gráfico, el marketing, la programación y la producción visual.
      </p>
    </div>
    </div>
  );
};

export default AboutModal;
