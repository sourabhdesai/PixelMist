import React from 'react';
import './Examples.css';
import Title from './Title';
import {adjustDimension} from "../utils/ScreenUtils";
import imageExamples from './imageExamples.json';

function ImageExample({filename, r, g, b, w, h}) {
    const baseImagePath = `${(window.location.hostname === 'localhost' ? '' : '/PixelMist')}/images/examples`;
    w = adjustDimension(w);
    h = adjustDimension(h);
    const queryParams = new URLSearchParams({r, g, b, w, h});
    return (
        <a href={`/PixelMist?${queryParams.toString()}`} key={filename}>
            <img alt={filename} id={filename} className="example-img" src={`${baseImagePath}/${filename}`} />
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
