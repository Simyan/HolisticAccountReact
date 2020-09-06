import React from 'react';
import {Statistic} from 'semantic-ui-react'
import './StatsCard.css';

function StatsCardComponent(props){
    return (
        <div className = 'newStatsContainer'>
            <span className = 'statsValue'>{props.value}</span>
            <span className = 'statsLabel'>{props.label}</span>
        </div>
    )
}

export default StatsCardComponent;