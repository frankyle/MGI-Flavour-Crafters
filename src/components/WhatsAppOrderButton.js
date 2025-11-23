import React from "react";

/**
 * WhatsAppOrderButton
 * Opens WhatsApp with a pre-filled order message when clicked.
 * Props:
 * - phoneNumber: string (WhatsApp number, no '+')
 * - message: string (the message to send)
 * - onSend?: function (optional callback after sending)
 * - children: ReactNode (button label)
 */
const WhatsAppOrderButton = ({ phoneNumber, message, onSend, children, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    if (onSend) onSend();
  };

  return (
    <button type="button" onClick={handleClick} {...props}>
      {children || "Send Order via WhatsApp"}
    </button>
  );
};

export default WhatsAppOrderButton;
