import React from 'react';
import './Examples.css';
import {adjustDimension} from "../utils/ScreenUtils";
import imageExamples from './imageExamples.json';

function ImageExample({filename}) {
    const queryParams = new URLSearchParams({example: filename});
    return (
        <a href={`/PixelMist?${queryParams.toString()}`} key={filename}>
            <img alt={filename} id={filename} className="example-img" src={`/PixelMist/images/examples/${filename}`} />
        </a>
    );
}

export default function Examples() {
    return (
        <div>
            <p>A few examples to get you started<br/>Click image to open in editor</p>
            {imageExamples.map(ImageExample)}
        </div>
    );
}
