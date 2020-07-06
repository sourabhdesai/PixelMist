import React, { useState, useEffect } from 'react';
import _ from "lodash";
// eslint-disable-next-line import/no-webpack-loader-syntax
import PixelGenerationWorker from 'workerize-loader!../utils/pixelgeneration.worker.js';
import './PixelCanvas.css'

const DEFAULT_SCALE = 1024;
const workerInstance = PixelGenerationWorker();
let workerReady = false;


export default function PixelCanvas({ width, height, red, green, blue }) {
    const [imageBase64Src, setImageBase64Src] = useState(null);
    const [workerIsReady, setWorkerIsReady] = useState(workerReady);
    const [renderedParams, setRenderedParams] = useState(null);
    const [paramsInProgress, setParamsInProgress] = useState(null);
    const [progress, setProgress] = useState(0.0);

    const paramsToRender = {
        scale: DEFAULT_SCALE,
        width, height, red, green, blue,
    };

    const paramsChanged = !_.isEqual(paramsToRender, renderedParams);
    const currParamsAreInProgress = _.isEqual(paramsToRender, paramsInProgress);

    useEffect(() => {
        workerInstance.onmessage = (message) => {
            if (_.isEqual(message.data, { type: "RPC", method: "ready" })) {
                setWorkerIsReady(true);
                workerReady = true;
            } else if (message.data.imageSource) {
                setImageBase64Src(message.data.imageSource);
                setRenderedParams(message.data.renderedParams);
                setParamsInProgress(null);
            } else if (message.data.totalProgress) {
                const newProgress = Math.round(message.data.totalProgress * 100);
                setProgress(newProgress);
            }
        };

        if (workerIsReady && paramsChanged && !currParamsAreInProgress) {
            setParamsInProgress(paramsToRender);
            workerInstance.calculateBase64(paramsToRender);
        }
    });

    const shouldShowLoading = _.isNil(imageBase64Src) || !workerIsReady || (paramsChanged && currParamsAreInProgress);
    const LoadingText = () => progress === 100 ? <p>Finishing Touches...</p> : <p>Loading {`${progress}%`}...</p>;

    if (shouldShowLoading) {
        return <LoadingText />
    } else {
        return (<img width={`${width}px`} height={`${height}px`} src={imageBase64Src} className="main-canvas" />);
    }
}
