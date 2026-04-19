import { useState, useEffect } from 'react';

function MoviesWindow() {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/movies')
        .then(res => res.json())
        .then(data => setMoviesList(data))
        .catch(err => console.error('Error fetching movies:', err));
    }, [])

    return (
        <div className="movies-container">
            {moviesList.map(movie => (
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