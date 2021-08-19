import React from 'react';
import './App.css';
import List from './components/List';

class App extends React.Component {
    state = {
        list: [
            {
                id: 1,
                amount: 0,
                deleted: false
            },
            {
                id: 2,
                amount: 0,
                deleted: false
            },
            {
                id: 3,
                amount: 0,
                deleted: false
            },
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <List list={this.state.list} />
            </div>
        );
    }
}
export default App;
