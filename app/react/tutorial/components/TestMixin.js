import React, {
	Component
} from 'react'
import {
	mixin
} from 'core-decorators'

const PopupContainer = (Wrapper) =>
	class WrapperComponent extends Component {
		componentWillMount() {
			this.intervals = [];
		}
		setIntervalmixin() {
			this.intervals.push(setInterval.apply(null, arguments));
		}
		componentWillUnmount() {
			this.intervals.map(clearInterval);
		}

		render() {
			return <Wrapper {...this.props} />
		}
	}

/*var SetIntervalMixin = {
	componentWillMount: function() {
		this.intervals = [];
	},
	setIntervalmixin: function() {
		this.intervals.push(setInterval.apply(null, arguments));
	},
	componentWillUnmount: function() {
		this.intervals.map(clearInterval);
	}
};*/

//@mixin(SetIntervalMixin)
class TickTock extends Component {
	constructor() {
		super();
		//this.mixins = [SetIntervalMixin];
		this.state = {
			seconds: 0
		};
	}

	componentDidMount() {
		this.setIntervalmixin(this.tick, 1000);
	}

	tick() {
		this.setState({
			seconds: this.state.seconds + 1
		});
	}

	render() {
		return (
			<p>
			Running for {this.state.seconds}
			</p>
		)
	}
}

//TickTock.mixins = [SetIntervalMixin];


export default PopupContainer(TickTock);