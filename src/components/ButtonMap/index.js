import React from 'react';
import './styles.css';

function ButtonMap({ icon, onClick, position }) {
    return (
        <div className='ButtonMap' style={{ position: 'absolute', ...position }}>
            <a className="button-3d" onClick={onClick}>
                {icon} 
            </a>
        </div>
    );
}

export default ButtonMap;
