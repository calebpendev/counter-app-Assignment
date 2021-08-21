import React, { Component } from 'react';

class Reset extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.resetAmount}>Reset Number</button>
				<button onClick={this.props.restartList}>Reset Array</button>
			</div>
        );
	}
}

export default Reset;