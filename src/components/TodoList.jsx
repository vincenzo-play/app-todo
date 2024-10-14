import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const NewActivity = ({onCreate, text,setTest}) => {


  return (
    <div className="bg-white border-top row">
      <div className="input-group p-4">
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

const TodoList = ({ todo, list, onCreate,newList, setNewList, editList, setEditList}) => {
  const [text,setTest] = useState("")


  
  return (
    <div className="col-12 col-md-9 p-0 custom-vh-height overflow-hidden d-flex flex-column">
      <div
        className={`${todo && "border-bottom"} p-3 bg-white sticky-top row`}
        style={{ height: "73px" }}
      >
       { 
      editList || newList ?
        <div className="d-flex justify-content-between align-items-center">
         <div className="" style={{height:"42px"}}>
            <input
              type="text"
              className="form-control"
              aria-label="Lista attività"
              // onChange={(e)=>setTest(e.target.value)}
              value={list?.name}
            /> 
         </div>
          <div className="px-3">
            <button 
              className="btn btn-success btn-sm mx-3"
              onClick={editList ? ()=> setEditList(false) : () =>setNewList(false)}
              >
                <FontAwesomeIcon icon="fa-solid fa-check"  />
              </button>
              <button 
              className="btn btn-danger btn-sm "
              onClick={editList ? ()=> setEditList(false) : () =>setNewList(false)}
              >
                <FontAwesomeIcon icon="fa-solid fa-close"  />
              </button>
          </div>
        </div> 
        : 
        <div className="d-flex justify-content-between align-items-center">
          <h3 className=" fw-bold text-md-start text-center ">
          {list ? list.name : ""}
        </h3>
        {todo &&  <div className="px-3"> 
            <button 
            className="btn btn-outline-secondary btn-sm rounded-circle"
            onClick={()=> setEditList(true)}
            >
              <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
            </button>
          </div>}
        </div>
    }
      </div>

      {todo ? (
        <div className="px-3 h-100 overflow-scroll row "  >
          <ul className="list-group list-group-flush">
            {todo.map((el) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={el.id}
              >
                <div>
                  <input
                    className="form-check-input check-cm me-3"
                    type="checkbox"
                    checked={el.done}
                    id={el.id}
                    readOnly={true}
                  />
                  <label className="form-check-label" htmlFor={el.id}>
                    <p
                      className={
                        el.done
                          ? "opacity-50 text-decoration-line-through m-0"
                          : "m-0"
                      }
                    >
                      {el.name}
                    </p>
                  </label>
                </div>
                <button className="btn btn-outline-danger btn-sm rounded-circle ">
                  <FontAwesomeIcon
                    icon="fa-regular fa-trash-can"
                    className="opacity-50"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className=" h-100 d-flex justify-content-center align-items-center">
          <p className=" fs-3 text-secondary text-opacity-25 m-0">
            Nessuna lista selezionata
          </p>
        </div>
      )}
   {todo &&   <NewActivity onCreate={onCreate} text={text}setTest={setTest}/>}

    </div>
  );
};

export default TodoList;
