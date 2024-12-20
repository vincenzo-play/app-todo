import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoListItem = ({ todo, onChangeTodo, onDelete }) => {
  const [delModal, setDelModal] = useState(false);

  return (
    <>
      {todo?.map((el) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={el.id}
        >
          <div className="w-100 d-flex">
            <input
              className="form-check-input check-cm me-3"
              type="checkbox"
              checked={el.done}
              id={el.id}
              onChange={() => onChangeTodo(el, { done: !el.done })}
            />
            <input
              disabled={el.done}
              className={
                el.done
                  ? "opacity-50 text-decoration-line-through m-0 border-0 "
                  : "mx-1 my-0 ps-3 border-0 w-100"
              }
              type="text"
              value={el.name}
              id={el.id}
              onChange={(e) => onChangeTodo(el, { name: e.target.value })}
            />
          </div>

          {delModal === el.id ? (
            <div className="d-flex">
              <button
                className="btn btn-sm btn-danger mx-1 "
                onClick={() => {
                  onDelete(el);
                  setDelModal(false);
                }}
              >
                Elimina
              </button>
              <button
                className="btn btn-sm btn-light  mx-1 "
                onClick={() => setDelModal(false)}
              >
                Annulla
              </button>
            </div>
          ) : (
            <button
              id={el.id}
              className="btn btn-outline-danger btn-sm rounded-circle"
              onClick={() => setDelModal(el.id)}
            >
              <FontAwesomeIcon
                icon="fa-regular fa-trash-can"
                className="opacity-50"
              />
            </button>
          )}
        </li>
      ))}
    </>
  );
};

export default TodoListItem;
