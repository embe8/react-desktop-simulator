export function Window() {

    return (
        <div className="widow-container">
            <div className="window-header">
                <div className="window-title">
                    <span className="window-icon">dummy window icon</span>
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