import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

export default class MyComponent extends React.Component {
  constructor() {
    super();
    // Set up the state of this component in the following
    // structure:
    //   - count should default to 0
    //   - obj should be an object, with:
    //     - age set to 9
    //     - favoriteNumbers set to an array: [4, 8, 15, 16, 23, 42]
    //     - id set to "MyObj"
    //     - updated set to false
    //   - set as the array [1, 2, 3]

    // Re-bind the following three functions explicitly
    // to the context this:
    //   - addToSet
    //   - increment
    //   - updateObj
  }

  // Increment the count value from state,
  // and set it as the new value of count.
  increment() {
  }

  // Update the implementation of updateObj
  // to ensure that the reference of obj in state
  // is updated.
  updateObj() {
    const { obj } = this.state;

    obj.age += 1;
    obj.favoriteNumbers.push(69);
    obj.updated = true;

    this.setState({ obj: obj });
  }

  // Update the implementation of addToSet
  // to ensure that the reference of the array in state
  // is updated.
  addToSet() {
    const { set } = this.state;
    set.push(45);
    this.setState({ set: set });
  }

  render() {
    // Pull the following variables out of state:
    //   - count
    //   - inside of obj:
    //     - age
    //     - favoriteNumbers
    //     - id
    //     - updated
    //   - set

    // - Add id from state inside of h2
    // - Add "My favorite numbers: " with the array myFavoriteNumbers
    //   (joined by a comma and a space) to h3
    // - Add "Set: " with the array set (joined by a comma and a space)
    //   to h4
    // - Add a button with the onClick property `this.increment`.
    //   Give it the className "increment". You can choose the text,
    //   but you might prefer something like "Add 1 to " and the count
    //   variable.
    // - Add a button with the onClick property `this.updateObj`.
    //   Give it the className "updateObj". You can choose the text,
    //   but you might prefer something like "Update object".
    // - Add a button with the onClick property `this.addToSet`.
    //   Give it the className "addToSet". You can choose the text,
    //   but you might prefer something like "Add to set".

    return (
      <div>
        <h2>{id}</h2>
        <h3>My favorite numbers: {favoriteNumbers.join(', ')}</h3>
        <h4>Set: {set.join(', ')}</h4>
        <button onClick={this.increment} className="increment">
          Add 1 to {count}
        </button>
        <button onClick={this.updateObj} className="updateObj">
          Update object
        </button>
        <button onClick={this.addToSet} className="addToSet">
          Add to set
        </button>
      </div>
    )
  }
}

const root = document.getElementById('root');
if ( root ) { ReactDOM.render(<MyComponent />, root); }
registerServiceWorker();
