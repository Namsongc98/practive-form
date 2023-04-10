import { Component } from "react";
class EmployeeCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CodeEmployee: "",
      MenuCodeEmployee: [],
    };
  }
  handleCode = (event) => {
    this.setState({
      CodeEmployee: event.target.value,
    });
    console.log(this.state.CodeEmployee);
};
handleSubmit = (e)=>{
    e.preventDefault();
    this.setState({
        MenuCodeEmployee:[...this.state.MenuCodeEmployee,this.state.CodeEmployee]
    })
    console.log(this.state.MenuCodeEmployee)
}

  render() {
    return (
      <>
        <form>
          <input
            value={this.state.CodeEmployee}
            type="text"
            onChange={this.handleCode}
          />
          <label>EmployeeCode </label>
          <button onClick={this.handleSubmit}> Submit</button>
          <ul>
          {this.state.MenuCodeEmployee.map((item,id)=>
          {  return(<li>{item[id]}</li>)}
          )}
          </ul>
        </form>
      </>
    );
  }
}

export default EmployeeCode;
