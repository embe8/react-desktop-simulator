import { useState } from 'react';
import './IconsGrid.css';

function IconsGrid({ desktopIcons, openWindows, setOpenWindows }) {

    return (

        <div className="icons-grid">
        {desktopIcons.map(icon => (
          <div 
            key={icon.id}
            className="desktop-icon"
            onDoubleClick={() => setOpenWindows([...openWindows, icon.id])}
          >
            <div className="icon-image">{icon.icon}</div>
            <div className="icon-label">{icon.name}</div>
          </div>
        ))}
      </div>
      
   
    

    );
}

export default IconsGrid;