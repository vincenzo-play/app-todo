import React from "react";

const User = ({ user: { id, name, img } }) => {
  const defaultImage = "https://picsum.photos/200";

  const handleControlImage = (img) => {
    if (img) {
      return img;
    }
    return defaultImage;
  };

  return (
    <div
      className="py-3 d-flex align-items-center justify-content-center border-bottom sticky-sm-top bg-light"
      style={{ height: "73px" }}
    >
      <img
        src={handleControlImage(img)}
        alt="Avatar"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
        className="me-2"
      />
      <p className="fw-bold mb-0 me-2">
        {" "}
        {name}
        {" #"}
        {id}
      </p>
    </div>
  );
};

export default User;
