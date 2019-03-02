import React from 'react';
import './RecFacial.css';

const RecFacial =({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
            <dix className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></dix>
            </div>
        </div>
    );
}

export default RecFacial;