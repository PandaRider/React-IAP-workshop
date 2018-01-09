import React, { Component } from 'react';
// import classnames from 'classnames';
import './03-styles.css';

class App extends Component {
  render() {
    const color = "red";
    /*
     * Define a variable that calls the classnames
     * function with the following classes:
     *   - 'header'
     *   - 'text-red', if color === 'red'
     *
     * Pass this variable as the class of the h1 tag below.
     */

    /*
     * Define a style object with the following keys and
     * values:
     *   - 'fontFamily', set to 'sans-serif'
     *   - 'fontWeight', set to 'bold'
     *   - 'lineHeight', set to 1.5
     *   - 'color', set to the variable color
     * Pass this style object as the style of the p tag below.
     */

     /*
      * Finally, fix the following classNames function below,
      * so that the properties below are true:
      *   - bg-red is true
      *   - largePadding is true _if_ style.lineHeight is greater than 1
      */

    return (
      <div>
        <h1>Welcome to React</h1>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
