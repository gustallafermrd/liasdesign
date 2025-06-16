'use client';

import React, { useState } from 'react';
import { ModalButton } from './styles';
import ContactModal from './ContactModal';

const GetStartedButton = ({ padding }: { padding: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalButton
        type="button"
        style={{ padding }}
        onClick={() => setOpen(true)}
      >
        Contactanos
      </ModalButton>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default GetStartedButton;
