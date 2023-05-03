import React, { Component } from 'react'
import Board from './Board'

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arg1: "",
            result: 0,
            op: ""
        }
    }
    evaluate(arg1, arg2, op) {
        let result = 0;
        if (op === '+') return arg1 + arg2
        else if (op === '-') return arg1 - arg2
        else if (op === '*') return arg1 * arg2
        else if (op === '/') return arg1 / arg2
        else if (op === '%') return arg1 % arg2
        return result;

    }
    isNumeric(id) {
        if (id[0] === '.') return true;
        // let t= id[0].charCodeAt(0)>=48;
        // console.log(t+ " after compare");
        if (id[0].charCodeAt(0) >= 48 && id[0].charCodeAt(0) < 58) return true;
        return false;
    }
    isOperator(id)
    {
        if (id === '+'|| id==='-'||id==='/'||id==='*'||id==='%') return true;
        return false;
        
    }
     toNumberString(num) { 
        if (Number.isInteger(num)) { 
          return num + ".0"
        } else {
          return num.toString(); 
        }
      }

    handleValues(id) {
        // console.log(id+" "+this.state.arg1+" "+this.state.result+" "+this.state.op)
        if (this.state.arg1==="Invalid Expression") {
            this.setState({
                arg1:"",
                op:"",
                result:0
            })
            return;
        }
        else if (id === '=') {
            if (this.state.arg1 === "") {
                this.setState({
                    arg1: "Invalid Expression"
                })
            }
            if (this.state.op==="") {
                let res = parseFloat(this.state.arg1);
                this.setState({
                    result: res
                })
            }
            else {
                let res = parseFloat(this.state.arg1);
                res = this.evaluate(this.state.result, res, this.state.op)
                let arg = this.toNumberString(res)
                // console.log("Evalueated: "+res+"  "+arg)
                this.setState({
                    arg1: arg,
                    op: "",
                    result: res
                })
            }
        }
        else if (id === 'AC') {
            this.setState({
                arg1: "",
                result: 0,
                op: ""
            })
        }
        else if (id === '+/-') {
            let arg = "-" + this.state.arg1;
            this.setState({
                arg1: arg
            })
        }
        else if (this.isNumeric(id)) {
            this.setState({
                arg1: this.state.arg1 + id
            })
        }
        else if(this.isOperator(id)){
            if (this.state.op.length >= 1) {
                this.setState({
                    arg1: "Invalid Expression"
                })
            }
            // this.state.op=id;
            let res = parseFloat(this.state.arg1)
            this.setState({
                arg1: "",
                result: res,
                op: id
            })

        }
 

    }
    render() {
        return (
            <div> Successfull Task!</div>
            // <Board color={this.props.color} value={this.state.arg1} heading={this.props.heading} onClick={(id) => {this.handleValues(id)}} />
        )
    }
}
