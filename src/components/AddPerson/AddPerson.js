import React, { Component }from 'react';

import './AddPerson.css';

// this is typical use case of local UI state as opposed to using Redux
// here we combine local state with global Redux state:

class AddPerson extends Component {

    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value})
    }

    ageChangedHandler = (event) =>  {
        this.setState({age: event.target.value})
    }

    render () {
        return (
            <div className="AddPerson">
                <input
                    type='text'
                    placeholder='Name'
                    onChange={this.nameChangedHandler}
                    value={this.state.name} />
                <input
                    type='text'
                    placeholder='Age'
                    onChange={this.ageChangedHandler}
                    value={this.state.age} />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }   
}

export default AddPerson