/**
 * Created by Administrator on 2016/7/1.
 */

import React, {
    Component,
    PropTypes
} from 'react'
import {
    render
} from 'react-dom'
import {
    Router,
    Route,
    Link,
    hashHistory,
    IndexRoute
} from 'react-router'


const App = ({
    children
}) => (
    <div>
        <h1>App</h1>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {children}
    </div>
);


/*class App extends Component {
    render() {
        return (
            <div>Hello 1112</div>)
    }
}*/



const About = () => (
    <h3>About</h3>
);

const Inbox = ({
    children
}) => (
    <div>
    <Link to="/messages/:12">12</Link>
    <h2>Inbox</h2>
        {children || 'Welcome to your inbox'}
        </div>
);

const Message = ({
    params
}) => (
    <h3>Message {params.id}</h3>
);

const DashBoard = () => (
    <div>
    Welcome from the default Page!
    </div>
)

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={DashBoard} />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
                </Route>
            </Route>
    </Router>, document.getElementById('root'));