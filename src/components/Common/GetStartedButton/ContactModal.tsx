import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError('No se pudo enviar el mensaje. Intenta de nuevo.');
      }
    } catch (err) {
      setError('Ocurrió un error. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '1rem',
        padding: '2rem',
        minWidth: '320px',
        maxWidth: '90vw',
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
        <h2>Contáctanos</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre" required style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} />
          <input type="email" name="email" placeholder="E-mail" required style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} />
          <input type="phone" name="phone" placeholder="Teléfono" required style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} />
          <textarea name="message" placeholder="Hola me llamo Juan, me encuentro en Minneapolis, MN y quiero saber ..." required style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #ccc', minHeight: '100px' }} />
          <button type="submit" disabled={loading} style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--green, #10b981)', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
          {success && <div style={{ color: 'green', textAlign: 'center' }}>¡Mensaje enviado!</div>}
          {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
