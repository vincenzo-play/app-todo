import React from 'react'

const SideBar = ({user:{id,name,img}, list}) => {

  const defaultImage = "https://picsum.photos/200"

  const handleControlImage = (img) => {
    if (img) {
      return img
    }
    return defaultImage
  }

  return (
        <div className='col-3 bg-light vh-100 p-0 border-end '>
          <div className='py-3 d-flex align-items-center justify-content-center border-bottom' style={{height:'73px'}}>
                <img src={handleControlImage(img)} alt="Avatar" 
                style={{
                    width:"40px",
                    height:"40px",
                    borderRadius:"50%"
                  }}
                  className='me-2'
                />
               <p className='fw-bold mb-0 me-2'> {name}{" #"}{id}</p>
          </div>
    
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