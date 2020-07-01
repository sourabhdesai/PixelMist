import _ from "lodash";

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

    generatePixels(widthPixels, heightPixels, scale) {
        scale = scale || 1;
        var min = Infinity;
        var max = -Infinity;

        const pixelGrid = _.times(widthPixels, x => {
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

        return new PixelGeneratorResult(pixelGrid, min, max);
    }

    generate(x, y, w, h) {
        throw new Error("Must Implement");
    }
}

export class ExpressionPixelGenerator extends PixelGenerator {
    constructor(expressionString) {
        super();
        this.expressionFunc = eval(`((x, y, w, h) => ${expressionString})`);
    }

    generate(xInput, yInput, width, height) {
        return this.expressionFunc(xInput, yInput, width, height);
    }
}
