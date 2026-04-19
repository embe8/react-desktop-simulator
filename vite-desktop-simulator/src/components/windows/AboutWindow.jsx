import { useState, useEffect } from 'react';

function AboutWindow() {
    const [aboutList, setAboutList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/about')
        .then(res => res.json())
        .then(data => setAboutList(data))
        .catch(err => console.error('Error fetching about list:', err))
    }, []);

    return (
        <div className="about-container">
                {aboutList.map(about => (
                    <div key={about.aboutId}
                    className="about-card">
                        <img src={about.aboutMedia} alt="image" />
                        <h4>{about.aboutName}</h4>
                        <p>{about.aboutNotes}</p>
                    </div>
                ))}
        </div>
    );
}

export default AboutWindow;