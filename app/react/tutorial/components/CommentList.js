import React from 'react'
import Comment from './Comment'

const CommentList = ({
	data
}) => {
	var commentNodes = data.map((comment) => {
		return (
			<Comment author={comment.author}>
			{comment.text}
			</Comment>
		);
	});
	return (
		<div className="commentList">
		{/*<Comment author="Pete Hunt">This is a comment</Comment>
		<Comment author="Jordan Walke">This is *another* comment</Comment>*/}
		{commentNodes}
		</div>
	)
}


export default CommentList;