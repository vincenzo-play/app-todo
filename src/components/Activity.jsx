import React from "react";

const Activity = ({ todo }) => {
  return (
    <div className="col-12 col-md-9 p-0 vh-100">
      <div
        className="border-bottom p-3 bg-white sticky-top"
        style={{ height: "73px" }}
      >
        <h3 className="m-1 fw-bold text-md-start text-center ">
          {todo?.label ? todo?.label : " "}
        </h3>
      </div>
      <div className="p-4 h-100 overflow-scroll">
        {todo ? (
          <ul className="list-group">
            {todo.activity.map((el) => (
              <li className="list-group-item" key={el.id}>
                <input
                  className="form-check-input me-3"
                  type="checkbox"
                  checked={el.done}
                  id={el.id}
                />
                <label className="form-check-label" htmlFor={el.id}>
                  <p
                    className={
                      el.done
                        ? "text-black-50 text-decoration-line-through m-0"
                        : "m-0"
                    }
                  >
                    {" "}
                    {el.name}
                  </p>
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <p className=" fs-3 text-secondary text-opacity-25   ">
              Nessuna attività selezionata
            </p>
          </div>
        )}
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
