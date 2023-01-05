import React, { Component } from 'react'

export default class Todoinput extends Component {
  render() {

    const {item, handleChange, handleSubmit} = this.props

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>  
            <div className="input-group"> 
                <div className="input-group d-flex justify-content-between my-2">
                    <div className="input-group-text bg-primary text-white">
                    <i className='fas fa-book' />
                    </div>   
                    <input type='text' className='form-control text-capitalize' 
                    placeholder='Add a Todo Item'
                    value={item}
                    onChange={handleChange}
                    />         
                </div>              
            </div>
            <button className='mt-3 btn btn-warning btn-block' type='submit'>Add Item</button>
            </form>
      </div>
    )
  }
}
