import React from 'react';
import { Button } from 'react-bootstrap';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
          <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
          <Button bsSize="large" active>Button</Button>
      </div>
    );
  }
}

React.render(<Hello/>, document.getElementById('hello'));
