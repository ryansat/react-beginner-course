import React, { Component } from 'react';

class Counter extends Component {
    renderTags(){
        if (this.state.tags.length === 0) return <p>There is no tags!</p>
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    handleClick = (product) => {
        console.log(product);
        this.setState({count: this.state.value+1});
    }


    render() { 
        const {onIncrement, counter, onDelete, onDecrement} = this.props;
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => onIncrement(counter)} 
                    className="btn btn-secondary btn-sm">
                Add
                </button>
                <button 
                    onClick={() => onDecrement(counter)} 
                    className="btn btn-secondary btn-sm m-2">
                Remove
                </button>
                <button onClick={() => onDelete(counter.id)} 
                className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;