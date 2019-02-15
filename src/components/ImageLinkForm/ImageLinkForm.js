import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3">
                {'Insert an image to recognize faces!'}
            </p>
            <div className="center">
                <div className="center  pa4 br3 shadow-5 form">
                    <input className="w-70 f4 pa2 center" type="text"/>
                    <button className="w-30 grow f4 link ph3 pv2 dib black bg-light">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm