import React from 'react';
import {Statistic} from 'semantic-ui-react'

function StatsCardComponent(props){
    return (
        <Statistic size='huge' label= {props.label} value={props.value}/>
    )
}

export default StatsCardComponent;