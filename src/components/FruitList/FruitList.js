import React, { Component } from 'react';
import FruitItem from '../FruitItem/FruitItem.js';
import { connect } from 'react-redux';
import axios from 'axios';

class FruitList extends Component {
    componentDidMount() {
        this.getFruit();
    }

    getFruit() {
       
            this.props.dispatch({type: 'FETCH_FRUITS'});
    }

    render() {
        return (
            <ul>
                {this.props.reduxState.basketReducer.map((basketItem) => {
                    return (
                        <FruitItem key={basketItem.id} basketItem={basketItem} />
                    );
                })}
            </ul>
        )
    }
}
// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FruitList);