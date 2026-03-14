import './Window.css';
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';


export function Window({ icon, title, onClose, onMinimize, children, isMinimized}) {
  const nodeRef = useRef(null); // Create a ref
  const [size, setSize] = useState({ width: 200, height: 'auto' });

  const onResize = (event, { size: newSize }) => {
    setSize({ width: newSize.width, height: newSize.height });
  };
  const handleMax = () => {
    //get width and height of desktop page
    setSize({width: 900, height: 700});
    //
  };


  return (

    <Draggable
      handle=".window-container"
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
        <div 
        className="window-container" 
        ref={nodeRef} 
        style={{ 
          width: size.width, 
          height: size.height,
          display: isMinimized ? 'none' : 'flex' }}> {/* Attach ref here */}
          <div className="window-header">
            <div className="window-title">
              <span className="window-icon">{icon}</span>
              {title}
            </div>
            <div className="window-controls">
              <button className="window-btn minimize" onClick={onMinimize}>_</button>
              <button className="window-btn maximize" onClick={handleMax}>□</button>
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