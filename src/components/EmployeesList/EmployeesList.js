import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';

import './EmployeesList.css';

const EmployeesList = ({ data, onDelelte, onToggleProp, onSalary }) => {

  const elements = data.map(item => {

    const { id } = item;

    return (
      <EmployeesListItem key={item.id}
        {...item}
        onDelelte={() => onDelelte(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        onSalary={onSalary}
      />
    )
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;
