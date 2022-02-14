import './EmployeesListItem.scss';

const EmployeesListItem = (props) => {

  const onSalary = (e) => {
    let salary = e.target.value;
    if (!+salary) {
      salary = props.salary
      console.log('The entered value is not a number! Please enter a number');
    };
    props.onSalary(salary, props.id);
    e.target.value = `${salary}$`;
  };

  const onKeyDown = (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      console.log(e.code);
      onToggleProp(e);
    };
  };

  const { name, salary, increase, rise, onDelelte, onToggleProp } = props;
  const style = {
    fontSize: '1.25em',
  };

  let classNames = 'list-group-item d-flex justify-content-between';
  if (increase) classNames += ' increase';
  if (rise) classNames += ' like';

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        style={style}
        tabIndex="0"
        onKeyDown={onKeyDown}
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
