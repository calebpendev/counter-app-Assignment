import React, { Component } from 'react'; 

class TopCounter extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
                    <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
                        {this.props.list.filter(l => l.amount > 0).length}
                    </span>
                    Items
                </div>
            </nav>
        );
    };
}

export default TopCounter;