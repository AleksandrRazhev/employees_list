import { Component } from 'react/cjs/react.production.min';

import AppInfo from '../AppInfo/AppInfo';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: '300', increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: '500', increase: false, rise: false, id: 2 },
        { name: 'Carl W.', salary: '1000', increase: true, rise: false, id: 3 },
      ],
      nextID: 4
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {

    if (!name || !salary) return;
    const { data, nextID } = this.state;

    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      'id': nextID
    }

    const newData = [...data]
    newData.push(newItem);
    this.setState(({ nextID }) => {
      return {
        data: newData,
        nextID: ++nextID
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item;
      })
    }))
  }

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;

    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased}
        />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelelte={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm
          onAdd={this.addItem}
        />
      </div>
    );
  }
}

export default App;
