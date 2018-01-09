import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

var PROP_TEXT_HERE;

// No changes are needed above this line.

class MyApp extends React.Component {
  render() {
    return (
      <div>
        {/*
          Provide the necessary props for MyComponent below. Note
          that you can also define variables above the `return`
          line and pass them in, if that makes it easier to read.

          Components can be defined across multiple lines to be easier
          to read, as seen below.

          More complicated prop definitions, such as objects, are done with
          double-brackets: the below example provides complicatedProp as
          an object: `{ name: 'value' }`. The additional set of brackets
          indicates that this is a JSX value.

          <MyComponent complicatedProp={{ name: 'value' }} />

          Defining a function as a prop can be simplified using ES6 (modern JS syntax).
          A function has an argument and "function body". Below is a simple function
          that takes an argument and prints it to the console. Following it is the
          shorter ES6 syntax version:

          // Old version
          var logMe = function(thing) {
            console.log(thing)
          }

          // ES6
          var logMe = thing => console.log(thing)

          Passing a function like this as a prop should be easy. Define a function
          of your choice in the render function (above the return line) in MyApp,
          and pass the variable name as `myFunc` into `MyComponent` below.
        */}
        <MyComponent
          helloText="Hello!"
        />
      </div>
    )
  }
}

class MyComponent extends React.Component {
  render() {
    const { helloText, me, myFunc, textColor } = this.props;
    const { firstName, lastName } = me;
    const myFuncHandler = myFunc ? myFunc.bind(this) : () => {};
    return (
      <div>
        <h1 onClick={myFuncHandler} style={{color: textColor}}>{helloText}</h1>
        <h2>This component was created by {firstName} {lastName}</h2>
      </div>
    );
  }
}

MyComponent.propTypes = {
  me: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired,
  helloText: PropTypes.string.isRequired,
  myFunc: PropTypes.func,
  textColor: PropTypes.string,
}

// No changes are needed below this line.

const root = document.getElementById("root");
if (root) { ReactDOM.render(<MyApp />, root); }

export { MyApp, MyComponent };
