import { Component } from 'react';

import './AppFilter.scss';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, text: 'Все сотрудники'},
        {id: 2, text: 'На повышение'},
        {id: 3, text: 'З/П больше 1000$'},
      ],
      filterID: 1,
    }
  }

  onUpdateFilter = (e) => {
    const filterID = +e.target.getAttribute('data-filterid');

    new Promise ((resolve, reject) => resolve(filterID))
    .then(filterID => this.setState({filterID}))
    .then(() => this.props.onUpdateFilter(this.state.filterID))
  }

  addClassName = (item) => {
    const activeClassName = 'btn-light';
    const className = 'btn-outline-light';
    if (item.id === this.state.filterID) {
      return activeClassName;
    } else {
      return className
    }
  }

  render() {

    const elements = this.state.data.map(item => {
      return (
        <button
          key={item.id}
          className={`btn ${this.addClassName(item)}`}
          type='button'
          onClick={(e) => this.onUpdateFilter(e)}
          data-filterid={item.id}
        >
          {item.text}
        </button>
      )
    })

    return (
      <div className="btn-group">
        {elements}
      </div>
    )
  }
}

export default AppFilter;
