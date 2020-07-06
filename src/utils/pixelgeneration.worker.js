// src/worker.js
import _ from "lodash";
import { BitMap } from 'glaciall-bitmap';

const PROGRESS_UPDATE_INTERVAL = 5;

export function clamp(n, min, max) {
    return Math.min(Math.max(n, min), max);
}

/**
 * Interpolate a given number n to be between -1 and 1
 * Partially take from here: https://stats.stackexchange.com/a/70807
 * @param {Number} n - number to normalize
 * @param {Number} minFrom - Minimum possible value of n
 * @param {Number} maxFrom - Maximum possible value of n
 * @param {Number} minTo - Minimum desired output
 * @param {Number} maxTo - Maximum desired output
 */
export function linearInterpolate(n, minFrom, maxFrom, minTo, maxTo) {
    const unitNorm = (n - minFrom) / (maxFrom - minFrom);
    return clamp(minTo + (unitNorm * (maxTo - minTo)), minTo, maxTo);
}

export class PixelGeneratorResult {
    constructor(pixelGrid, min, max) {
        this.pixelGrid = pixelGrid;
        this.min = min;
        this.max = max;
    }

    convertResultToRgbScale() {
        return this.pixelGrid.map(row => {
            return row.map(pixel => {
                return clamp(Math.round(linearInterpolate(pixel, this.min, this.max, 0, 255)), 0, 255);
            });
        });
    }
}

// Abstract class - do not instantiate. Implementors must override generate(x, y) method
export class PixelGenerator {

    generatePixels(widthPixels, heightPixels, scale, progressCb) {
        scale = scale || 1;
        var min = Infinity;
        var max = -Infinity;

        const pixelGrid = _.times(widthPixels, x => {
            progressCb(x / widthPixels);
            return _.times(heightPixels, yInverse => {
                const y = heightPixels - 1 - yInverse;
                const xInterp = linearInterpolate(x, 0, widthPixels, -scale, scale);
                const yInterp = linearInterpolate(y, 0, heightPixels, -scale, scale);
                let pixelVal = this.generate(xInterp, yInterp, widthPixels, heightPixels);
                pixelVal = _.isNaN(pixelVal) ? 0 : pixelVal;
                min = Math.min(pixelVal, min);
                max = Math.max(pixelVal, max);
                return pixelVal;
            });
        });
        progressCb(1.0);

        return new PixelGeneratorResult(pixelGrid, min, max);
    }

    generate(x, y, w, h) {
        throw new Error("Must Implement");
    }
}

class ExpressionPixelGenerator extends PixelGenerator {
    constructor(expressionString) {
        super();
        this.expressionFunc = eval(`((x, y, w, h) => ${expressionString})`);
    }

    generate(xInput, yInput, width, height) {
        return this.expressionFunc(xInput, yInput, width, height);
    }
}

/**
 * Taken from here: https://stackoverflow.com/a/8468879
 */
function toHexValue(r, g, b) {
    return (r << 16) | (g << 8) | b;
}

function gridToBase64(width, height, rPixels, gPixels, bPixels) {
    var bmp = new BitMap();
    bmp.create(width, height, 0);

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

function rgbChannelProgressCbGenerator() {
    let channelProgress = {};
    return (channel) => {
        channelProgress[channel] = channelProgress[channel] || 0.0;
        return (progress) => {
            channelProgress[channel] = progress;
            const totalProgress = _.sum(_.values(channelProgress)) / 3.0;
            if ((Math.round(totalProgress * 100) % PROGRESS_UPDATE_INTERVAL) === 0) {
                postMessage({totalProgress});
            }
        };
    };
}

export const calculateBase64 = ({ scale, width, height, red, green, blue }) => {
    const progressCbGenerator = rgbChannelProgressCbGenerator();
    const rPixels = new ExpressionPixelGenerator(red).generatePixels(width, height, scale, progressCbGenerator('r'))
        .convertResultToRgbScale();
    const gPixels = new ExpressionPixelGenerator(green).generatePixels(width, height, scale, progressCbGenerator('g'))
        .convertResultToRgbScale();
    const bPixels = new ExpressionPixelGenerator(blue).generatePixels(width, height, scale, progressCbGenerator('b'))
        .convertResultToRgbScale();
    const base64Str = gridToBase64(width, height, rPixels, gPixels, bPixels);

    postMessage({
        imageSource: base64Str,
        renderedParams: { scale, width, height, red, green, blue },
    });
}
