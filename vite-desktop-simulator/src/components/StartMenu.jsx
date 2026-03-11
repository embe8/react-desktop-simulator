import './StartMenu.css';
import { useState, useRef, useEffect } from 'react';

const subMenus = {
    music: [
        { id: 'vinyl', name: 'Vinyl Collection', icon: '💿' },
        { id: 'spotify', name: 'Spotify Stats', icon: '🎧' },
    ],
    anime: [],
    moview: [],
};

function startMenu({ onClose, desktopIcons, openWindows, setOpenWindows }) {
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const startMenu = useRef(null);

    useEffect(() => {
        const closeOpenMenu = (e)=>{
            if(startMenu.current && !startMenu.current?.contains(e.target)){
                onClose();
            }
        };

        document.addEventListener('mousedown',closeOpenMenu);
        return () => document.removeEventListener('mousedown', closeOpenMenu);
    }, []);

    const handleClick = (iconId) => { 
        // only open the menu if it has no submenu
        if (!subMenus[iconId]?.length > 0) {
            if (!openWindows.includes(iconId)) {
            setOpenWindows([...openWindows, iconId]);
            }
        }
      };

    const handleSubClick = (e, subId) => {
        e.stopPropagation(); //prevent parent onClick from activating
        if (!openWindows.includes(subId)) {
            setOpenWindows([...openWindows, subId]);
        }
    };



    

 

    return (
        <div 
        ref={startMenu}
        className="start-container"
        >
            { desktopIcons.map(icon => (
                <div
                 key={icon.id}
                 className={`start-menu-item ${activeSubmenu === icon.id ? 'active' : ''}`}
                 onMouseEnter={() => setActiveSubmenu(icon.id)}
                 onMouseLeave={() => setActiveSubmenu(null)}
                 onClick={()=> handleClick(icon.id)}
                >
                    <span>{icon.icon}</span>
                    <span>{icon.name}</span>
                    <span className="arrow">{subMenus[icon.id]?.length > 0 ? '▶' : ''}
                    </span>
                    {/* submenu appears beside arrow */}
                    {activeSubmenu === icon.id && subMenus[icon.id]?.length > 0 && (
                        <div className="submenu">
                            {subMenus[icon.id].map(sub => (
                                <div key={sub.id} 
                                    className="submenu-item start-menu-item"
                                    onClick={(e)=> handleSubClick(e, sub.id)}
                                >
                                    <span>{sub.icon}</span>
                                    <span>{sub.name}</span>
                                </div>
                            ))}
                        </div>  
                    )}
                </div>
            ))}
        </div>
    );

}
export default startMenu;
