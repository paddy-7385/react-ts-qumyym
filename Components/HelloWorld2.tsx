import React, { Component } from "react";

export default class HelloWorld2 extends Component {
  temp: string;
  constructor(props){
    super(props);
    this.state = {
      firstName: "John",
      lastName: "Smith",
      salary: 100000,
      words: ["Abc","xyz"]
    };
    this.temp= "test 1"
    this.increaseSalary =  this.increaseSalary.bind(this);
  }

  increaseSalary(){
     const newWords = this.state.words;
    newWords.push("!!");
    console.log(newWords);
    this.setState({words: newWords})
  };

  render() {
    return (
      <div>
        <p>Employee 1 Information:</p>
        <div> FirstName: {this.state.firstName}</div>
        <div> LastName : {this.state.lastName}</div>
        <div> Salary : {this.state.salary}</div>
        <div> Words : {this.state.words}</div>
         <button onClick = {this.increaseSalary}>Increase Salary</button>
      </div>
    );
  }
}
