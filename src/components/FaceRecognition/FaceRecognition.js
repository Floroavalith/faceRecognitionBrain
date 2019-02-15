import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ( {imageUrl }) => {
    return(
        <div className='center ma'>
            <div>
                <img id='inputImage' className='FaceRecognitionImg' alt='' src={imageUrl}></img>
            </div>
        </div>
    );
}

export default FaceRecognition;