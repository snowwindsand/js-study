import React from 'react'
import {
	render
} from 'react-dom'
import CommentBox from './components/CommentBox'
import TestEs6 from './components/TestEs6'
import TickTock from './components/TestMixin'
import { message,Button } from 'antd'

let data = [{
	author: "Pete Hunt",
	text: "This is one comment"
}, {
	author: "Jordan Walke",
	text: "This is *another* comment"
}];

function handleClick() {
	console.log('click outside');
}

function handleClick(){
	message.success("hello antd",10);
}


render(
	<Button onClick={handleClick} />,
	document.getElementById('root')
)