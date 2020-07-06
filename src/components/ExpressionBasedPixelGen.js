import React from 'react';
import _ from 'lodash';
import { useForm } from "react-hook-form";
import {
    useHistory,
    useLocation,
    Link
} from "react-router-dom";
import { adjustDimension, powerOf2ScreenWidth } from '../utils/ScreenUtils';
import imageExamples from './imageExamples.json';
import './Common.css';
import './ExpressionBasedPixelGen.css'
import PixelCanvas from './PixelCanvas';

const DEFAULT_SIDE_LENGTH = Math.min(1024, powerOf2ScreenWidth());

const DEFAULT_QUERY_PARAMS = {
    r: "(Math.hypot(Math.abs(x), Math.abs(y)) + (Math.abs(x) & Math.abs(y))) / 2",
    g: "Math.tanh(Math.abs(x) & Math.abs(y))",
    b: "Math.abs(x) ^ Math.abs(y)",
    h: DEFAULT_SIDE_LENGTH,
    w: DEFAULT_SIDE_LENGTH,
};

function getExampleParams(exampleFilename) {
    const exampleObj = _.find(imageExamples, {filename: exampleFilename});
    if (exampleObj) {
        exampleObj.w = Math.min(exampleObj.w, adjustDimension(exampleObj.w));
        exampleObj.h = Math.min(exampleObj.h, adjustDimension(exampleObj.h));
    }
    return exampleObj ? _.pick(exampleObj, ['r', 'g', 'b', 'w', 'h', 'powerOf2Dim']) : null;
}

export default function ExpressionBasedPixelGen() {
    console.log("Called ExpressionBasedPixelGen");
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit } = useForm();

    const givenSearchParams = new URLSearchParams(location.search);
    const exampleFilename = givenSearchParams.get('example') || null;
    const exampleParams = exampleFilename ? getExampleParams(exampleFilename) || {} : {};
    const givenSearchParamsObj = Object.fromEntries(givenSearchParams.entries());
    const queryParamsAfterDefaults = _.defaults(_.cloneDeep(givenSearchParamsObj), exampleParams, DEFAULT_QUERY_PARAMS);

    // If there is a param called powerOf2Dim, default w & h to be the best power of 2
    if (queryParamsAfterDefaults.powerOf2Dim === 'true' || queryParamsAfterDefaults.powerOf2Dim === true) {
        queryParamsAfterDefaults.w = powerOf2ScreenWidth();
        queryParamsAfterDefaults.h = powerOf2ScreenWidth();
        console.log({queryParamsAfterDefaults});
        delete queryParamsAfterDefaults.powerOf2Dim;
    }

    const cleanedParams = _.pick(queryParamsAfterDefaults, Object.keys(DEFAULT_QUERY_PARAMS));

    let shouldUpdateQueryParams = !_.isEqual(cleanedParams, givenSearchParamsObj);
    if (shouldUpdateQueryParams) {
        history.push({
            pathname: location.pathname,
            search: new URLSearchParams(cleanedParams).toString()
        });
        return null;
    }

    const {r, g, b, w, h} = queryParamsAfterDefaults;

    function onFormSubmit(formData) {
        const newQueryParams = _.pick(formData, Object.keys(DEFAULT_QUERY_PARAMS));
        history.push({
            pathname: location.pathname,
            search: new URLSearchParams(newQueryParams).toString()
        });
    }

    return (
        <div>
            <div className="container">
                <PixelCanvas width={Number(w)} height={Number(h)} red={r} green={g} blue={b}></PixelCanvas>
                <form className="expression-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <input type="number" name="w" min="1" placeholder="Width in pixels" defaultValue={Number(w)} ref={register({ required: true })} />
                    <input type="number" name="h" min="1" placeholder="Height in pixels" defaultValue={Number(h)} ref={register({ required: true })} />
                    <br />
                    <input type="input" name="r" placeholder="Red Expression" defaultValue={r} ref={register({ required: true })} className="red" />
                    <br />
                    <input type="input" name="g" placeholder="Green Expression" defaultValue={g} ref={register({ required: true })} className="green" />
                    <br />
                    <input type="input" name="b" placeholder="Blue Expression" defaultValue={b} ref={register({ required: true })} className="blue" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <div className="footer">
                    <Link to="/about"><h2 className="footer-link">About</h2></Link>
                    <Link to="/examples"><h2 className="footer-link">Examples</h2></Link>
                </div>
            </div>
        </div>
    );
};
