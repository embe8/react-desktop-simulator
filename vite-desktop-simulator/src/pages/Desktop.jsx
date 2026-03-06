import { useState } from 'react';
import './Desktop.css';
import IconsGrid from '../components/IconsGrid';
import Window from '../components/Window';
import MusicWindow from '../components/windows/MusicWindow';
import AnimeWindow from '../components/windows/AnimeWindow';
import MoviesWindow from '../components/windows/MoviesWindow';
import ConcertsWindow from '../components/windows/ConcertsWindow';
import AboutWindow from '../components/windows/AboutWindow';
import GamesWindow from '../components/windows/GamesWindow';
import startButtonImg from '../assets/start_button95.png';


function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  
  const desktopIcons = [
    { id: 'music', name: 'Music', icon: '🎵' },
    { id: 'anime', name: 'Anime List', icon: '📺' },
    { id: 'movies', name: 'Movies', icon: '🎬' },
    { id: 'concerts', name: 'Concerts', icon: '🎸' },
    { id: 'about', name: 'About Me', icon: '👤' },
    { id: 'games', name: 'Video Games', icon: '🎵' },

  ];

  const closeWindow = (windowId) => {
    setOpenWindows(openWindows.filter(id => id !== windowId));
  };
  
  return (
    <div className="desktop-page">
      <IconsGrid desktopIcons={desktopIcons} 
      openWindows={openWindows}
      setOpenWindows={setOpenWindows}
      />

       {/* Windows will go here */}
      {/* Render opened windows */}
      {openWindows.map(windowId => {
        const icon = desktopIcons.find(i => i.id === windowId);
        return (
          <Window 
            key={windowId}
            icon={icon.icon}
            title={icon.name}
            onClose={() => closeWindow(windowId)}
          >
            {/* Content for each window type */}
            {windowId === 'music' && <MusicWindow />}
            {windowId === 'anime' && <AnimeWindow />}
            {windowId === 'movies' && <MoviesWindow />}
            {windowId === 'concerts' && <ConcertsWindow />}
            {windowId === 'about' && <AboutWindow />}
            {windowId === 'games' && <GamesWindow />}
          </Window>
        );
      })}

      
         <div className="taskbar">
        <button className="start-button">
          <b>Start</b>
        </button>
        <div className="taskbar-time">
          {new Date().toLocaleTimeString([], { 
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
        </div>
    </div>
  );
}

export default Desktop;
