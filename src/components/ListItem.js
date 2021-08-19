import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <p>{ this.props.list.id}</p>
        );
    }
}

export default ListItem;