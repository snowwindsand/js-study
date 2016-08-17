import React, { Component } from 'react';
import Child from './child.js';


let testArry = [1, 3, 5, 2, 4, 6];

class TestAsync extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {value:0};
    }
    
    

    // * asyncAlert () {
    //     // array.forEach(function (element) {
    //     //     var f = await addCount(element);
    //     //     this.setState({value:f});
    //     // }, this.testArry);
    //     for (var index = 0; index < testArry.length; index++) {
    //         var element = testArry[index];
    //         if(element % 2 == 0){
    //             yield element;
    //         }
    //     }
    // }
    addCount(x){
        return x+1;
    }
    clickHandler() {
        // var f = this.asyncAlert();
        // //this.setState({value:f});
        // var result = f.next();
        // while(!result.done){
        //     setTimeout(this.changeValue(result.value),1000);
        //     result = f.next();
        // }
        let c = new Child();
        c.print();
    }
    changeValue(value){
        this.setState({value:value});
    }
    render() {
        return (
            <div>
                <h1>Test Page</h1>
                <button onClick={this.clickHandler}>Test111</button>
                <span>{this.state.value}</span>
            </div>
        );
    }
}

export default TestAsync;