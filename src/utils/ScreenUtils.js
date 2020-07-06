const EXPECTED_WIDTH = 1440;

/**
 * Many images render best with a dimension that is a power of 2.
 * Avoids aliasing. Especially true for the default landing page image.
 */
export function powerOf2ScreenWidth() {
    const screenWidth = window.screen.width;
    let power = 4;
    while (power < 12 && (2 ** power) < screenWidth) {
        power++;
    }
    const finalPower = Math.max(8, power - 1);
    return 2 ** finalPower;
}

export function adjustDimension(dimensionLength) {
    const screenAdjustmentRatio = window.screen.width / EXPECTED_WIDTH;
    return Math.round(dimensionLength * screenAdjustmentRatio);
}
