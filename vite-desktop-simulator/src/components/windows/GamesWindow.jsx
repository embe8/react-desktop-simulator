import { useState, useEffect } from 'react';

function GamesWindow() {
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/games')
        .then(res => res.json())
        .then(data => setGamesList(data))
        .catch(err => console.error('Error fetching games:', err))

    }, [])

    return (
        <div className="games-container">
            {gamesList.map(game => (
                <div key={game.gameId}
                    className="game-card">
                    <img src={game.gameMedia} alt='image'/>
                    <h3>{game.gameName}</h3>
                    <h4>{game.gameDate}</h4>
                    <p>{game.gameNotes}</p>
                </div>
            ))}
        </div>
    );
}
export default GamesWindow;