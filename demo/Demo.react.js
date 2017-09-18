import React, {Component} from 'react';
import {ScorecardChart} from '../src';

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>periscope-archetype Demo</h1>
                <ScorecardChart
                 id='chart'
                />
            </div>
        );
    }
}

export default Demo;
