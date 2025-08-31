import React from "react";
import Users from "./Users";
import useGetAllUsers from "../components/Usergetalluser"; // make sure the hook name matches

const User = () => {
  const [allUsers, loading] = useGetAllUsers(); // use the hook correctly

  console.log(allUsers);

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={{ maxHeight: "calc(78vh)" }} className="overflow-y-auto">
      {Array.isArray(allUsers) && allUsers.length > 0 ? (
        allUsers.map((user) => <Users key={user._id} user={user} />)
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default User;
