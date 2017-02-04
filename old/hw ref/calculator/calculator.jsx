import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: 0, num1: 0, num2: 0};
    this.setNum1 = this.setNum1.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({num1, num2}) {
    this.setstate({num1, num2});
  }

  add(e) {
    e.preventDefault();
    let result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  sub(e) {
    e.preventDefault();
    let result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <br/>
        <input type="text" value={this.state.num1} onChange={this.handleChange}>num1</input>
        <br/>
        <input type="text" value={this.state.num2} onChange={this.handleChange}>num2</input>
        <br/>
        <button onclick="add()">+</button>
        <button onclick="sub()">-</button>
      </div>
    );
  }

  setNum1(e) {
  // your code here
  }

}

export default Calculator;
