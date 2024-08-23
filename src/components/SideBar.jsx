import React from 'react'
import User from './User'

const SideBar = ({user, list}) => {



  return (
        <div className='col-3 bg-light vh-100 p-0 border-end '>
            <User user={user}/>
          <div className='p-4'>
            <div className="list-group">
              {list.map(el =>(
              <button type="button" className="list-group-item list-group-item-action">{el.label}</button>
              ))}
            </div>
          </div>
        </div>
  )
}

export default SideBar