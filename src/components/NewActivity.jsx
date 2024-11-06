import React, { useState } from 'react'

const NewActivity = ({onCreate}) => {

    const [text,setTest] = useState("")

    return (
      <div className="bg-white border-top p-1">
        <div className="input-group p-3">
          <span className="input-group-text ">Aggiungi attività</span>
          <input
            type="text"
            className="form-control"
            aria-label="Aggiungi attività"
            onChange={(e)=>setTest(e.target.value)}
          />
          <button type="button" className="btn btn-cm-primary" onClick={()=>onCreate(text)}>
            Salva
          </button>
        </div>
  
      </div>
    );
  };

export default NewActivity