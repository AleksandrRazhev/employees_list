import { Component } from 'react/cjs/react.production.min';

import AppInfo from '../AppInfo/AppInfo';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: '300', increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: '1000', increase: false, rise: false, id: 2 },
        { name: 'Carl W.', salary: '1001', increase: true, rise: false, id: 3 },
      ],
      nextID: 4,
      term: '',
      filterID: 1,
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

  searchEmp = (items, term) => {
    if (term.length === 0) return items;

    return items.filter(item => {
      return (item.name.indexOf(term) > -1);
    });
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  filterData = (data, filterID) => {
    switch (filterID) {
      case 2: return data.filter(item => item.rise);
      case 3: return data.filter(item => item.salary > 1000);
      default: return data;
    }
  }

  onUpdateFilter = (filterID) => {
    this.setState({ filterID });
  }

  onSalary = (value, id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) item.salary = value;
        return item;
      })
    }))
  }

  render() {
    const { data, term, filterID } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const filterData = this.filterData(data, filterID);
    const visibleData = this.searchEmp(filterData, term);

    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased}
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            onUpdateFilter={this.onUpdateFilter}
          />
        </div>
        <EmployeesList
          data={visibleData}
          onDelelte={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onSalary={this.onSalary}
        />
        <EmployeesAddForm
          onAdd={this.addItem}
        />
      </div>
    );
  }
}

export default App;
