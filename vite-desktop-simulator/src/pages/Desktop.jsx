import { useState } from 'react';
import './Desktop.css';
import IconsGrid from '../components/IconsGrid';

function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  
  const desktopIcons = [
    { id: 'vinyl', name: 'My Vinyl', icon: '🎵' },
    { id: 'anime', name: 'Anime List', icon: '📺' },
    { id: 'movies', name: 'Movies', icon: '🎬' },
    { id: 'concerts', name: 'Concerts', icon: '🎸' },
    { id: 'about', name: 'About Me', icon: '👤' },
    { id: 'spotify', name: 'Spotify Stats', icon: '🎵' },
    { id: 'games', name: 'Video Games', icon: '🎵' },

  ];
  
  return (
    <div className="desktop-page">
      <IconsGrid desktopIcons={desktopIcons} 
      openWindows={openWindows}
      setOpenWindows={setOpenWindows}
      />

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

export default Desktop
