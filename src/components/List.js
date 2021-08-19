import React, { Component } from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class List extends Component {
    render() {
        return this.props.list.map((list) => (
            <ListItem key={ list.id } list={list} />
            ));
    }
}

List.propTypes = {
    counters: PropTypes.array.isRequired
}
export default List;