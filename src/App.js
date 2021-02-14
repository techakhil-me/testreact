import React from "react";
import "./App.css";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:['Pediatric Care','Generics','Some','Other','Categories'],
            added:[],
            isAdd: false,
            isEdit: false
        }
    }
    

    addItem(Value) {
            const added = [...this.state.added];
            added.push(Value);
            this.setState({
                added,
            }); 
    }

    deleteItem(value){
        const added = [...this.state.added];
        const updatedadded = added.filter(item => item !== value);
        this.setState({
            added: updatedadded
        })
    }

    updateInput(input){
        this.setState({newItem:input});
    }

    handleAdd = () => {
        this.setState({ isAdd: !this.state.isAdd });
        console.log('this')
    };

    handleEdit = () => {
        this.setState({ isEdit: !this.state.isEdit });
        console.log('this')
    };


    render() {
        return (
            <div className="App">
                <div className={this.state.isAdd ? "popup neu" : 'popup neu fade'}>
                    <button className="Close neu" onClick={() => this.handleAdd()}>Close</button>
                    {this.state.list.map((name, index) => {
                        if (this.state.added.indexOf(name)===-1){
                    return <button className="InfoAdd neu" onClick={() => this.addItem(name)}>+ {name}</button>;
                }
                return ''
                  })}
                    {/* <button className="InfoAdd neu">+ Pediatric Care</button> */}
                </div>

                <div className={this.state.isEdit ? "popup neu" : 'popup neu fade'}>
                    <button className="Close neu" onClick={() => this.handleEdit()}>Close</button>
                    {this.state.added.map((name, index) => {
                    return <button className="InfoAdd neu" onClick={() => this.deleteItem(name)}>- {name}</button>;
                  })}
                    {/* <button className="InfoAdd neu">+ Pediatric Care</button> */}
                </div>
                
                <div className="info neu">{this.state.added.join(', ')}</div>
                <button className="Add neu" onClick={() => this.handleAdd()}>Add</button>
                <button className="Edit neu" onClick={() => this.handleEdit()}>Edit</button>
            </div>

        );
    }


}

export default App;