import { useState } from 'react';
import './IconsGrid.css';

function IconsGrid({ desktopIcons, openWindows, setOpenWindows }) {

    return (

        <div className="icons-grid">
            <div className="desktop-icons">
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
      
      {/* Windows will go here */}
      
      <div className="taskbar">
        <button className="start-button">
          <span className="windows-logo-small">🪟</span>
          Start
        </button>
        <div className="taskbar-time">
          {new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>

        </div>
    );
}

export default IconsGrid;