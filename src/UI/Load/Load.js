import React from 'react';
import './load.css';

const Load = ({ width }) => {
    return (
        <div className='load'>
            <div className='load_finish' style={{width: `${width}%`}}></div>
        </div>
    )
}

export default Load;