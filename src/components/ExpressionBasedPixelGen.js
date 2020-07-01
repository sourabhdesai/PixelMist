import React from 'react';
import _ from 'lodash';
import { useForm } from "react-hook-form";
import {
    useHistory,
    useLocation,
    Link
  } from "react-router-dom";
import {adjustDimension} from '../utils/ScreenUtils';
import './Common.css';
import './ExpressionBasedPixelGen.css'
import Title from './Title';
import PixelCanvas from './PixelCanvas';

const DEFAULT_SIDE_LENGTH = Math.min(1000, adjustDimension(1000));

const DEFAULT_QUERY_PARAMS = {
    r: "(Math.hypot(Math.abs(x), Math.abs(y)) + (Math.abs(x) & Math.abs(y))) / 2",
    g: "Math.tanh(Math.abs(x) & Math.abs(y))",
    b: "Math.abs(x) ^ Math.abs(y)",
    h: DEFAULT_SIDE_LENGTH,
    w: DEFAULT_SIDE_LENGTH,
};

export default function ExpressionBasedPixelGen() {
    console.log("Called ExpressionBasedPixelGen");
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit } = useForm();

    const givenSearchParams = new URLSearchParams(location.search);
    const givenSearchParamsObj = Object.fromEntries(givenSearchParams.entries());
    const queryParamsAfterDefaults = _.mapValues(DEFAULT_QUERY_PARAMS, (value, key) => {
        return givenSearchParams.get(key) || value;
    });

    let shouldUpdateQueryParams = !_.isEqual(queryParamsAfterDefaults, givenSearchParamsObj);
    if (shouldUpdateQueryParams) {
        history.push({
            pathname: location.pathname,
            search: new URLSearchParams(queryParamsAfterDefaults).toString()
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
            <Title />
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
