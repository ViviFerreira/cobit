import React from 'react';
import './styles.css';

function ButtonMap({ icon, onClick, position, isClickable }) {
    return (
        <div className='ButtonMap' style={{ position: 'absolute', ...position }}>
            <div
                className="button-3d"
               
            >{icon}</div>
        </div>
    );
}



export default ButtonMap;
