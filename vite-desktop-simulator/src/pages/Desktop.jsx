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
import StartMenu from '../components/startMenu';
import startButtonImg from '../assets/start_button95.png';


function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  const [windowTitles, setWindowTitles] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [minimizedWindows, setMinimizeWindow] = useState([]);

  
  const desktopIcons = [
    { id: 'music', name: 'Music', icon: '🎵' },
    { id: 'anime', name: 'Anime List', icon: '📺' },
    { id: 'movies', name: 'Movies', icon: '🎬' },
    { id: 'concerts', name: 'Concerts', icon: '🎸' },
    { id: 'about', name: 'About Me', icon: '👤' },
    { id: 'games', name: 'Video Games', icon: '🎮' },
    { id: 'vinyl', name: 'Vinyl Collection', icon: '💿', hidden: true },
    { id: 'spotify', name: 'Spotify Stats', icon: '🎧', hidden: true },
  ];

  const closeWindow = (windowId) => {
    setOpenWindows(openWindows.filter(id => id !== windowId));
  };

  const minimizeWindow = (windowId) => {
    setMinimizeWindow([...minimizedWindows, windowId]);
};


  const restoreWindow = (windowId) => {
    setMinimizeWindow(minimizedWindows.filter(id => id !== windowId));
  }; 

  const handleRestore = (windowId) => {
    const isMinimized = minimizedWindow.includes(windowId);
    if (isMinimized) {
      restoreWindow(windowId);
    }
    else{
      minimizeWindow(windowId);
    }
  };


  
  return (
    
    <div className="desktop-page">
      <IconsGrid desktopIcons={desktopIcons} 
      openWindows={openWindows}
      setOpenWindows={setOpenWindows}
      />

      {/* Render opened windows */}
      {openWindows.map(windowId => {
        const icon = desktopIcons.find(i => i.id === windowId);
        const title = windowTitles[windowId] ?? icon.name; // default = "Music"

        return (
          <Window 
            key={windowId}
            style={{ display: minimizedWindows.includes(windowId) ? 'none' : 'block' }}
            icon={icon.icon}
            title={title}
            onClose={() => closeWindow(windowId)}
            onMinimize={() => minimizeWindow(windowId)}
            isMinimized={minimizedWindows.includes(windowId)}
          >
            {/* Content for each window type */}
            {windowId === 'music' && (
              <MusicWindow setWindowTitle={(newTitle) =>
                setWindowTitles(prev => ({...prev, [windowId]: newTitle }))
                }
              />)
            }
            {windowId === 'anime' && <AnimeWindow />}
            {windowId === 'movies' && <MoviesWindow />}
            {windowId === 'concerts' && <ConcertsWindow />}
            {windowId === 'about' && <AboutWindow />}
            {windowId === 'games' && <GamesWindow />}
   
          </Window>
        );
      })}
         <div className="taskbar">
   
        <button className="start-button"
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(!showMenu);
          }}
        >
          <b>Start</b>
        </button>

        
        
        {showMenu && <StartMenu 
          desktopIcons={desktopIcons}
          openWindows={openWindows}
          setOpenWindows={setOpenWindows}
          onClose={() => setShowMenu(false)}  
          />}
          <div className="taskbar-window-btn">
                 {openWindows.map(windowId => {
            const icon = desktopIcons.find(i => i.id === windowId);
            return (
              <button
                key={windowId}
                className="taskbar-btn"
                onClick={() => handleRestore(windowId)}
                >
                  {icon?.icon} 
                </button>
            );
          })}
          </div>
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
