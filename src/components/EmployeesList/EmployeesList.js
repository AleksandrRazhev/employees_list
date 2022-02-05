import './EmployeesList.css';
import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';

const EmployeesList = ({data}) => {

  const elements = data.map(item => {

    const {id, ...itemProps} = item;

    return (
      <EmployeesListItem key = {id} {...itemProps}/>
    )
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;
