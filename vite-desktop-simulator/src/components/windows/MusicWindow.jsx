import { useState, useEffect } from 'react';

function MusicWindow({ setWindowTitle }) {
    const [active, setActive] = useState(null)

    const musicIcons = [
        { id: 'vinyl', name: 'Vinyl Collection', icon: '💿' },
        { id: 'spotify', name: 'Spotify Stats', icon: '🎧' },
    ];

    useEffect(() => {
        if (!setWindowTitle) return;
        if (active === 'vinyl') setWindowTitle('Vinyl Collection');
        else if (active === 'spotify') setWindowTitle('Spotify Stats');
        else setWindowTitle('Music');
    }, [active]);

    // Show sub-content if icon was clicked
    if (active === 'vinyl') {
        return <VinylCollection onBack={() => setActive(null)} />;
    }
    // onBack is a prop when back is clicked setActive is reset
    if (active === 'spotify') {
        return <SpotifyStats onBack={() => setActive(null)} />;
    }


    return (
        <div className="music-container">
            {musicIcons.map(icon => (
                <div
                    key={icon.id}
                    className="icons-container"
                    onDoubleClick={() => setActive(icon.id)}
                >
                    <div className='icon-image'>{icon.icon}</div>
                    <div className='icon-name'>{icon.name}</div>
                </div>
            ))}
        </div>
    );
}

export default MusicWindow;

import vinyls from '../../data/vinyl.json';

function VinylCollection({ onBack }) {
    return (
        <div className="vinyl-container">
            <button onClick={onBack}>⬅ Back</button>            
            {vinyls.map(vinyl => (
                <div 
                key={vinyl.vinylId} className="vinyl-card">
                <img src={vinyl.vinylMedia} alt="image" />
                <h3>{vinyl.vinylAlbum}</h3>
                <p>{vinyl.vinylArtist}</p>
                </div>
            ))
            }
        </div>
    );
}