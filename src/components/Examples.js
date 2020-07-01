import React from 'react';
import './Examples.css';
import Title from './Title';
import {adjustDimension} from "../utils/ScreenUtils";
import imageExamples from './imageExamples.json';

function ImageExample({filename, r, g, b, w, h}) {
    w = adjustDimension(w);
    h = adjustDimension(h);
    const queryParams = new URLSearchParams({r, g, b, w, h});
    return (
        <a href={`/?${queryParams.toString()}`}>
            <img alt={filename} id={filename} className="example-img" src={`/images/examples/${filename}`} />
        </a>
    );
}

export default function Examples() {
    return (
        <div>
            <Title />
            <p>A few examples to get you started<br/>Click image to open in editor</p>
            {imageExamples.map(ImageExample)}
        </div>
    );
}
