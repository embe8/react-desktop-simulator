import { useState } from 'react';
import './IconsGrid.css';

function IconsGrid({ desktopIcons, openWindows, setOpenWindows }) {
    const handleDoubleClick = (iconId) => {
      if (!openWindows.includes(iconId)) {
        setOpenWindows([...openWindows, iconId]);
      }
    };

    return (

        <div className="icons-grid">
        {desktopIcons.filter(icon => !icon.hidden).map(icon => (
          <div 
            key={icon.id}
            className="icons-container"
            onDoubleClick={() => handleDoubleClick(icon.id)}
          >
            <div className="icon-image">{icon.icon}</div>
            <div className="icon-label">{icon.name}</div>
          </div>
        ))}
        
      </div>
      
   
    

    );
}

export default IconsGrid;