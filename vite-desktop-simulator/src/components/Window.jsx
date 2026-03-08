import './Window.css';
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';


export function Window({ icon, title, onClose, children }) {
  const nodeRef = useRef(null); // Create a ref
  const [size, setSize] = useState({ width: 200, height: 'auto' });

  const onResize = (event, { size: newSize }) => {
    setSize({ width: newSize.width, height: newSize.height });

  };


  return (

    <Draggable
      handle=".window-header"
      nodeRef={nodeRef} // Pass the ref here
    >
      <Resizable
        height={size.height}
        width={size.width}
        onResize={onResize}
        minConstraints={[200, 200]}
        maxConstraints={[900, 700]}
        resizeHandles={['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw']}

      >
        <div className="window-container" ref={nodeRef} style={{ width: size.width, height: size.height }}> {/* Attach ref here */}
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
      </Resizable>
    </Draggable>

  );
}

export default Window;