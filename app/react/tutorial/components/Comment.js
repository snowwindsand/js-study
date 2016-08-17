import React, {
	PropTypes
} from 'react'

import marked from 'marked'

const Comment = ({
	author,
	children
}) => {
	return (
		<div className="comment">
		<h2 className="commentAuthor">
		{author}
		</h2>
		{marked(children.toString())}
		</div>)
}

export default Comment;