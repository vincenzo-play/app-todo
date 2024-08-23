import React from 'react'

const Activity = ({activity}) => {
  return (
    <div className='col-12 col-md-9 p-0'>
       <div className='border-bottom p-3' style={{height:'73px'}}> 
        <h3 className='m-1 fw-bold'>Nome Lista</h3>
    </div>
       <div className='p-4'>
           <ul className="list-group">
            {activity.map(el =>(
                <li className="list-group-item">
                <input className="form-check-input me-3" type="checkbox" defaultValue id={el.id} />
                <label className="form-check-label" htmlFor={el.id}>{el.label}</label>
              </li>
            ))}

          </ul>
       </div>

      <div className="input-group p-4">
        <span className="input-group-text ">Aggiungi attività</span>
        <input type="text" class="form-control" aria-label="Aggiungi attività"/>
        <button type="button" className="btn btn-primary">Salva</button>
      </div>

    </div>
)}

export default Activity