import React, { Component } from 'react';

class ListItem extends Component {

    incrimentAmount = (e) => {
    }

    render() {
        const { id } = this.props.list;
        return (
            <div>
            <div className="row">
                    <div className="col-md-4">
                        <span style={{ fontSize: 24 }} className={this.getBadgeClass()}>
                        {this.props.list.amount === 0 ? "Zero" : this.props.list.amount }
                        </span>
                    </div>
                    <div className="col-md-4">
                    <button className="btn btn-secondary"
                        onClick={this.props.incrimentAmount.bind(this, id)}>
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                    </button>
                    <button className="btn btn-info m-2"
                        onClick={this.props.decrementAmount.bind(this, id)}
                        disabled={this.props.list.amount === 0 ? "disabled" : ""}  >
                        <i className="fa fa-minus-circle" aria-hidden="true" />
                    </button>
                    <button className="btn btn-danger"
                        onClick={this.props.delItem.bind(this, id)}>
                        <i className="fa fa-trash-o" aria-hidden="true" />
                    </button>
                </div>
            </div>
            </div>
                
        );
    }

    //Format the Amount Display
    getBadgeClass = () => {
        let classes = "badge m-2 badge-";
        classes += this.props.list.amount === 0 ? "warning" : "primary";
        return classes;
    };
}




export default ListItem;