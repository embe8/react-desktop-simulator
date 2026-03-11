import { useRef, useState } from 'react';
import './IconsGrid.css';
import Draggable from 'react-draggable';


function IconsGrid({ desktopIcons, openWindows, setOpenWindows }) {
  const nodeRef = useRef(null); // Create a ref

  const handleDoubleClick = (iconId) => {
      if (!openWindows.includes(iconId)) {
        setOpenWindows([...openWindows, iconId]);
      }
    };

    return (
        <div className="icons-grid">
        {desktopIcons.filter(icon => !icon.hidden).map(icon => (
          <Draggable
            key={icon.id}
            handle=".icons-container"
            nodeRef={nodeRef} // Pass the ref here
          >
            <div 
              ref={nodeRef}
              className="icons-container"
              onDoubleClick={() => handleDoubleClick(icon.id)}
            >
              <div className="icon-image">{icon.icon}</div>
              <div className="icon-label">{icon.name}</div>
            </div>
          </Draggable>
        ))}        
      </div>
    );
}

export default IconsGrid;