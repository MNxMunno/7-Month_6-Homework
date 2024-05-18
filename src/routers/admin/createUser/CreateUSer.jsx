import React, { useEffect, useState } from "react";
import { usePostUsersMutation } from "../../../context/api/userApi";

let initalState = {
  firsname: "",
  lastname: "",
  age: "",
};
const CreateUSer = () => {
  let [createUser, { isLoading, isSuccess }] = usePostUsersMutation();
  const [newUser, setNewUser] = useState(initalState);
  useEffect(() => {
    if (isSuccess) {
      setNewUser(initalState);
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(newUser);
  };

  return (
    <div>
      <h2>CreateUSer</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={newUser.firsname}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, firsname: e.target.value }))
          }
          type="text"
          name=""
          id=""
        />
        <input
          value={newUser.lastname}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, lastname: e.target.value }))
          }
          type="text"
          name=""
          id=""
        />
        <input
          value={newUser.age}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, age: e.target.value }))
          }
          type="number"
          name=""
          id=""
        />
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateUSer;
