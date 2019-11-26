import React, { Component } from "react";

export default class HelloWorld2 extends Component {
  temp: string;
  constructor(props){
    super(props);
    this.state = {
      firstName: "John",
      lastName: "Smith",
      salary: 100000
    };
    this.temp= "test 1"
    this.increaseSalary =  this.increaseSalary.bind(this);
  }

  increaseSalary(){
    this.setState((state) =>({     
      salary: state.salary + 1000
    }));

     this.setState((state) =>({     
      salary: state.salary + 1000
    }));
  };

  render() {
    return (
      <div>
        <p>Employee Information:</p>
        <div> FirstName: {this.state.firstName}</div>
        <div> LastName : {this.state.lastName}</div>
        <div> Salary : {this.state.salary}</div>
         <button onClick = {this.increaseSalary}>Increase Salary</button>
      </div>
    );
  }
}
