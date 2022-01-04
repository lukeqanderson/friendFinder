import React, { Component } from "react";

// Creates a new compoenent that will check for errors and
// output an error message 
class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    // applies the componentDidCatch method to catch error and
    // adjust the hasError state to true
    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error: Component failed to load.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;