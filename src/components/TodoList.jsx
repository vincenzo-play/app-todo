import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TodoList = ({ todo }) => {
  return (
    <div className="col-12 col-md-9 p-0 vh-100 overflow-scroll">
      <div
        className="border-bottom p-3 bg-white sticky-top"
        style={{ height: "73px" }}
      >
        <h3 className="m-1 fw-bold text-md-start text-center ">
          {todo?.list ? todo?.list : " "}
        </h3>
      </div>

      {todo ? (
        <div className="p-4 h-100">
          <ul className="list-group list-group-flush">
            {todo.todo.map((el) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={el.id}
              >
                <div>
                  <input
                    className="form-check-input me-3"
                    type="checkbox"
                    checked={el.done}
                    id={el.id}
                    readOnly={true}
                  />
                  <label className="form-check-label" htmlFor={el.id}>
                    <p
                      className={
                        el.done
                          ? "text-black-50 text-decoration-line-through m-0"
                          : "m-0"
                      }
                    >
                      {el.name}
                    </p>
                  </label>
                </div>
                <button className="btn bg-light rounded-circle ">
                  <FontAwesomeIcon
                    icon="fa-regular fa-trash-can"
                    className="text-black-50"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <p className=" fs-3 text-secondary text-opacity-25">
            Nessuna attività selezionata
          </p>
        </div>
      )}
      <div className="bg-white border-top sticky-bottom">
        <div className="input-group p-4">
          <span className="input-group-text ">Aggiungi attività</span>
          <input
            type="text"
            className="form-control"
            aria-label="Aggiungi attività"
          />
          <button type="button" className="btn btn-primary">
            Salva
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
