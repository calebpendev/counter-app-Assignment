import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {

    incrimentAmount = (e) => {
    }

    render() {
        const { id } = this.props.list;
        return (
            <div>
                <p>
                    {this.props.list.amount} <button onClick={this.props.incrimentAmount.bind(this, id)} style={ plusStyle }>Plus</button>
                    <button onClick={this.props.decrementAmount.bind(this, id)} style={minusStyle}>Minus</button>
                    <button onClick={ this.props.delItem.bind(this, id)} style={deleteStyle}>X</button>
                </p>
                
            </div>
        );
    }
}

const plusStyle = {
    background: 'gray',
    padding: '10px 10px',
    //border: 'none',
    //borderRadius: '25%',
    cursor: 'pointer',

}

const minusStyle = {
    background: 'Aquamarine',
    padding: '10px 10px'
}

const deleteStyle = {
    background: 'red',
    padding: '10px 10px'
}

// Prop Types
ListItem.propTypes = {
    listItem: PropTypes.object.isRequired
}

export default ListItem;