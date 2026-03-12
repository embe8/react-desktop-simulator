import games from '../../data/games.json';

function GamesWindow() {

    return (
        <div className="games-container">
            {games.map(game => (
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