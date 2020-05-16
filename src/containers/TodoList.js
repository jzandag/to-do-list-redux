import React, { Component } from 'react';

import classes from './TodoList.module.css'
import {connect} from 'react-redux'
import ListItems from '../components/ListItems/ListItems'
import AddToListForm from "../components/AddToListForm/AddToListForm";

import * as actionTypes from '../reducers/actions'

class TodoList extends Component {
    state= {
        todoForm: ''
    }

    onChangeHandler = (e) => {
        this.setState({todoForm: e.target.value})
    } 
    onClickHandler =() => {
        this.setState({todoForm: ''})
    }
    render() {
        return (
            <div className={classes.TodoList}>
                <h1>To-Do list</h1>
                <ListItems items={this.props.list} onStatus={this.props.onChangeStatus} onRemove={this.props.onRemoveList} />
                <AddToListForm 
                    click={this.onClickHandler}
                    submit={this.props.onAddList} 
                    value={this.state.todoForm}
                    change={this.onChangeHandler}
                    />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddList: (name) => dispatch({type: actionTypes.ADD_ITEM, name}),
        onRemoveList: (id) => dispatch({type: actionTypes.REMOVE_ITEM, id}),
        onChangeStatus: (id) => dispatch({type: actionTypes.STATUS, id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
