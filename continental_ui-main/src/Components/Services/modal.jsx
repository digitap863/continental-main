import React, { useState } from 'react';
import './modal.css'; // Create a CSS file for styling the modal
import closeIcon from '../../assets/services/closeicon.png'
import { useEffect } from 'react';


function Modal({ isOpen, onClose, content }) {
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
      if (isOpen) {
        setIsRendered(true); // Render the modal when it's open
      } else {
        // Delay rendering until the modal is closed and the fade-out animation finishes
        const timeoutId = setTimeout(() => {
          setIsRendered(false);
        }, 300); // Adjust the delay to match your CSS transition duration
        return () => clearTimeout(timeoutId); // Clean up the timeout when unmounting
      }
    }, [isOpen]);
  
    if (!isRendered) return null; // Return null when not rendered

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          <img src={closeIcon} alt="" />
        </span>
        <div className="modal-body">
            <img src={content?.icon} alt="" />
          <h3>{content?.title}</h3>
          <p>{content?.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
