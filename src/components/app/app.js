import React, {Component} from 'react';

import AppHeader from './../app-header';
import SearchPanel from './../search-panel/search-panel';
import TodoList from './../todo-list/todo-list';
import ItemStatus from './../item-status/item-status';
import ItemStatusFilter from './../item-status-filter';
import ItemAdd from './../item-add';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem(`Drink coffee`),
      this.createTodoItem(`Create React App`),
      this.createTodoItem(`Create Vue App`),
      this.createTodoItem(`Go to bed`)
    ],
    term: ``,
    filter: `all`
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id);

      const newArr = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newArr
      }
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({todoData}) => {
      const newArr = [...todoData, newItem];
      
      return {
        todoData: newArr
      };
    })
  };

  searchItems = (items, term) => {
    const search = term.toLowerCase();

    if (term.length === 0) {
      return items;
    }
   
    return items.filter((el) =>  el.label.toLowerCase().indexOf(search) > -1);
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  };

  onSearchChange = (term) => {
    this.setState({term});
  }

  onBtnClick = (filter) => {
    this.setState({filter});
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, `important`)
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, `done`)
      };
    });
  };

  filterItems(items, filter) {
    switch (filter) {
      case `all`:
        return items;
      case `active`:
        return items.filter((el) => !el.done);
      case `done`:
        return items.filter((el) => el.done);
      default:
        return items;
    }
  }

  render() {
    const {todoData, term, filter} = this.state;
    const countOfToDo = todoData.filter((el) => !el.done).length;
    const countOfDone = todoData.length - countOfToDo;
    
    const visiableItems = this.filterItems(
      this.searchItems(todoData, term), filter);

    return (
      <div className="container mt-4">
        <AppHeader />
        <ItemStatus toDo={countOfToDo} done={countOfDone} />
        <SearchPanel onSearchChange={this.onSearchChange} />
        <ItemStatusFilter filter={filter} onBtnClick={this.onBtnClick} />
        <TodoList 
          todos={visiableItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <ItemAdd 
          onAdded={this.addItem} />
      </div>
    );
  }
};
