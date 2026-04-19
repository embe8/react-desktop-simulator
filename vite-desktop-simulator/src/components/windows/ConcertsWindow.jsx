import { useState, useEffect } from 'react';

function ConcertsWindow() {
    const [concertsList, setConcertsList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/concerts')
        .then(res => res.json())
        .then(data => setConcertsList(data))
        .catch(err =>console.error('Error fetching concerts list:', err));
    }, []);

    return (
        <div className="concerts-container">

            {concertsList.map(concert => (
                <div key={concert.id} className="conert-container">
                    <img src={concert.concertMedia} alt='image' />
                    <h3>{concert.concertName}</h3>
                    <h4>{concert.concertDate}</h4>
                    <p>{concert.concertNotes}</p>
                </div>
            ))}
        </div>
    );
}
export default ConcertsWindow;