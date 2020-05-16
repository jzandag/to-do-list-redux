import React from 'react';

import classes from './ListItem.module.css';

const ListItem = (props) => {
    let inputclasses = [classes.ListItem]
    let icon = null
    if(props.status === 0){
        icon = <i className='fa fa-check'></i>
        inputclasses.push(classes.Todo)
    }else{
        icon = <i className='fa fa-close'></i>
        inputclasses.push(classes.Done)
    }
    return (
        <div className={inputclasses.join(' ')}>
            <a onClick={props.onStatus}>{icon} {props.name}</a>
            <button onClick={props.onRemove}>X</button>
        </div>
    );
}

export default ListItem;
