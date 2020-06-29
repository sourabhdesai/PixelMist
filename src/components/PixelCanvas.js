import React from 'react';
import './PixelCanvas.css'
import {BitMap} from 'glaciall-bitmap';
import {ExpressionPixelGenerator} from '../utils/PixelGenerator';

const DEFAULT_SCALE = 1000;


/**
 * Taken from here: https://stackoverflow.com/a/8468879
 */
function toHexValue(r, g, b) {
    return (r << 16) | (g << 8) | b;
}

function updateCanvas(width, height, rGenerator, gGenerator, bGenerator) {
    var bmp = new BitMap();
    bmp.create(width, height, 0);

    const rPixels = rGenerator.generatePixels(width, height, DEFAULT_SCALE).convertResultToRgbScale();
    const gPixels = gGenerator.generatePixels(width, height, DEFAULT_SCALE).convertResultToRgbScale();
    const bPixels = bGenerator.generatePixels(width, height, DEFAULT_SCALE).convertResultToRgbScale();

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const r = rPixels[x][y];
            const g = gPixels[x][y];
            const b = bPixels[x][y];
            bmp.setPixel(x, y, toHexValue(r, g, b));
        }
    }

    return bmp.toBase64();
}

export default function PixelCanvas({width, height, red, green, blue}) {
    const rGenerator = new ExpressionPixelGenerator(red);
    const gGenerator = new ExpressionPixelGenerator(green);
    const bGenerator = new ExpressionPixelGenerator(blue);
    console.log({width, height, rGenerator, gGenerator, bGenerator});
    const imageBase64Str = updateCanvas(width, height, rGenerator, gGenerator, bGenerator);
    return (<img width={`${width}px`} height={`${height}px`} src={imageBase64Str} className="main-canvas"></img>);
};
