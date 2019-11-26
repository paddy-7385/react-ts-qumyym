import React,{Component} from 'react'

export default class HelloWorld2 extends Component{
  temp: string
  constructor(props){
    super(props);
    this.state = {
      firstName: "John",
      lastName: "Smith",
      salary: 100000
    };
    this.temp= "Employee Info:"
  }

  render() {
  return(
    <div>
     <p>{this.temp}</p>
     <div> FirstName: {this.state.firstName}</div>
     <div> LastName : {this.state.lastName}</div>
     <div> Salary : {this.state.salary}</div>
    </div>
  )
}
}

