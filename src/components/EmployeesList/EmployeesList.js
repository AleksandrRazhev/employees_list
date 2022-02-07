import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';

import './EmployeesList.css';

const EmployeesList = ({ data, onDelelte, onToggleProp }) => {

  const elements = data.map(item => {

    const { id, ...itemProps } = item;

    return (
      <EmployeesListItem key={id}
        {...itemProps}
        onDelelte={() => onDelelte(id)}
        onToggleProp={(e) =>  onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
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
