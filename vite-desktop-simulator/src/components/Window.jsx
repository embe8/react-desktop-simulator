import './Window.css';
import React, { useRef } from 'react';
import Draggable from 'react-draggable';

export function Window({ icon, title, onClose, children }) {
  const nodeRef = useRef(null); // Create a ref
  
  return (
    <Draggable 
      handle=".window-header"
      nodeRef={nodeRef} // Pass the ref here
    >
      <div className="window-container" ref={nodeRef}> {/* Attach ref here */}
        <div className="window-header">
          <div className="window-title">
            <span className="window-icon">{icon}</span>
            {title}
          </div>
          <div className="window-controls">
            <button className="window-btn minimize">_</button>
            <button className="window-btn maximize">□</button>
            <button className="window-btn close" onClick={onClose}>✕</button>
          </div>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;