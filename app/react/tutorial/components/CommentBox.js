import React, {
	PropTypes,
	Component
} from 'react'

import CommentForm from './CommentForm'
import CommentList from './CommentList'

/*const CommentBox = ({
	data
}) => {
	return (
		<div className="commentBox">
		<h1>Comments</h1>
		<CommentList data={data} />
		<CommentForm />
		</div>
	)
}

export default CommentBox;*/

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className="commentBox">
		<h1>Comments</h1>
		<CommentList data={this.state.data} />
		<CommentForm />
		</div>
		)
	}
}

export default CommentBox;