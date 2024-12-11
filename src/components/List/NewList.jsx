import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewList = ({ list }) => {
  return (
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
        //   onClick={
        //     editList ? () => setEditList(false) : () => setNewList(false)
        //   }
      >
        <FontAwesomeIcon icon="fa-solid fa-check" />
      </button>
      <button
        className="btn btn-danger btn-sm "
        //   onClick={
        //     editList ? () => setEditList(false) : () => setNewList(false)
        //   }
      >
        <FontAwesomeIcon icon="fa-solid fa-close" />
      </button>
    </div>
  );
};

export default NewList;
