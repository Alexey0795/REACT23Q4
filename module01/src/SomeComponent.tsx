import React from 'react';

class SomeComponent extends React.Component {
  handleClick = (event) => {
    // You can use `this` here, and it will refer to MyClass instance
    // No need to bind `this` in the constructor
    console.log(this);
  };

  render() {
    // Referencing this.handleClick directly
    // It’s already bound to the MyClass instance
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

export default SomeComponent;
