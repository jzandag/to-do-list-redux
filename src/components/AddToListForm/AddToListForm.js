import React from 'react';

import classes from './AddToListForm.module.css'

const AddToListForm = (props) => {
    return (
        <div className={classes.AddToListForm}>
            <input type='text' onChange={props.change} value={props.value} />
            <button onClick={() =>{props.submit(props.value); props.click()}}>Add To-do List</button>
        </div>
    );
}

export default AddToListForm;
