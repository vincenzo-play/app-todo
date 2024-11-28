import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todo, list,newList, setNewList, editList, setEditList,onChangeTodo, onDelete}) => {

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
              className="btn btn-success btn-sm mx-2"
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
            {todo.filter(( el ) => el.done === false ).map((el) => (
              <TodoListItem
              todo={el}
              onChangeTodo={()=>onChangeTodo(el)}
              onDelete={() => onDelete(el)}
              />
            ))}
          </ul>

          <p className="fw-bold m-0">Completati</p>
          <ul className="list-group list-group-flush">
          {todo.filter(( el ) => el.done === true ).map((el) => (
              <TodoListItem
              todo={el}
              onChangeTodo={()=>onChangeTodo(el)}
              onDelete={() => onDelete(el)}
              />
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
