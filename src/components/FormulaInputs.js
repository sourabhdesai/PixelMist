import React from 'react';
import {Component} from 'react';

class FormulaInputs extends Component {
    static getDerivedStateFromProps(props, state) {
        return {
            rExpression: props.rExpression,
            gExpression: props.gExpression,
            bExpression: props.bExpression,
        };
    }

    render() {
        return null;
    }
}

export default FormulaInputs;
