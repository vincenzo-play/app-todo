import React from "react";

const CoreModal = ({ onClick, title, text, onClose, error = false }) => {
  return (
    <div
      className="modal modal-dialog modal-dialog-centered"
      style={{ display: "block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="d-flex justify-content-between align-items-center p-3">
            <h5 className="fw-bold">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body text-danger">
            <p className={error && "text-danger"}>{text}</p>
          </div>
          {!error && (
            <div className="modal-footer d-flex justify-content-center ">
              <button className="btn btn-secondary w-25" onClick={onClose}>
                No
              </button>
              <button className="btn btn-danger w-25" onClick={onClick}>
                Si
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoreModal;
