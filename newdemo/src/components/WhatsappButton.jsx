import React from 'react';

const WhatsappButton = () => {
  const whatsappNumber = '8299408873'; // Replace with your company number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const buttonStyle = {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    zIndex: 1000,
    backgroundColor: '#25D366',
    borderRadius: '50px',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  };

  const textStyle = {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    marginLeft: '10px',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
  };

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={iconStyle}
      />
      <span style={textStyle}>WhatsApp Us</span>
    </a>
  );
};

export default WhatsappButton;
