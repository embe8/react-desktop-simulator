import './Window.css';


export function Window({ icon, title, onClose, children }) {

    return (
        <div className="widow-container">
            <div className="window-header">
                <div className="window-title">
                    <span className="window-icon">{icon}</span>
                    {title}
                </div>
                <div className="window-controls">
                    <button className="window-btn minimize">_</button>
                    <button className="window-btn maximize">□</button>
                    <button className="window-btn close" onClick={onClose}>x</button>
                </div>
            </div>
            <div className="window-content">
                {children}
            </div>
        </div>
    );
}

export default Window;