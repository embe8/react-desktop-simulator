import './StartMenu.css';
import { useState } from 'react';

const subMenus = {
    music: [
        { id: 'vinyl', name: 'Vinyl Collection', icon: '💿' },
        { id: 'spotify', name: 'Spotify Stats', icon: '🎧' },
    ],
    anime: [],
    moview: [],
};

function startMenu({ onClose, desktopIcons }) {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

 

    return (
        <div className="start-container">
            { desktopIcons.map(icon => (
                <div
                 key={icon.id}
                 className={`start-menu-item ${activeSubmenu === icon.id ? 'active' : ''}`}
                 onMouseEnter={() => setActiveSubmenu(icon.id)}
                 onMouseLeave={() => setActiveSubmenu(null)}
                >
                    <span>{icon.icon}</span>
                    <span>{icon.name}</span>
                    <span className="arrow">{subMenus[icon.id]?.length > 0 ? '▶' : ''}
                    </span>
                    {/* submenu appears beside arrow */}
                    {activeSubmenu === icon.id && subMenus[icon.id]?.length > 0 && (
                        <div className="submenu">
                            {subMenus[icon.id].map(sub => (
                                <div key={sub.id} className="submenu-item start-menu-item">
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
