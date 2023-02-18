import React, { Component } from 'react';

class Couter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags(){
        if (this.state.tags.length === 0) return <p>There is no tags!</p>
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    handleClick = (product) => {
        console.log(product);
        this.setState({count: this.state.count+1});
        console.log('Clicked!', this.state.count);
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
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Couter;