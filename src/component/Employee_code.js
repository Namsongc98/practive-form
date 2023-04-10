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
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.CodeEmployee) {
      alert("Mời nhập mã nhân viên!");
      return;
    }
    let check = this.state.MenuCodeEmployee.find(
      (item) => item === this.state.CodeEmployee
    );
    const reg = /^NV[a-z0-9]{8,15}/;
    if (reg.test(this.state.CodeEmployee) ) {
      console.log( this.state.CodeEmployee);
      if (!check) {
        this.setState({
          MenuCodeEmployee: [
            ...this.state.MenuCodeEmployee,
            this.state.CodeEmployee,
          ],
        });
        alert("Thêm mã nhân viên thành công!");
      } else {
        alert("Code đã tồn tại!");
      }
    }else{
      alert("nhập không đúng cú pháp")
    }
   };

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
        </form>
        <ul>
          {this.state.MenuCodeEmployee.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default EmployeeCode;
