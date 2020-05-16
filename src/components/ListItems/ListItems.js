import React from 'react';

import classes from './ListItems.module.css'
import ListItem from './ListItem/ListItem';

const ListItems = (props) => {
    let list = null
    if(props.items.length === 0){
        list = <p>No tasks currently assigned</p>
    }
    else{
        list = props.items.map(item => {
            return <ListItem 
                key={item.id}
                status={item.status} 
                name={item.name} 
                onRemove={() => props.onRemove(item.id)}
                onStatus={() => props.onStatus(item.id)}
                />
        })
    }
    return (
        <div className={classes.ListItems}>
            {list}
        </div>
    );
}

export default ListItems;
