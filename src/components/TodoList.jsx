import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = ({ todo, list,newList, setNewList, editList, setEditList}) => {

  
  return (
    <div className="p-3 h-100">
      <div className={`${todo && "border-bottom"}`}>
       { 
      editList || newList ?
        <div className="d-flex justify-content-center align-items-center p-3">
    
            <input
              type="text"
              className="form-control mb-1"
              aria-label="Lista attività"
              // onChange={(e)=>setTest(e.target.value)}
              value={list?.name}
            /> 
      
         
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
     
        : 
        <div className="d-flex justify-content-between align-items-center p-3">
          <h3 className="fw-bold">
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
        <div className="p-3 h-100 overflow-scroll">
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
   

    </div>
  );
};

export default TodoList;
