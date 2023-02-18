import React, { Component } from 'react'
class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <h1>{this.props.totalCounters}</h1>
            </nav>
        );
    }
}
 
export default Navbar;