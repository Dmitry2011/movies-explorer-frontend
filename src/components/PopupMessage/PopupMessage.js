import React from 'react';
import './PopupMessage.css';


const PopupMessage = ({ isOpen, onClose, message }) => {

  const closeByEsc = (event) => {
    if (event.key === "Escape") {
      onClose && onClose();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keyup", closeByEsc);
    return () => {
      document.removeEventListener("keyup", closeByEsc);
    };
  }, [onClose]);

  return (
    <div className={isOpen ? 'popup-message popup-message_opened' : 'popup-message'}>
      <div className='popup-message__container'>
        <p className='popup-message__text'>{JSON.stringify(message)}</p>
        <button type='button' className='popup-message__close-button' onClick={onClose}/>
      </div>
    </div>
  )
};

export default PopupMessage;
