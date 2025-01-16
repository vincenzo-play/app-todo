import React, { useState } from "react";

const NewActivity = ({ onCreate, list }) => {
  const [text, setTest] = useState("");

  const handleCreateActivity = (txt) => {
    onCreate(txt);
    setTest("");
  };

  return (
    <div className="bg-white border-top p-1">
      <div className="input-group p-3 d-flex">
        <span className="input-group-text ">Aggiungi attività</span>
        <input
          disabled={list === undefined}
          type="text"
          className="form-control"
          aria-label="Aggiungi attività"
          value={text}
          onChange={(e) => setTest(e.target.value)}
        />
        <button
          disabled={list === undefined}
          type="button"
          className="btn btn-cm-primary z-0"
          onClick={() => handleCreateActivity(text)}
        >
          Salva
        </button>
      </div>
    </div>
  );
};

export default NewActivity;
