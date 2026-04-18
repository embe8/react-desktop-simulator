import { useState, useEffect } from 'react';

function AnimeWindow() {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/anime')
        .then(res => res.json())
        .then(data => setAnimeList(data))
        .catch(err => console.error('Error fetching anime list:', err));
    }, []);

    return (
        <div className="anime-container">
            {animeList.map(anime => (
                <div 
                    key={anime.animeId} 
                    className="anime-card">
                    <img src={anime.animeMedia} alt="image" />
                    <h3>{anime.animeName}</h3>
                    <h4>{anime.animeDate}</h4>
                    <p>{anime.animeMedia}</p>
                </div>
            ))}
        </div>
    );
}
export default AnimeWindow;