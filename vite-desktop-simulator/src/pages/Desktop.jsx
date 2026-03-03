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
    { id: 'about', name: 'About Me', icon: '👤' }
  ];
  
  return (
    <div className="desktop-95">
      <IconsGrid desktopIcons={desktopIcons} 
      openWindows={openWindows}
      setOpenWindows={setOpenWindows}
      />
    </div>
  );
}

export default Desktop
