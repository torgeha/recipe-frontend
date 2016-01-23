import React from 'react';
import { Button } from 'react-bootstrap';

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome to my routed page</h1>
                <p>Have a good time.</p>
            </div>
        );
    }

export default Hello;
//React.render(<Hello/>, document.getElementById('hello'));
