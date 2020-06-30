import React from 'react';
import {Link} from "react-router-dom";
import './Common.css';
import './Title.css';

export default function Title() {
    return (<h1 className="pixel-mist-title"><Link to="/">PIXEL MIST</Link></h1>);
}