import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoListItem = ({ todo, onChangeTodo, onDelete }) => {
  return (
    <>
      {todo?.map((el) => (
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
              onChange={() => onChangeTodo(el)}
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
          <button
            className="btn btn-outline-danger btn-sm rounded-circle"
            onClick={() => onDelete(el)}
          >
            <FontAwesomeIcon
              icon="fa-regular fa-trash-can"
              className="opacity-50"
            />
          </button>
        </li>
      ))}
    </>
  );
};

export default TodoListItem;
