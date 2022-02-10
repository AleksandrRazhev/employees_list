import './EmployeesListItem.css';

const EmployeesListItem = (props) => {

  const onSalary = (e) => {
    let salary = e.target.value;
    if (!+salary) {
      salary = props.salary
      console.log('The entered value is not a number! Please enter a number')
    };
    props.onSalary(salary, props.id);
  }

  const { name, salary, increase, rise, onDelelte, onToggleProp } = props;

  let classNames = 'list-group-item d-flex justify-content-between';
  if (increase) classNames += ' increase';
  if (rise) classNames += ' like';

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle='rise'
      >{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={`${salary}$`}
        onBlur={onSalary}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle='increase'
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
          className="btn-trash btn-sm"
          onClick={onDelelte}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmployeesListItem;
