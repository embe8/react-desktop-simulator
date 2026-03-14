import animeList from '../../data/anime.json';

function AnimeWindow() {
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