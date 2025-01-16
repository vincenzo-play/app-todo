import React from "react";

const User = ({ user: { name, image } }) => {
  const defaultImage = "./todo.svg";

  const handleControlImage = (image) => {
    if (image) {
      return image;
    }
    return defaultImage;
  };

  return (
    <div
      className="py-3 d-flex align-items-center justify-content-center bg-light"
      style={{ height: "73px" }}
    >
      <img
        src={handleControlImage(image)}
        alt="Avatar"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: 10,
        }}
        className="me-2"
      />
      <p className="fw-bold mb-0 me-2">{name}</p>
    </div>
  );
};

export default User;
