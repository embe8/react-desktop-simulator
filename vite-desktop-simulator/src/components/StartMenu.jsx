import './StartMenu.css';

function startMenu({ onClose, desktopIcons }) {

    return (
        <div className="start-container">
            {desktopIcons.map(icon => (
                <div 
                    key={icon.id}
                    className="start-content"
                    onClick={() => handleclick(icon.id)}
                >
                <div className="icon-image">{icon.icon}</div>
                <div className="icon-label">{icon.name}</div>
                </div>

            ))}
        </div>
    );

}
export default startMenu;
