import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {


    render() {
        return this.props.list.map((list) => (
            <ListItem key={list.id} list={list} incrimentAmount={this.props.incrimentAmount} decrementAmount={this.props.decrementAmount}
                delItem={this.props.delItem} getBadgeClass={ this.props.getBadgeClass }
            />
            ));
    }
}

export default List;