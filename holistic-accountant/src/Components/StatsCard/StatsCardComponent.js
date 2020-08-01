import React from 'react';
import {Statistic} from 'semantic-ui-react'
import './StatsCard.css';

function StatsCardComponent(props){
    return (
        <div className='StatsDiv'>
            <Statistic className='StatsContainer' size='huge' label= {props.label} value={props.value}/>    
        </div>
    )
}

export default StatsCardComponent;