import React, {
	Component
} from 'react'

class TestEs6 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<div>
			<button onClick={this.handleClick}>
              Click me! Number of clicks: {this.state.count}
            </button>
            <button onClick={this.props.insideClick}>
            	click this,outside process!
            </button>
            </div>
		);
	}
}

export default TestEs6;