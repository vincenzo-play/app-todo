import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NewActivity = () => {
  return (
    <div className="bg-white sticky-bottom border-top row">
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
  );
};

const TodoList = ({ todo }) => {
  return (
    <div className="col-12 col-md-9 p-0 custom-vh-height overflow-hidden d-flex flex-column">
      <div
        className="border-bottom p-3 bg-white sticky-top row"
        style={{ height: "79px" }}
      >
        <h3 className="m-1 fw-bold text-md-start text-center ">
          {todo?.list ? todo?.list : " "}
        </h3>
      </div>

      {todo ? (
        <div className="px-3 h-100 overflow-scroll row "  >
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
                          ? "opacity-50 text-decoration-line-through m-0"
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
                    className="opacity-25"
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
   {todo &&   <NewActivity />}

    </div>
  );
};

export default TodoList;
