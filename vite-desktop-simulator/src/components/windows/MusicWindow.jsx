import { useState } from 'react';
import IconsGrid from '../IconsGrid';

function MusicWindow() {
    const [active, setActive] = useState(null)

    const musicIcons = [
        { id: 'vinyl', name: 'Vinyl Collection', icon: '💿' },
        { id: 'spotify', name: 'Spotify Stats', icon: '🎧' },
    ];

    // Show sub-content if icon was clicked
    if (active === 'vinyl') {
        return <VinylCollection onBack={() => setActive(null)} />;
    }
    // onBack is a prop when back is clicked setActive is reset
    if (active === 'spotify') {
        return <SpotifyStats onBack={() => setActive(null)} />;
    }


    return (
        <div className="movies-container">
            <IconsGrid musicIcons={musicIcons}
                openWindows={[]}
                setOpenWindows={(windows) => {
                    // On double click change view, not window
                    const lastWindow = windows[window.length - 1];
                    setActive(lastWindow);
                }}
            />
        </div>
    );
}

export default MusicWindow;

