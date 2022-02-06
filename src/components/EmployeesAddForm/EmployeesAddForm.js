import { Component } from 'react/cjs/react.production.min';

import './EmployeesAddForm.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: ''
    })
  }

  render() {

    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}
        >
          <input type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            value={name}
            name='name'
            onChange={this.onValueChange}
          />
          <input type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            value={salary}
            name='salary'
            onChange={this.onValueChange}
          />

          <button type="submit"
            className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm;
