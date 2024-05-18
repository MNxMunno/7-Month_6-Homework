import React from "react";
import Cart from "../../static/cart/Cart";
import { useGetUsersQuery } from "../api/userSlice";

const Users = () => {
  const { data } = useGetUsersQuery();
  console.log(data);

  return (
    <div>
      <Cart data={data} />
    </div>
  );
};

export default Users;
