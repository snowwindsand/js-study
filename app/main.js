/**
 * Created by Administrator on 2016/7/1.
 */

/*
var greeter = require('./Greeter.js');

document.getElementById('root').appendChild(greeter());*/


import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css';

render(<Greeter />,document.getElementById('root'));