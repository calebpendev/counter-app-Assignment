import React, { Component } from 'react';

class Reset extends Component {
	render() {
		return (
			<div>
				<button className="btn btn-success m-2"
					onClick={this.props.resetAmount}
					disabled={this.props.list.amount === 0 ? "disabled" : ""}>
					<i className="fa fa-refresh" aria-hidden="true" />
				</button>
				<button className="btn btn-primary m-2"
					onClick={this.props.restartList}
					disabled={this.props.list.length !== 0 ? "disabled" : ""}>
					<i className="fa fa-recycle" aria-hidden="true" />
				</button>
			</div>
        );
	}
}

export default Reset;