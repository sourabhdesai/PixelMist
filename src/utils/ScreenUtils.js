
const EXPECTED_WIDTH = 1440;

export function adjustDimension(dimensionLength) {
    const screenAdjustmentRatio = window.screen.width / EXPECTED_WIDTH;
    return Math.round(dimensionLength * screenAdjustmentRatio);
}
