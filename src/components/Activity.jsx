import React from "react";

const Activity = ({ todo }) => {
  return (
    <div className="col-12 col-md-9 p-0 vh-100">
      <div
        className="border-bottom p-3 bg-white sticky-top"
        style={{ height: "73px" }}
      >
        <h3 className="m-1 fw-bold text-md-start text-center ">
          {todo?.label ? todo?.label : "Seleziona Lista"}
        </h3>
      </div>
      <div className="p-4 h-100 overflow-scroll ">
        <ul className="list-group">
          {todo
            ? todo.activity.map((el, indx) => (
                <li className="list-group-item">
                  <input
                    className="form-check-input me-3"
                    type="checkbox"
                    defaultValue
                    id={indx}
                  />
                  <label className="form-check-label" htmlFor={indx}>
                    {el.name}
                  </label>
                </li>
              ))
            : "Nessuno"}
        </ul>
      </div>

      <div className="input-group p-4 bg-white border-top sticky-bottom shadow">
        <span className="input-group-text ">Aggiungi attività</span>
        <input
          type="text"
          class="form-control"
          aria-label="Aggiungi attività"
        />
        <button type="button" className="btn btn-primary">
          Salva
        </button>
      </div>
    </div>
  );
};

export default Activity;
