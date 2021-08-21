import React from 'react';
import './App.css';
import List from './components/List';
import TopCounter from './components/TopCounter';
import Reset from './components/Reset';

//List of items
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
            {
                id: 4,
                amount: 0,
                deleted: false
            },
        ]
    }

    //Incriments amount
    incrimentAmount = (id) => {
        this.setState({
            list: this.state.list.map(list => {
                if (list.id === id) {
                    list.amount++;
                }
                return list;
            })   });
    }

    //Decrement Amount but never below 0
    decrementAmount = (id) => {
        this.setState({
            list: this.state.list.map(list => {
                if (list.id === id) {
                    if (list.amount > 0) {
                        list.amount--;
                    }
                }
                return list;
            })
        })
    }

    //Delete Item
    delItem = (id) => {
        this.setState({ list: [...this.state.list.filter(list => list.id !== id)] });
    }

    //Rest Amount
    resetAmount = () => {
        const list = this.state.list.map(a => {
            a.amount = 0;
            return a;
        });
        this.setState({ list });
    }

    //Reset the List
    restartList = () => {
        window.location.reload();
    }


    render() {
        return (
            <div className="App">
                <TopCounter />
                <Reset resetAmount={this.resetAmount} restartList={this.restartList} />
                <List list={this.state.list} incrimentAmount={this.incrimentAmount} decrementAmount={this.decrementAmount}
                    delItem={this.delItem}
                />
            </div>
        );
    }
}
export default App;
