import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const {items, clearList, handleDelete, handleEdit} = this.props
    return (
      <div>
        <ul className='list-group my-5'>
            <h3 className='text-capitalize text-center'>todo list</h3>

            {items.map( (item, i) => {
          return(
            <TodoItem 
            key={i} 
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
            />
          )
          
        })}
      
        <button type='button' className='btn btn-block btn-danger text-capitalize mt-g'
        onClick={clearList}
        >clear list</button>
        </ul>
      </div>
    )
  }
}
