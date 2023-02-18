import React, { Component } from 'react';

class Couter extends Component {
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags(){
        if (this.state.tags.length === 0) return <p>There is no tags!</p>
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }


    render() { 
        return(
            <div>
                {/* {this.renderTags()} */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.handleClick('test product')} 
                    className="btn btn-secondary btn-sm">
                Test
                </button>
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Couter;