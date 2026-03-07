import movies from '../../data/movies.json';

function MoviesWindow() {

    return (
        <div className="movies-container">
            {movies.map(movie => (
                <div
                    key={movie.movieId} className='movie-card'>
                    <img src={movie.movieMedia} alt='image' />
                    <h3>{movie.movieName}</h3>
                    <h4>{movie.movieDate}</h4>
                    <p>{movie.movieNotes}</p>
                </div>
            ))}
        </div>
    );
}
export default MoviesWindow;