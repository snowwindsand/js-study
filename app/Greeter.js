/**
 * Created by Administrator on 2016/7/1.
 */
/*

var config = require('./config.json');

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};*/


import React,{Component} from 'react'
import config from './config.json';
import styles from './greeter.css';

class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
            {config.greetText}<span>Hello world!123456789</span><br />
                <span>test</span>
                </div>
        )
    }
}

export default Greeter