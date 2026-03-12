import concerts from '../../data/concerts.json';

function ConcertsWindow() {

    return (
        <div className="concerts-container">

            {concerts.map(concert => (
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