import './App.css';
import AppInfo from '../AppInfo/AppInfo';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

function App() {

  const data = [
    {name: 'John C.', salary: '300', increase: false, id: 1},
    {name: 'Alex M.', salary: '500', increase: false, id: 2},
    {name: 'Carl W.', salary: '1000', increase: true, id: 3},
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data = {data}/>
      <EmployeesAddForm />
    </div>
  );
}

export default App;
