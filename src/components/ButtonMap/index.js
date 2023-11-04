import React from 'react';
import './styles.css';

function ButtonMap({ icon, position, isClickable, onClick }) {
    const handleClick = () => {
        if (isClickable && onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`ButtonMap ${isClickable ? 'clickable' : 'unclickable'} ${!isClickable ? 'disabled' : ''}`}
            style={{ position: 'absolute', ...position }}
            onClick={handleClick}
            disabled={!isClickable}
        >
            <span className="icon">{icon}</span>
        </button>
    );
}

export default ButtonMap;
