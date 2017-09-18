import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { VictoryPie } from 'victory';

export default class ScorecardChart extends Component {
    render() {
         const {id} = this.props;
        return (
            <div id={id}>
            <VictoryPie />
            </div>
        );
    }
}

ScorecardChart.propTypes = {
    id: PropTypes.string
};